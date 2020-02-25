import "../../../node_modules/react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import { QuillModules, QuillFormats } from "../../../helper/quill";
import "./index.scss";
import React from "react";
import { useState, useEffect } from "react";
import { withRouter } from "next/router";
import { listCategories } from "../../../controller/category";
import { listTags } from "../../../controller/tag";
import { createPost } from "../../../controller/post";
import { getCookie } from "../../../controller/auth";
import Swal from "sweetalert2";

const PostCreate = ({ router }) => {
  const [values, setValues] = useState({
    title: "",
    formData: "",
    error: "",
    success: "",
    loading: false,
    imgName: ""
  });

  const getPostDataFromLocalStorage = () => {
    if (typeof window === "undefined") {
      return false;
    }
    if (localStorage.getItem("post")) {
      return JSON.parse(localStorage.getItem("post"));
    } else {
      return false;
    }
  };
  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
    loadCategoriesFromEndPoint();
    loadTagsFromEndPoint();
  }, [router]);

  const { title, formData, error, success, imgName } = values;
  const [imgPreview, setImgPreview] = useState("");
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [checkedCategory, setCheckedCategory] = useState([]);
  const [checkedTag, setCheckedTag] = useState([]);
  const token = getCookie("token");

  const [body, setBody] = useState(getPostDataFromLocalStorage());

  const handleChange = name => e => {
    formData.set(name, e.target.value);
    setValues({ ...values, formData, [name]: e.target.value, error: "" });
  };

  const handleChangePhoto = name => e => {
    const value = e.target.files[0];
    formData.set(name, value);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImgPreview(reader.result);
      setValues({ ...values, formData, error: "", imgName: value });
    };
    if (value) {
      reader.readAsDataURL(value);
    }
  };

  const showImgPreview = () => {
    if (imgPreview && imgName) {
      return (
        <div className="img-preview">
          <p className="img-name">Image name: {imgName.name}</p>
          <img src={imgPreview} alt="" />
        </div>
      );
    } else {
      return (
        <div className="img-preview">
          <p className="img-name">You haven't select an image</p>
        </div>
      );
    }
  };

  const handleChangeBody = e => {
    setBody(e);
    formData.set("body", e);
    if (typeof window !== "undefined") {
      localStorage.setItem("post", JSON.stringify(e));
    }
  };

  const loadCategoriesFromEndPoint = () => {
    listCategories().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  const loadTagsFromEndPoint = () => {
    listTags().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setTags(data);
      }
    });
  };

  const showCategoriesListToScreen = () => {
    return (
      categories &&
      categories.map((category, index) => {
        return (
          <div className="post_create_right_categories_box" key={index}>
            <input
              type="checkbox"
              className="checkbox"
              onChange={handleChangeCategories(category._id)}
            />
            <div className="checkbox_title">
              <label>{category.name.toUpperCase()}</label>
            </div>
          </div>
        );
      })
    );
  };

  const showTagsListToScreen = () => {
    return (
      tags &&
      tags.map((tag, index) => {
        return (
          <label className="post_create_right_tags_box" key={index}>
            <input
              type="checkbox"
              className="checkbox"
              onChange={handleChangeTags(tag._id)}
            />
            <label className="checkbox_title">
              <label>{tag.name.toUpperCase()}</label>
            </label>
          </label>
        );
      })
    );
  };

  const handleChangeCategories = category => () => {
    setValues({ ...values, error: "" });
    // Check if clicked category is available in array or not
    const clickedCategory = checkedCategory.indexOf(category);
    const allCategory = [...checkedCategory];
    if (clickedCategory === -1) {
      allCategory.push(category);
    } else {
      allCategory.splice(clickedCategory, 1);
    }
    setCheckedCategory(allCategory);
    formData.set("categories", allCategory);
  };

  const handleChangeTags = tag => () => {
    setValues({ ...values, error: "" });
    // Check if clicked category is available in array or not
    const clickedTag = checkedTag.indexOf(tag);
    const allTag = [...checkedTag];
    if (clickedTag === -1) {
      allTag.push(tag);
    } else {
      allTag.splice(clickedTag, 1);
    }
    setCheckedTag(allTag);
    formData.set("tags", allTag);
  };

  const publishPosts = e => {
    setValues({ ...values, loading: true });
    createPost(formData, token).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });

        showErrorMessage();
      } else {
        setValues({ ...values, loading: false, error: "", title: "" });
        setBody("");
        setCategories([]);
        setTags([]);
        showRedirectMessageWhenSuccess();
        setTimeout(() => {
          router.push("/dashboard-next/posts/read");
        }, 500);
      }
    });
  };

  const showRedirectMessageWhenSuccess = () =>
    Swal.fire({
      position: "top",
      type: "success",
      title: "Add new post successfully. Redirecting... ",
      showConfirmButton: false,
      timer: 2500,
      timerProgressBar: "true",
      toast: true,
      background: "#8AD400",
      padding: "1.5rem",
      customClass: {
        title: "title-class"
      }
    });

  const showErrorMessage = () =>
    Swal.fire({
      position: "top",
      type: "success",
      title: `Error: ${error}`,
      showConfirmButton: false,
      timer: 2500,
      timerProgressBar: "true",
      toast: true,
      background: "#FDECEA",
      padding: "1.5rem 5rem",
      customClass: {
        title: "title-error"
      }
    });

  return (
    <React.Fragment>
      <div className="post_create">
        <div className="post_create_container">
          <div className="post_create_left">
            <form action="">
              <div className="form-group post_create_box_header">
                <div className="post_create_title">Add New Post</div>
                <input
                  type="text"
                  className="post_create_input form-control"
                  placeholder="Enter title here"
                  onChange={handleChange("title")}
                />
              </div>
              <div className="form-group post_create_box_quill">
                <ReactQuill
                  modules={QuillModules}
                  formats={QuillFormats}
                  value={body}
                  placeholder="Write something amazing..."
                  onChange={handleChangeBody}
                />
              </div>
              <div className="form-group post_create_box_img">
                <label
                  className="btn btn-outline-success"
                  style={{ cursor: "pointer", width: "100%", margin: "auto" }}
                >
                  Upload featured image - Max 2 MB
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleChangePhoto("photo")}
                  />
                </label>
                {showImgPreview()}
              </div>
            </form>
          </div>
          <div className="post_create_right">
            <div className="post_create_right_status">
              <div className="post_create_right_status_preview">
                <button className="btn btn-secondary">Preview</button>
              </div>
              <div className="post_create_right_status_draft">
                <i className="fa fa-key"></i>
                <span>Status: Draft</span>
              </div>
              <div className="post_create_right_status_draft">
                <i className="fa fa-eye"></i>
                <span>View: 100</span>
              </div>
            </div>
            <div className="post_create_right_btn">
              <div className="post_create_right_btn_box">
                <a onClick={() => publishPosts()}>publish</a>
              </div>
            </div>
            <div className="post_create_right_categories">
              <div className="post_create_right_categories_title">
                Categories
              </div>
              <hr />

              {showCategoriesListToScreen()}
            </div>
            <div className="post_create_right_tags">
              <div className="post_create_right_tags_title">Tags</div>
              <hr />

              {showTagsListToScreen()}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default withRouter(PostCreate);

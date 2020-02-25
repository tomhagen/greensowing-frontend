import React from "react";
import { useState, useEffect } from "react";
import { getData, updateData } from "../../../controller/home";
import Swal from "sweetalert2";
import { getCookie } from "../../../controller/auth";

const HomeRead = () => {
  const [homeData, setHomeData] = useState([]);
  const token = getCookie("token");

  const [values, setValues] = useState({
    carousel_title1: "",
    carousel_title1: "",
    carousel_title2: "",
    carousel_subtitle2: "",
    carousel_title3: "",
    carousel_subtitle3: "",
    carousel_title4: "",
    carousel_subtitle4: "",
    about_title: "",
    about_content: "",
    about_subcontent: "",
    product_title: "",
    product_content: "",
    product_greenhouse: "",
    product_variety: "",
    product_cultivation: "",
    product_material: ""
  });

  const [error, setError] = useState(false);

  const {
    carousel_title1,
    carousel_subtitle1,
    carousel_title2,
    carousel_subtitle2,
    carousel_title3,
    carousel_subtitle3,
    carousel_title4,
    carousel_subtitle4,
    about_title,
    about_content,
    about_subcontent,
    product_title,
    product_content,
    product_greenhouse,
    product_variety,
    product_cultivation,
    product_material
  } = values;

  const handleChange = name => e => {
    setValues({ ...values, [name]: e.target.value });
  };
  useEffect(() => {
    loadHomeData();
  }, []);

  const loadHomeData = () => {
    return getData().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        const {
          carousel_title1,
          carousel_subtitle1,
          carousel_title2,
          carousel_subtitle2,
          carousel_title3,
          carousel_subtitle3,
          carousel_title4,
          carousel_subtitle4,
          about_title,
          about_content,
          about_subcontent,
          product_title,
          product_content,
          product_greenhouse,
          product_variety,
          product_cultivation,
          product_material
        } = data;
        setValues({
          ...values,
          carousel_title1,
          carousel_subtitle1,
          carousel_title2,
          carousel_subtitle2,
          carousel_title3,
          carousel_subtitle3,
          carousel_title4,
          carousel_subtitle4,
          about_title,
          about_content,
          about_subcontent,
          product_title,
          product_content,
          product_greenhouse,
          product_variety,
          product_cultivation,
          product_material
        });
      }
    });
  };

  const submitData = e => {
    e.preventDefault();
    return updateData(values, token).then(data => {
      if (data.error) {
        console.log(data.error);
        setError(data.error);
        showErrorMessage();
      } else {
        setValues({
          ...values,
          carousel_title1,
          carousel_subtitle1,
          carousel_title2,
          carousel_subtitle2,
          carousel_title3,
          carousel_subtitle3,
          carousel_title4,
          carousel_subtitle4,
          about_title,
          about_content,
          about_subcontent,
          product_title,
          product_content,
          product_greenhouse,
          product_variety,
          product_cultivation,
          product_material
        });
        showSuccessMessage();
      }
    });
  };

  const showSuccessMessage = () =>
    Swal.fire({
      position: "top",
      type: "success",
      title: "Update successfully ",
      showConfirmButton: false,
      timer: 1500,
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
      <form
        action=""
        style={{
          marginTop: "5%",
          width: "80%",
          marginLeft: "30px",
          height: "600px",
          overflowY: "scroll"
        }}
      >
        <div className="form-group">
          <label htmlFor="">Carousel title 1</label>
          <textarea
            rows={1}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={carousel_title1}
            onChange={handleChange("carousel_title1")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Carousel subtitle 1</label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={carousel_subtitle1}
            onChange={handleChange("carousel_subtitle1")}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Carousel title 2</label>
          <textarea
            rows={1}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={carousel_title2}
            onChange={handleChange("carousel_title2")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Carousel subtitle 2</label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={carousel_subtitle2}
            onChange={handleChange("carousel_subtitle2")}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Carousel title 3</label>
          <textarea
            rows={1}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={carousel_title3}
            onChange={handleChange("carousel_title3")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Carousel subtitle 3</label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={carousel_subtitle3}
            onChange={handleChange("carousel_subtitle3")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Carousel title 4</label>
          <textarea
            rows={1}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={carousel_title4}
            onChange={handleChange("carousel_title4")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Carousel subtitle 4</label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={carousel_subtitle4}
            onChange={handleChange("carousel_subtitle4")}
          />
        </div>
        <hr />
        <div className="form-group">
          <label style={{ marginTop: "30px" }}>About_title</label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={about_title}
            onChange={handleChange("about_title")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">About content</label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={about_content}
            onChange={handleChange("about_content")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">About subcontent</label>
          <textarea
            rows={4}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={about_subcontent}
            onChange={handleChange("about_subcontent")}
          />
        </div>
        <hr />
        <div className="form-group">
          <label style={{ marginTop: "30px" }}>Product title</label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={product_title}
            onChange={handleChange("product_title")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Product content</label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={product_content}
            onChange={handleChange("product_content")}
          />
        </div>
        <div className="form-group">
          <label style={{ marginTop: "30px" }}>Greenhouse product</label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={product_greenhouse}
            onChange={handleChange("product_greenhouse")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Variety product</label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={product_variety}
            onChange={handleChange("product_variety")}
          />
        </div>
        <div className="form-group">
          <label style={{ marginTop: "30px" }}>Cultivation product</label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={product_cultivation}
            onChange={handleChange("product_cultivation")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Material product</label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={product_material}
            onChange={handleChange("product_material")}
          />
        </div>
        <button className="btn btn-primary" onClick={submitData}>
          Update
        </button>
      </form>
    </React.Fragment>
  );
};

export default HomeRead;

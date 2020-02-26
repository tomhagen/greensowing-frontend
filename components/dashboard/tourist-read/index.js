import React from "react";
import { useState, useEffect } from "react";
import { getData, updateData } from "../../../controller/tourist";
import Swal from "sweetalert2";
import { getCookie } from "../../../controller/auth";

const TouristRead = () => {
  const [touristData, setTouristData] = useState([]);
  const token = getCookie("token");

  const [values, setValues] = useState({
    unique_title: "",
    unique_content: "",
    unique_subcontent: "",
    creative_title: "",
    creative_content: "",
    creative_subcontent: "",
    functions_title: "",
    functions_content: "",
    functions_subcontent: ""
  });

  const [error, setError] = useState(false);

  const {
    unique_title,
    unique_content,
    unique_subcontent,
    creative_title,
    creative_content,
    creative_subcontent,
    functions_title,
    functions_content,
    functions_subcontent
  } = values;

  const handleChange = name => e => {
    setValues({ ...values, [name]: e.target.value });
  };
  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    return getData().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        const {
          unique_title,
          unique_content,
          unique_subcontent,
          creative_title,
          creative_content,
          creative_subcontent,
          functions_title,
          functions_content,
          functions_subcontent
        } = data;
        setValues({
          ...values,
          unique_title,
          unique_content,
          unique_subcontent,
          creative_title,
          creative_content,
          creative_subcontent,
          functions_title,
          functions_content,
          functions_subcontent
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
          unique_title,
          unique_content,
          unique_subcontent,
          creative_title,
          creative_content,
          creative_subcontent,
          functions_title,
          functions_content,
          functions_subcontent
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
          <label htmlFor="">unique_title</label>
          <textarea
            rows={1}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={unique_title}
            onChange={handleChange("unique_title")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">unique_content</label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={unique_content}
            onChange={handleChange("unique_content")}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">unique_subcontent</label>
          <textarea
            rows={7}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={unique_subcontent}
            onChange={handleChange("unique_subcontent")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">creative_title</label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={creative_title}
            onChange={handleChange("creative_title")}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">creative_content</label>
          <textarea
            rows={1}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={creative_content}
            onChange={handleChange("creative_content")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">creative_subcontent</label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={creative_subcontent}
            onChange={handleChange("creative_subcontent")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">functions_title</label>
          <textarea
            rows={1}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={functions_title}
            onChange={handleChange("functions_title")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">functions_content</label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={functions_content}
            onChange={handleChange("functions_content")}
          />
        </div>
        <hr />
        <div className="form-group">
          <label style={{ marginTop: "30px" }}>functions_subcontent</label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={functions_subcontent}
            onChange={handleChange("functions_subcontent")}
          />
        </div>

        <button className="btn btn-primary" onClick={submitData}>
          Update
        </button>
      </form>
    </React.Fragment>
  );
};

export default TouristRead;

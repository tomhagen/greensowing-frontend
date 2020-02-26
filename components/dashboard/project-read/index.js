import React from "react";
import { useState, useEffect } from "react";
import { getData, updateData } from "../../../controller/project";
import Swal from "sweetalert2";
import { getCookie } from "../../../controller/auth";

const ProjectRead = () => {
  const [projectData, setProjectData] = useState([]);
  const token = getCookie("token");

  const [values, setValues] = useState({
    step1_title: "",
    step1_content: "",
    step1_subcontent: "",
    step2_title: "",
    step2_content: "",
    step2_subcontent: "",
    step3_title: "",
    step3_content: "",
    step3_subcontent: "",
    step4_title: "",
    step4_subcontent: "",
    step5_title: "",
    step5_subcontent: ""
  });

  const [error, setError] = useState(false);

  const {
    step1_title,
    step1_content,
    step1_subcontent,
    step2_title,
    step2_content,
    step2_subcontent,
    step3_title,
    step3_content,
    step3_subcontent,
    step4_title,
    step4_subcontent,
    step5_title,
    step5_subcontent
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
          step1_title,
          step1_content,
          step1_subcontent,
          step2_title,
          step2_content,
          step2_subcontent,
          step3_title,
          step3_content,
          step3_subcontent,
          step4_title,
          step4_subcontent,
          step5_title,
          step5_subcontent
        } = data;
        setValues({
          ...values,
          step1_title,
          step1_content,
          step1_subcontent,
          step2_title,
          step2_content,
          step2_subcontent,
          step3_title,
          step3_content,
          step3_subcontent,
          step4_title,
          step4_subcontent,
          step5_title,
          step5_subcontent
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
          step1_title,
          step1_content,
          step1_subcontent,
          step2_title,
          step2_content,
          step2_subcontent,
          step3_title,
          step3_content,
          step3_subcontent,
          step4_title,
          step4_subcontent,
          step5_title,
          step5_subcontent
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
          <label htmlFor="">step1_title</label>
          <textarea
            rows={1}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={step1_title}
            onChange={handleChange("step1_title")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">step1_content</label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={step1_content}
            onChange={handleChange("step1_content")}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">step1_subcontent</label>
          <textarea
            rows={7}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={step1_subcontent}
            onChange={handleChange("step1_subcontent")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">step2_title</label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={step2_content}
            onChange={handleChange("step2_content")}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">step2_subcontent</label>
          <textarea
            rows={4}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={step2_subcontent}
            onChange={handleChange("step2_subcontent")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">step3_title</label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={step3_title}
            onChange={handleChange("step3_title")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">step3_content</label>
          <textarea
            rows={1}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={step3_content}
            onChange={handleChange("step3_content")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">step3_subcontent</label>
          <textarea
            rows={4}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={step3_subcontent}
            onChange={handleChange("step3_subcontent")}
          />
        </div>
        <hr />
        <div className="form-group">
          <label style={{ marginTop: "30px" }}>step4_title</label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={step4_title}
            onChange={handleChange("step4_title")}
          />
        </div>

        <div className="form-group">
          <label style={{ marginTop: "30px" }}>step4_subcontent</label>
          <textarea
            rows={4}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={step4_subcontent}
            onChange={handleChange("step4_subcontent")}
          />
        </div>
        <div className="form-group">
          <label style={{ marginTop: "30px" }}>step5_title</label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={step5_title}
            onChange={handleChange("step5_title")}
          />
        </div>
        <div className="form-group">
          <label style={{ marginTop: "30px" }}>step5_subcontent</label>
          <textarea
            rows={7}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={step5_subcontent}
            onChange={handleChange("step5_subcontent")}
          />
        </div>
        <button className="btn btn-primary" onClick={submitData}>
          Update
        </button>
      </form>
    </React.Fragment>
  );
};

export default ProjectRead;

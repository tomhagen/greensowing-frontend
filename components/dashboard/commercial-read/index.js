import React from "react";
import { useState, useEffect } from "react";
import { getData, updateData } from "../../../controller/commercial";
import Swal from "sweetalert2";
import { getCookie } from "../../../controller/auth";

const CommercialRead = () => {
  const token = getCookie("token");

  const [values, setValues] = useState({
    covering_title: "",
    covering_content: "",
    covering_subcontent1: "",
    covering_subtitle: "",
    covering_subcontent2: "",
    structure_title: "",
    structure_content: "",
    structure_subcontent1: "",
    structure_subtitle1: "",
    structure_subtitle2: "",
    structure_subcontent2: "",
    structure_subcontent3: "",
    irrigation_title: "",
    irrigation_subcontent: "",
    irrigation_item_subcontent1: "",
    irrigation_item_subcontent2: "",
    irrigation_item_subcontent3: "",
    irrigation_item_subcontent4: "",
    irrigation_item_subcontent5: "",
    monitoring_title: "",
    monitoring_content: "",
    monitoring_subcontent1: "",
    monitoring_subtitle: "",
    monitoring_subcontent2: "",
    cultivation_title: "",
    cultivation_content: "",
    cultivation_subcontent1: "",
    cultivation_subtitle1: "",
    cultivation_subcontent2: "",
    cultivation_subtitle2: "",
    cultivation_subcontent3: ""
  });

  const [error, setError] = useState(false);

  const {
    covering_title,
    covering_content,
    covering_subcontent1,
    covering_subtitle,
    covering_subcontent2,
    structure_title,
    structure_content,
    structure_subcontent1,
    structure_subtitle1,
    structure_subtitle2,
    structure_subcontent2,
    structure_subcontent3,
    irrigation_title,
    irrigation_subcontent,
    irrigation_item_subcontent1,
    irrigation_item_subcontent2,
    irrigation_item_subcontent3,
    irrigation_item_subcontent4,
    irrigation_item_subcontent5,
    monitoring_title,
    monitoring_content,
    monitoring_subcontent1,
    monitoring_subtitle,
    monitoring_subcontent2,
    cultivation_title,
    cultivation_content,
    cultivation_subcontent1,
    cultivation_subtitle1,
    cultivation_subcontent2,
    cultivation_subtitle2,
    cultivation_subcontent3
  } = values;

  const handleChange = name => e => {
    setValues({ ...values, [name]: e.target.value });
  };
  useEffect(() => {
    loadCommercialData();
  }, []);

  const loadCommercialData = () => {
    return getData().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        const {
          covering_title,
          covering_content,
          covering_subcontent1,
          covering_subtitle,
          covering_subcontent2,
          structure_title,
          structure_content,
          structure_subcontent1,
          structure_subtitle1,
          structure_subtitle2,
          structure_subcontent2,
          structure_subcontent3,
          irrigation_title,
          irrigation_subcontent,
          irrigation_item_subcontent1,
          irrigation_item_subcontent2,
          irrigation_item_subcontent3,
          irrigation_item_subcontent4,
          irrigation_item_subcontent5,
          monitoring_title,
          monitoring_content,
          monitoring_subcontent1,
          monitoring_subtitle,
          monitoring_subcontent2,
          cultivation_title,
          cultivation_content,
          cultivation_subcontent1,
          cultivation_subtitle1,
          cultivation_subcontent2,
          cultivation_subtitle2,
          cultivation_subcontent3
        } = data;
        setValues({
          ...values,
          covering_title,
          covering_content,
          covering_subcontent1,
          covering_subtitle,
          covering_subcontent2,
          structure_title,
          structure_content,
          structure_subcontent1,
          structure_subtitle1,
          structure_subtitle2,
          structure_subcontent2,
          structure_subcontent3,
          irrigation_title,
          irrigation_subcontent,
          irrigation_item_subcontent1,
          irrigation_item_subcontent2,
          irrigation_item_subcontent3,
          irrigation_item_subcontent4,
          irrigation_item_subcontent5,
          monitoring_title,
          monitoring_content,
          monitoring_subcontent1,
          monitoring_subtitle,
          monitoring_subcontent2,
          cultivation_title,
          cultivation_content,
          cultivation_subcontent1,
          cultivation_subtitle1,
          cultivation_subcontent2,
          cultivation_subtitle2,
          cultivation_subcontent3
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
          covering_title,
          covering_content,
          covering_subcontent1,
          covering_subtitle,
          covering_subcontent2,
          structure_title,
          structure_content,
          structure_subcontent1,
          structure_subtitle1,
          structure_subtitle2,
          structure_subcontent2,
          structure_subcontent3,
          irrigation_title,
          irrigation_subcontent,
          irrigation_item_subcontent1,
          irrigation_item_subcontent2,
          irrigation_item_subcontent3,
          irrigation_item_subcontent4,
          irrigation_item_subcontent5,
          monitoring_title,
          monitoring_content,
          monitoring_subcontent1,
          monitoring_subtitle,
          monitoring_subcontent2,
          cultivation_title,
          cultivation_content,
          cultivation_subcontent1,
          cultivation_subtitle1,
          cultivation_subcontent2,
          cultivation_subtitle2,
          cultivation_subcontent3
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
        <div
          style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "20px" }}
        >
          Covering
        </div>
        <div className="form-group">
          <label htmlFor="">Covering title</label>
          <textarea
            rows={1}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={covering_title}
            onChange={handleChange("covering_title")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Covering content</label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={covering_content}
            onChange={handleChange("covering_content")}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Covering Subcontent 1</label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={covering_subcontent1}
            onChange={handleChange("covering_subcontent1")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Covering Subtitle</label>
          <textarea
            rows={1}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={covering_subtitle}
            onChange={handleChange("covering_subtitle")}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Covering subcontent 2</label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={covering_subcontent2}
            onChange={handleChange("covering_subcontent2")}
          />
        </div>

        <div
          style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "20px" }}
        >
          Structure
        </div>
        <div className="form-group">
          <label htmlFor="">Structure Title</label>
          <textarea
            rows={1}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={structure_title}
            onChange={handleChange("structure_title")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Structure Content</label>
          <textarea
            rows={1}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={structure_content}
            onChange={handleChange("structure_content")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Structure subcontent 1</label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={structure_subcontent1}
            onChange={handleChange("structure_subcontent1")}
          />
        </div>
        <hr />
        <div className="form-group">
          <label style={{ marginTop: "30px" }}>structure_subtitle1</label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={structure_subtitle1}
            onChange={handleChange("structure_subtitle1")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">structure_subtitle2</label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={structure_subtitle2}
            onChange={handleChange("structure_subtitle2")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">structure_subcontent2</label>
          <textarea
            rows={4}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={structure_subcontent2}
            onChange={handleChange("structure_subcontent2")}
          />
        </div>
        <hr />
        <div className="form-group">
          <label style={{ marginTop: "30px" }}>structure_subcontent3</label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={structure_subcontent3}
            onChange={handleChange("structure_subcontent3")}
          />
        </div>

        <div
          style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "20px" }}
        >
          Irrigation
        </div>
        <div className="form-group">
          <label htmlFor="">irrigation_title</label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={irrigation_title}
            onChange={handleChange("irrigation_title")}
          />
        </div>
        <div className="form-group">
          <label style={{ marginTop: "30px" }}>irrigation_subcontent</label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={irrigation_subcontent}
            onChange={handleChange("irrigation_subcontent")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">irrigation_item_subcontent1</label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={irrigation_item_subcontent1}
            onChange={handleChange("irrigation_item_subcontent1")}
          />
        </div>
        <div className="form-group">
          <label style={{ marginTop: "30px" }}>
            irrigation_item_subcontent2
          </label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={irrigation_item_subcontent2}
            onChange={handleChange("irrigation_item_subcontent2")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">irrigation_item_subcontent3</label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={irrigation_item_subcontent3}
            onChange={handleChange("irrigation_item_subcontent3")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">irrigation_item_subcontent4</label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={irrigation_item_subcontent4}
            onChange={handleChange("irrigation_item_subcontent4")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">irrigation_item_subcontent5</label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={irrigation_item_subcontent5}
            onChange={handleChange("irrigation_item_subcontent5")}
          />
        </div>

        <div
          style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "20px" }}
        >
          Monitoring
        </div>
        <div className="form-group">
          <label htmlFor="">monitoring_title</label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={monitoring_title}
            onChange={handleChange("monitoring_title")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">monitoring_content</label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={monitoring_content}
            onChange={handleChange("monitoring_content")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">monitoring_subcontent1</label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={monitoring_subcontent1}
            onChange={handleChange("monitoring_subcontent1")}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">monitoring_subtitle</label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={monitoring_subtitle}
            onChange={handleChange("monitoring_subtitle")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">monitoring_subcontent2</label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={monitoring_subcontent2}
            onChange={handleChange("monitoring_subcontent2")}
          />
        </div>

        <div
          style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "20px" }}
        >
          Cultivation
        </div>
        <div className="form-group">
          <label htmlFor="">cultivation_title</label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={cultivation_title}
            onChange={handleChange("cultivation_title")}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">cultivation_content</label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={cultivation_content}
            onChange={handleChange("cultivation_content")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">cultivation_subcontent1</label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={cultivation_subcontent1}
            onChange={handleChange("cultivation_subcontent1")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">cultivation_subtitle1</label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={cultivation_subtitle1}
            onChange={handleChange("cultivation_subtitle1")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">cultivation_subcontent2</label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={cultivation_subcontent2}
            onChange={handleChange("cultivation_subcontent2")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">cultivation_subtitle2</label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={cultivation_subtitle2}
            onChange={handleChange("cultivation_subtitle2")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">cultivation_subcontent3</label>
          <textarea
            rows={2}
            type="text"
            className="form-control"
            placeholder="Your message"
            defaultValue={cultivation_subcontent3}
            onChange={handleChange("cultivation_subcontent3")}
          />
        </div>

        <button className="btn btn-primary" onClick={submitData}>
          Update
        </button>
      </form>
    </React.Fragment>
  );
};

export default CommercialRead;

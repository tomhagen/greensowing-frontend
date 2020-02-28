import "./index.scss";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { emailContactForm } from "../../../controller/form";
import Swal from "sweetalert2";

const RegisterButton = () => {
  const wrapperRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };
  const handleClickOutside = e => {
    const { target } = e;
    if (!wrapperRef.current.contains(target) && open) {
      setOpen(false);
    }
  };
  useEffect(() => {
    if (open) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    success: false,
    error: false,
    buttonText: "Submit"
  });

  const { name, email, phone, message, success, error, buttonText } = values;

  const handleChange = name => e => {
    setValues({
      ...values,
      [name]: e.target.value,
      error: false,
      success: false,
      buttonText: "Submit"
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setValues({ ...values, buttonText: "Sending..." });
    emailContactForm({ name, phone, email, message }).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: "",
          phone: "",
          email: "",
          message: "",
          buttonText: "Submit"
        });
        setOpen(false);
        showMessageWhenSuccess();
      }
    });
  };

  const showMessageWhenSuccess = () =>
    Swal.fire({
      position: "top",
      type: "success",
      title: "Sent message successfully ! ",
      showConfirmButton: false,
      timer: 2500,
      toast: true,
      background: "#8AD400",
      padding: "1.5rem",
      customClass: {
        title: "title-class"
      }
    });

  const showErrorMessage = () => (
    <div className="form-error" style={{ display: error ? "" : "none" }}>
      {error}
    </div>
  );
  return (
    <React.Fragment>
      <div
        className={`form-container ${open ? "open" : ""}`}
        ref={wrapperRef}
        style={{ opacity: "0", visibility: "hidden" }}
      >
        <div className="form-header">
          <h2>Filling in your information</h2>
        </div>
        <div className="form-body">
          {showErrorMessage()}
          <form action="">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your name"
                onChange={handleChange("name")}
                value={name}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Your mobile number"
                onChange={handleChange("phone")}
                value={phone}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Your email"
                onChange={handleChange("email")}
                value={email}
              />
            </div>
            <div className="form-group">
              <textarea
                rows={5}
                type="text"
                className="form-control"
                placeholder="Your message"
                onChange={handleChange("message")}
                value={message}
              />
            </div>
            <div className="form-btn" onClick={handleSubmit}>
              <div className="form-btn_container">
                <a>{buttonText}</a>
              </div>
            </div>
          </form>
        </div>
        <div className="close-form-btn" onClick={handleClickClose}>
          <i className="fa fa-times"></i>
        </div>
      </div>

      <div
        className={`bg_overlay ${open ? "open" : ""}`}
        style={{ opacity: "0", visibility: "hidden" }}
      ></div>
      <div className="register" onClick={handleClickOpen}>
        <div className="register_container">
          <div className="register_box">register to visit farm</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RegisterButton;

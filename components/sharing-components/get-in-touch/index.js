import "./index.scss";
import React from "react";
import Link from "next/link";
import ReactWOW from "react-wow";
import { useState, useEffect, useRef } from "react";
import { orderContactForm } from "../../../controller/form";
import Swal from "sweetalert2";

const GetInTouch = ({ props }) => {
  let styles = {
    backgroundImage: `url(${props.img})`
  };

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    detail: "",
    message: "",
    error: false,
    success: false,
    buttonText: "Submit"
  });
  const [isOpen, setIsOpen] = useState(false);
  const orderRef = useRef(null);

  const { name, email, phone, detail, error, message, buttonText } = values;

  const handleOpenOrderForm = () => {
    setIsOpen(true);
  };
  const handleCloseOrderForm = () => {
    setIsOpen(false);
  };

  const handleClickOutSide = e => {
    const { target } = e;
    if (!orderRef.current.contains(target)) {
      setIsOpen(false);
    }
  };

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
    orderContactForm({ name, phone, email, detail, message }).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: "",
          phone: "",
          email: "",
          detail: "",
          message: "",
          buttonText: "Submit"
        });
        setIsOpen(false);
        showMessageWhenSuccess();
      }
    });
  };
  const showErrorMessage = () => (
    <div className="form-error" style={{ display: error ? "" : "none" }}>
      {error}
    </div>
  );
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
  useEffect(() => {
    if (open) {
      document.addEventListener("click", handleClickOutSide);
    }
    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  });
  return (
    <React.Fragment>
      <div className="touch" style={styles}>
        <div className="touch_container">
          <ReactWOW animation="fadeInUp" duration="1.5s">
            <div className="touch_title">{props.title}</div>
          </ReactWOW>
          <ReactWOW animation="fadeInUp" duration="1.5s" delay="0.5s">
            <div className="touch_content">{props.content}</div>
          </ReactWOW>
          <ReactWOW animation="fadeIn" duration="1.5s" delay="0.5s">
            <div className="touch_btn" onClick={handleOpenOrderForm}>
              <div className="touch_btn_box">
                <Link href="#">
                  <a>{props.btn}</a>
                </Link>
              </div>
            </div>
          </ReactWOW>
        </div>
      </div>

      <div
        className={`order_form-container ${isOpen ? "open-form" : ""}`}
        style={{ opacity: "0", visibility: "hidden" }}
        ref={orderRef}
      >
        <div className="order_form-header">
          <h2>Filling in your information</h2>
        </div>
        <div className="order_form-body">
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
              <select
                name=""
                id="order-select"
                className="form-control"
                onChange={handleChange("detail")}
                value={detail}
              >
                <option defaultValue>Choose products:</option>
                <option value="commercial greenhouse">
                  Commercial Greenhouse
                </option>
                <option value="tourist greenhouse">Tourist Greenhouse</option>
                <option value="variety">Variety</option>
                <option value="greenhouse glass">Greenhouse Glass</option>
                <option value="greenhouse substrate">
                  Greenhouse Substrate
                </option>
                <option value="greenhouse accessories">
                  Greenhouse Accessories
                </option>
              </select>
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
            <div className="order_form-btn" onClick={handleSubmit}>
              <div className="order_form-btn_container">
                <a>{buttonText}</a>
              </div>
            </div>
          </form>
        </div>
        <div className="close-order_form-btn" onClick={handleCloseOrderForm}>
          <i className="fa fa-times"></i>
        </div>
      </div>

      <div
        className={`bg_overlay ${isOpen ? "open-form" : ""}`}
        style={{ opacity: "0", visibility: "hidden" }}
      ></div>
    </React.Fragment>
  );
};

export default GetInTouch;

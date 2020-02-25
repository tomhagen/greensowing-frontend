import React from "react";
import { useState, useEffect } from "react";
import moment from "moment";
import renderToHTML from "react-render-html";
import { getCookie } from "../../../controller/auth";
import { emailContactList, removeContact } from "../../../controller/form";
import Swal from "sweetalert2";

const FormRead = () => {
  const [values, setValues] = useState({
    error: false,
    success: false,
    contactList: [],
    reload: false
  });

  const { error, success, contactList, reload } = values;

  const token = getCookie("token");

  useEffect(() => {
    loadContactListFromEndPoint();
  }, [reload]);

  const loadContactListFromEndPoint = () => {
    emailContactList(token).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setValues({ ...values, contactList: data });
      }
    });
  };

  const deleteContactFromList = id => {
    removeContact(id, token).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setValues({ ...values, error: false, success: false, reload: !reload });
      }
    });
  };

  const showMessageDelete = id => {
    Swal.fire({
      title: "Are you sure to delete?",
      text: "You won't be able to revert this",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.value) {
        Swal.fire("Deleted Successfully!", "", "success");
        deleteContactFromList(id);
      }
    });
  };

  const showContactList = () => {
    return contactList.map((contact, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>
            {contact.detail === "visit" ? "visit farm" : `${contact.detail}`}
          </td>
          <td>{contact.email}</td>
          <td>{renderToHTML(contact.content)}</td>
          <td>{moment(contact.createdAt).format("LLL")}</td>
          <td>
            <a>
              <button
                className="btn btn-sm btn-danger ml-1"
                onClick={() => showMessageDelete(contact._id)}
              >
                Delete
              </button>
            </a>
          </td>
        </tr>
      );
    });
  };
  return (
    <React.Fragment>
      <div
        className="table-responsive"
        style={{ padding: "30px 30px", height: "600px", overflowY: "scroll" }}
      >
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Type</th>
              <th scope="col">Contact email</th>
              <th scope="col">Content</th>
              <th scope="col">Created Date</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>{showContactList()}</tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default FormRead;

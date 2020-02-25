import React from "react";
import { useState, useEffect } from "react";
import {
  listCategories,
  createCategories,
  removeCategories
} from "../../../controller/category";
import moment from "moment";
import { getCookie } from "../../../controller/auth";
import Swal from "sweetalert2";
import Link from "next/link";

const CategoryRead = () => {
  const [values, setValues] = useState({
    name: "",
    error: false,
    success: false,
    categories: [],
    reload: false
  });

  const { name, error, success, categories, reload } = values;
  const token = getCookie("token");

  useEffect(() => {
    loadCategoriesFromEndPoint();
  }, [reload]);

  const loadCategoriesFromEndPoint = () => {
    listCategories().then(data => {
      if (data.error) {
        console.log(error);
      } else {
        setValues({ ...values, categories: data });
      }
    });
  };

  const showMessageDelete = slug => {
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
        deleteCategories(slug);
      }
    });
  };

  const deleteCategories = slug => {
    removeCategories(slug, token).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setValues({
          ...values,
          error: false,
          success: false,
          name: "",
          reload: !reload
        });
      }
    });
  };

  const createNewCategoryForm = () => (
    <form className="pt-4 pl-4" onSubmit={handleSubmit}>
      <div className="form-group" style={{ width: "30%" }}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter new category here..."
          onChange={handleChange}
          value={name}
          required
        />
      </div>

      <div className="form-group" style={{ width: "30%" }}>
        <button
          type="submit"
          className="btn btn-success"
          style={{ width: "100%" }}
        >
          Create
        </button>
      </div>
    </form>
  );

  const handleChange = e => {
    setValues({
      ...values,
      name: e.target.value,
      error: false,
      success: false
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    createCategories({ name }, token).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          error: false,
          success: false,
          reload: !reload,
          name: ""
        });
      }
    });
  };

  const showCategories = () => {
    return categories.map((category, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td style={{ width: "20%" }}>{category.name.toUpperCase()}</td>
          <td>{category.slug}</td>
          <td>{moment(category.createdAt).format("LLL")}</td>
          <td>{moment(category.updatedAt).format("LLL")}</td>
          <td>
            <Link href={`/dashboard/categories/${category.slug}`}>
              <a>
                <button className="btn btn-sm btn-warning">Edit</button>
              </a>
            </Link>
            <a>
              <button
                className="btn btn-sm btn-danger ml-1"
                onClick={() => showMessageDelete(category.slug)}
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
      {createNewCategoryForm()}
      <div className="table-responsive" style={{ padding: "30px 30px" }}>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Name</th>
              <th scope="col">Slug</th>
              <th scope="col">Created Date</th>
              <th scope="col">Updated Date</th>
              <th scope="col">Update</th>
            </tr>
          </thead>
          <tbody>{showCategories()}</tbody>
        </table>
      </div>
    </React.Fragment>
  );
};
export default CategoryRead;

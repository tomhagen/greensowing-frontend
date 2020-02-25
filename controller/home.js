import fetch from "isomorphic-fetch";
import { API } from "../config";
import { handleResponse } from "./auth";

export const create = data => {
  return fetch(`${API}/home`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
      //   Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  })
    .then(res => {
      handleResponse(res);
      return res.json();
    })
    .catch(err => console.log(err));
};

export const getData = () => {
  return fetch(`${API}/home`, {
    method: "GET"
  })
    .then(res => {
      return res.json();
    })
    .catch(err => console.log(err));
};

export const updateData = (data, token) => {
  return fetch(`${API}/home`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  })
    .then(res => {
      return res.json();
    })
    .catch(err => console.log(err));
};

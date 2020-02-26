import fetch from "isomorphic-fetch";
import { API } from "../config";
import { handleResponse } from "./auth";

export const create = data => {
  return fetch(`${API}/commercial`, {
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
  return fetch(`${API}/commercial`, {
    method: "GET"
  })
    .then(res => {
      return res.json();
    })
    .catch(err => console.log(err));
};

export const updateData = (data, token) => {
  return fetch(`${API}/commercial`, {
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

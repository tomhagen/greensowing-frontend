import fetch from "isomorphic-fetch";
import { API } from "../config";
import { handleResponse } from "./auth";

export const createPost = (post, token) => {
  return fetch(`${API}/post`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: post
  })
    .then(res => {
      handleResponse(res);
      return res.json();
    })
    .catch(err => console.log(err));
};

export const listPosts = (skip, limit) => {
  const data = { skip, limit };
  return fetch(`${API}/posts`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(res => {
      return res.json();
    })
    .catch(err => console.log(err));
};

export const listPostWithCategory = (slug, skip, limit) => {
  const data = { slug, skip, limit };
  return fetch(`${API}/posts-categories`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(res => {
      return res.json();
    })
    .catch(err => console.log(err));
};

export const singlePost = slug => {
  return fetch(`${API}/post/${slug}`, {
    method: "GET"
  })
    .then(res => {
      return res.json();
    })
    .catch(err => console.log(err));
};

export const removePosts = (slug, token) => {
  return fetch(`${API}/post/${slug}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  });
};

export const updatePost = (post, token, slug) => {
  return fetch(`${API}/post/${slug}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: post
  })
    .then(res => {
      handleResponse(res);
      return res.json();
    })
    .catch(err => console.log(err));
};

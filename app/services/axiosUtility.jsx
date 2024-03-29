"use client";

import axios from "axios";

export const ENDPOINT = process.env.PROD_URL;

export const PrivateAxiosUtility = axios.create({
  baseURL: `${ENDPOINT}`,
  timeout: 600000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const AxiosUtility = axios.create({
  baseURL: `${ENDPOINT}`,
  timeout: 600000,
  headers: {
    "Content-Type": "application/json",
  },
});

PrivateAxiosUtility.interceptors.request.use(async (req) => {
  if (typeof window !== "undefined") {
    const state = localStorage?.getItem("access_token");
    let token;
    // check if access-token exists
    if (state) {
      token = state;
      req.headers.Authorization = `Bearer ${token}`;
    }
    req.headers.Authorization = `Bearer ${token}`;
    return req;
  }
});

export default AxiosUtility;

import axios from "axios";

import { interceptor } from "./intercepter";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 60000,
  // withCredentials: true
});

//call axios interceptor
interceptor(instance);

// axios.defaults.headers.common = { Authorization: `bearer ${token}` };
const request = async ({ method, url, data, headers, skipAuth }) => {
  if (method === "delete") {
    data = { data };
  }
  const promise = instance[method](url, data, headers);
  try {
    const response = await promise;
    const payload = response.data;
    if (headers) {
      return {
        data: payload,
        headers: response.headers,
      };
    }

    return payload;
  } catch (err) {
    let msg = err.response.data.message;
    if (err.response.data.details) {
      msg = err.response.data.details.message;
    }
    throw new Error(msg);
  }
};

export const get = (url, params) => request({ method: "get", url, ...params });
export const post = (url, data, params) =>
  request({ method: "post", url, data, ...params });
export const put = (url, data, params) =>
  request({ method: "put", url, data, ...params });
export const del = (url, data) => request({ method: "delete", url, data });
export const patch = (url, data, params) =>
  request({ method: "patch", url, data, ...params });

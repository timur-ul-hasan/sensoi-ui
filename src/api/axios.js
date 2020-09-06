import axios from "axios";

import { baseURL } from "../config";

const refreshURL = `${baseURL}/accounts/token/refresh/`;

const instance = (token = "", headers = null) =>
  axios.create({
    validateStatus(status) {
      return status < 500; // Reject only if the status code is greater than or equal to 500
    },
    headers: headers || {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token ? `Bearer ${token}` : undefined,
    },
  });

const methods = {
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
  PATCH: "patch",
};

export { methods };

const interceptedInstance = (token = "", dispatch = action => action, headers = null) => {
  const axi = instance(token, headers);
  // Add a request interceptor
  axi.interceptors.request.use(
    config =>
      // Do something before request is sent
      config,
    error =>
      // Do something with request error
      Promise.reject(error)
  );

  axi.interceptors.response.use(
    async response => {
      if (response.status === 401 || response.status === 403) {
        const originalRequest = response.config.url;
        const originalRequestData = response.config.data;
        const originalRequestHeaders = response.config.headers;
        const originalMethod = response.config.method;
        console.log(response.config);
        let respon = {};
        const res = await axi({
          url: refreshURL,
          method: "POST",
          data: {
            refresh:
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTU5OTQxNzkwMywianRpIjoiYWFkOWM2YzllMjY2NDQzOWFhMWUxZDE4MDU0OTgyYjQiLCJ1c2VyX2lkIjoyOSwic3VwZXJ1c2VyIjpmYWxzZSwiZ3JvdXBzIjp7fX0.TRC2esUDkABHd-2fJs-RO7i9f5QOqm3aPbQrti5psRQ",
          },
        });
        const accessTokenRenewed = res.data.access;
        const newInstance = instance(accessTokenRenewed);
        console.log(originalRequestData, originalRequest);
        const newResponse = await newInstance({
          url: originalRequest,
          data: originalRequestData,
          method: originalMethod,
        });
        respon = newResponse;
        return respon;
      }

      if (response.status === 401) {
        dispatch({
          type: "AUTH_LOGOUT",
        });
      }
      return response;
    },
    error => Promise.reject(error)
  );
  return axi;
};

export default interceptedInstance;

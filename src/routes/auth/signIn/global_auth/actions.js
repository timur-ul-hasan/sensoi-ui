import axios from "axios";
import { GET_ALERTS, LOGIN_USER, CLEAR_ERRORS, CLEAR_ALERTS } from "../../type";
import ErrorHandler from "../../../../util/errorHandler";
// import jwt_decode from "jwt-decode";
import setAuthToken from "../../../../util/setAuthToken";
// import ACTIONS from "./type/auth";
import { baseURL } from "../../../../config";

// export async function login(payload) {
//   const response = await loginApi(payload);
//   localStorage.setItem("clientSecret", "Bearer " + response.data.access);
//   console.log(response);
//   return {
//     type: ACTIONS.SIGN_IN_REQUEST,
//     payload: response.data.access,

//   };

// import config from "../../config";

//
export const loginUser = data => dispatch => {
  dispatch({
    type: CLEAR_ALERTS,
  });
  dispatch({
    type: CLEAR_ERRORS,
  });

  const AUTH_URL = `${baseURL}/accounts/`;
  const url = `${AUTH_URL}token/`;
  // axios.defaults.headers.common["Authorization"] = "Bearer " + data.data.access;
  axios
    .post(url, data)
    .then(res => {
      console.log(res.data.access);
      // const { data } = res.data;
      const  token = res.data.access;
      localStorage.setItem("clientSecret", token);
      setAuthToken(token);
      dispatch(setCurrentUser(token));
    })
    .catch(err => {
      const e = ErrorHandler(err);
      if (e && e.length > 0) {
        e.forEach(item => {
          dispatch(item);
        });
      }
    });
  delete axios.defaults.headers.common["Authorization"];
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: LOGIN_USER,
    payload: decoded,
  };
};

export const welcomeMsg = name => dispatch => {
  dispatch({
    type: GET_ALERTS,
    payload: {
      type: "success",
      msg: "Welcome! " + name,
    },
  });
};

// Log user out
export const logoutUser = history => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem("clientMenu");
  localStorage.removeItem("clientSecret");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
  window.location.href = "/login";
};

export const refreshToken = currToken => dispatch => {
  // API call for refresh token
};

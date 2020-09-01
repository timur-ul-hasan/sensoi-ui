/* ============
 * Actions for the auth module
 * ============
 *
 * The actions that are available on the
 * auth module.
 */

import ACTIONS from "./type/auth";
import { login as loginApi, signUp as signupApi } from "../api";
 import setAuthToken from "../../../util/setAuthToken";
export async function login(payload) {
  const response = await loginApi(payload);
  localStorage.setItem("clientSecret", "Bearer " + response.data.access);
  console.log(response);
  return {
    type: ACTIONS.SIGN_IN_REQUEST,
    payload: response.data.access,
  };
}
export const setCurrentUser = decoded => {
  return {
    type: ACTIONS.LOG_IN_USER,
    payload: decoded,
  };
};
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
export async function signUp(payload) {
  const response = await signupApi(payload);
  localStorage.setItem("client", response.data);
  console.log(response);
  return {
    type: ACTIONS.SIGN_UP_REQUEST,
    payload: response.data,
  };
}

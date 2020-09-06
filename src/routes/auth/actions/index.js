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
export const logoutUser = () => ({
  type: ACTIONS.LOG_OUT_REQUEST,
});

export async function signUp(payload) {
  const response = await signupApi(payload);
  return {
    type: ACTIONS.SIGN_UP_SUCCESS,
    payload: response.data,
  };
}

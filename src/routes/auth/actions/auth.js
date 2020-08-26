/* ============
 * Actions for the auth module
 * ============
 *
 * The actions that are available on the
 * auth module.
 */

import AuthActionTypes from "./type/auth";

export function authCheck() {
  return {
    type: AuthActionTypes.AUTH_CHECK,
  };
}

export function authLogin(payload) {
  return {
    type: AuthActionTypes.AUTH_LOGIN,
    payload,
  };
}

export function userSignOut({ history }) {
  return {
    type: AuthActionTypes.REQUEST_SIGNOUT,
    payload: {
      history,
    },
  };
}

export function authRefreshToken(payload) {
  return {
    type: AuthActionTypes.AUTH_REFRESH_TOKEN,
    payload,
  };
}

export function authResetPassword() {
  return {
    type: AuthActionTypes.AUTH_RESET_PASSWORD,
  };
}

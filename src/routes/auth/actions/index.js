/* ============
 * Actions for the auth module
 * ============
 *
 * The actions that are available on the
 * auth module.
 */

import ACTIONS from "./type/auth";

export function login(payload) {
  return {
    type: ACTIONS.SIGN_IN_REQUEST,
    payload,
  };
}

export function signUp(payload) {
  return {
    type: ACTIONS.SIGN_UP_REQUEST,
    payload,
  };
}

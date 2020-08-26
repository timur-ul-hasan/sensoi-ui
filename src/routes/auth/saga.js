import { put, call, takeLeading, select, take, delay } from "redux-saga/effects";
import ACTIONS from "./actions/type/auth";

import { login, signUp } from "./api";

function* signUpHandler(action) {
  const { name, email, password, passwordConfirmation } = action.payload;
  try {
    const res = yield call(signUp, {
      name,
      email,
      password,
      passwordConfirmation,
    });
    if (res.status === 200) {
      yield put({
        type: ACTIONS.SIGN_UP_SUCCESS,
        payload: res.data,
      });
    } else {
    }
  } catch (error) {
  } finally {
  }
}

function* loginHandler(action) {
  const { email, password } = action.payload;
  try {
    const res = yield call(login, {
      email,
      password,
    });

    if (res.status === 200) {
      yield put({
        type: ACTIONS.SIGN_IN_SUCCESS,
        payload: res.data,
      });
    } else {
    }
  } catch (error) {
    console.error(error);
  } finally {
    // setSubmitting(false);
  }
}

function* loginListener() {
  yield takeLeading(ACTIONS.SIGN_IN_REQUEST, loginHandler);
}

function* signUpListener() {
  yield takeLeading(ACTIONS.SIGN_IN_REQUEST, signUpHandler);
}

export default [loginListener, signUpListener];

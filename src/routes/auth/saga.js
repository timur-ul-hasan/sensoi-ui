import { put, call, takeLeading, select, take, delay, cancelled } from "redux-saga/effects";
import ACTIONS from "./actions/type/auth";
import {browserHistory} from "react";
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
let token
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
      localStorage.setItem('token', JSON.stringify(token))
      browserHistory.push('/home')
      console.log("hello")
    } else {
    }
  } catch (error) {
    yield put({ type: ACTIONS.LOGIN_ERROR, error })
    console.error(error);
  } finally {
    if (yield cancelled()) {
      browserHistory.push('/login')
    }
    // setSubmitting(false);
  }
  return token
}

function* loginListener() {
  yield takeLeading(ACTIONS.SIGN_IN_REQUEST, loginHandler);
}

function* signUpListener() {
  yield takeLeading(ACTIONS.SIGN_UP_REQUEST, signUpHandler);
}

export default [loginListener, signUpListener];

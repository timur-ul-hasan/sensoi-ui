import { put, call, takeLeading, select, take, delay } from "redux-saga/effects";
import Swal from "sweetalert2";
import { getIsAuthenticated, getAccessToken } from "./selectors";

import AuthActionTypes from "./actions/type/auth";
import LoadingActionTypes from "./actions/type/loading";

import { signIn, customerSignUp } from "./api";

const profileTypes = {
  SERVICEPROVIDER: "service-providers",
  SUPPLIER: "supplier",
  CUSTOMER: "customer",
};

function* signupCustomerHandler(action: any) {
  const {
    name,
    email,
    password,
    passwordConfirmation,
    phone,
    setSubmitting,
    history,
    setComplete,
  } = action.payload;
  try {
    const res = yield call(customerSignUp, {
      name,
      email,
      password,
      passwordConfirmation,
      phone,
    });
    if (res.status === 200) {
      setComplete(true);
      yield put({
        type: AuthActionTypes.AUTH_LOGIN,
        payload: res.data,
      });
      yield put({
        type: AuthActionTypes.AUTH_USER_TYPE,
        payload: "CUSTOMER",
      });
    } else if (res.status === 422) {
      const errors: any = Object.values(res.data.errors);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        html: [].concat(...errors).join(" <br/> "),
      });
    }
  } catch (error) {
    console.error(error);
  } finally {
    setSubmitting(false);
  }
}

function* signinHandler(action: any) {
  const { type, username, password, history, setSubmitting } = action.payload;
  try {
    const res = yield call(signIn, {
      type,
      username,
      password,
    });

    if (res.status === 200) {
      history.push("/");
    } else if (res.status === 422 || res.status === 401) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        html: "Invalid Credentials.",
      });
    } else if (res.status === 403) {
    }
  } catch (error) {
    console.error(error);
  } finally {
    setSubmitting(false);
  }
}

function* signUpCustomerListener() {
  yield takeLeading(AuthActionTypes.REQUEST_SIGNUP, signupCustomerHandler);
}

function* signInEmailListener() {
  yield takeLeading(AuthActionTypes.REQUEST_SIGNIN, signinHandler);
}

function* refreshListener() {
  while (true) {
    yield take("*");
    const isAuthenticated = yield select(getIsAuthenticated);
    if (isAuthenticated) {
      const accessToken = yield select(getAccessToken);
      if (accessToken.expiryTime - 500000 < Date.now()) {
        yield put({
          type: AuthActionTypes.AUTH_REFRESH_TOKEN,
        });
      }
    }
  }
}
function* delayListener() {
  while (true) {
    yield delay(30 * 60000);
    const isAuthenticated = yield select(getIsAuthenticated);
    if (isAuthenticated) {
      const accessToken = yield select(getAccessToken);
      if (accessToken.expiryTime - 500000 < Date.now()) {
        yield put({
          type: AuthActionTypes.AUTH_REFRESH_TOKEN,
        });
      }
    }
  }
}

export default [signUpCustomerListener, signInEmailListener];

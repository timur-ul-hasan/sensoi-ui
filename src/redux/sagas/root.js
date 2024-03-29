import { all, spawn, call } from "redux-saga/effects";

import AuthSagas from "../../routes/auth/saga";

export default function* rootSaga() {
  yield all(
    [...AuthSagas].map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {}
        }
      })
    )
  );
}

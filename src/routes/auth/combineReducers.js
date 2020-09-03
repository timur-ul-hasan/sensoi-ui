import { combineReducers } from "redux";
// import authReducer from "../auth/reducer";
import alertReducer from "./alert-error/alertReducer";
import errorReducer from "./alert-error/errorReducer";
// import usersReducer from "./user_module/reducer";
import authReducer from "../auth/signIn/global_auth/reducer";
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  alerts: alertReducer,
  // users: authReducer,
});

import { combineReducers } from "redux";
import authReducer from "../auth/reducer";
import alertReducer from "./alert-error/alertReducer";
import errorReducer from "./alert-error/errorReducer";
// import usersReducer from "./user_module/reducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  alerts: alertReducer,
  // users: usersReducer,
});

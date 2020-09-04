import { combineReducers } from "redux";

import authReducer from "./global_auth/reducer";
import alertReducer from "./alert-error/alertReducer";
import errorReducer from "./alert-error/errorReducer";
import usersReducer from "./user_module/reducer";
import lovReducer from "./lov/reducer";
import roleReducer from "./role_manage_module/reducer";
import dashboardReducer from "./dashboard/reducer";
import alertReducer from "./alert-error/alertReducer";
import errorReducer from "./alert-error/errorReducer";
export default combineReducers({
//   auth: authReducer,
  errors: errorReducer,
  alerts: alertReducer,
 dashboard: dashboardReducer,
});

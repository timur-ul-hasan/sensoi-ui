import { combineReducers } from "redux";
import auth from "../../routes/auth/reducer";
import loading from "./loading";
import settings from "./settings";

export default combineReducers({
  loading,
  auth,
});

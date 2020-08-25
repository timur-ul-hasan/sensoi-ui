import { useSelector } from "react-redux";
import {
  getCurrentUser,
  getAccessToken,
  getVerificationStatus,
  getIsAuthenticated,
  getUserType,
  getTempUserType,
} from "./selectors";

const useIsAuthenticated = () => useSelector(getIsAuthenticated);
const useCurrentUser = () => useSelector(getCurrentUser);
const useAccessToken = () => useSelector(getAccessToken);
const useVerificationStatus = () => useSelector(getVerificationStatus);
const useUserType = () => useSelector(getUserType);
const useUserTypeTemp = () => useSelector(getTempUserType);

export {
  useCurrentUser,
  useIsAuthenticated,
  useAccessToken,
  useVerificationStatus,
  useUserType,
  useUserTypeTemp,
};

import AuthActionTypes from "./actions/type/auth";

const initialState = {
  isAuthenticated: false,
  authenticatedUser: null,
  emailVerified: false,
  phoneVerified: false,
  userType: "",
  accessToken: null,
  tempUserType: "",
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case AuthActionTypes.AUTH_LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        accessToken: {
          ...action.payload,
          expiryTime: action.payload.expires_in * 1000 + Date.now(),
        },
      };
    case AuthActionTypes.AUTH_LOGOUT:
      return initialState;
    case AuthActionTypes.AUTH_RESET_PASSWORD:
      return {
        ...state,
        resetPassword: true,
      };
    case AuthActionTypes.AUTH_USER:
      return {
        ...state,
        isAuthenticated: true,
        authenticatedUser: action.payload,
      };
    case AuthActionTypes.VERIFY_EMAIL:
      return {
        ...state,
        emailVerified: true,
      };
    case AuthActionTypes.VERIFY_PHONE:
      return {
        ...state,
        phoneVerified: true,
      };
    case AuthActionTypes.AUTH_USER_TYPE:
      return {
        ...state,
        userType: action.payload,
      };
    case AuthActionTypes.AUTH_TEMP_USER_TYPE:
      return {
        ...state,
        tempUserType: action.payload,
      };
    default:
      return state;
  }
};

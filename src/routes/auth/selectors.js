export const getCurrentUser = state => state.auth.authenticatedUser;

export const getAccessToken = state => (state.auth ? state.auth.accessToken : "");

export const getIsAuthenticated = state => {
  return state.auth.isAuthenticated;
};

export const getVerificationStatus = state => ({
  emailVerified: state.auth.emailVerified,
  phoneVerified: state.auth.phoneVerified,
});

export const getUserType = state => state.auth.userType;
export const getTempUserType = state => state.auth.tempUserType;

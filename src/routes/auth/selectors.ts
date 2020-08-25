export const getCurrentUser = (state: any) => state.auth.authenticatedUser;

export const getAccessToken = (state: any) => (state.auth ? state.auth.accessToken : "");

export const getIsAuthenticated = (state: any) => state.auth.isAuthenticated;

export const getVerificationStatus = (state: any) => ({
  emailVerified: state.auth.emailVerified,
  phoneVerified: state.auth.phoneVerified,
});

export const getUserType = (state: any) => state.auth.userType;
export const getTempUserType = (state: any) => state.auth.tempUserType;

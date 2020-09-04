import ACTIONS from "./actions/type/auth";

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SIGN_IN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload,
      };
    case ACTIONS.SIGN_UP_SUCCESS:
      return {
        ...state,
        modules: [action.payload, ...state.modules],
        loading: false,
      };

    // case ACTIONS.SIGN_UP_SUCCESS:

    // return {
    //   ...state,
    //   isAuthenticated: true,
    //   token: action.payload,
    // };
    case ACTIONS.LOG_OUT_REQUEST:
      return initialState;
    default:
      return state;
  }
};

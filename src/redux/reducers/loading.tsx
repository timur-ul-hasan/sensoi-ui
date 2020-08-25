import LoadingActionTypes from "../../routes/auth/actions/type/loading";

const initialState = {
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LoadingActionTypes.GLOBAL_START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case LoadingActionTypes.GLOBAL_STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

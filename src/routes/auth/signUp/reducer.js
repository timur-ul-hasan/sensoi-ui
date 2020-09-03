import ACTIONS from "../actions/type/auth";

const initialState = {
 modules:{}
};

export default (state = initialState, action) => {
  switch (action.type) {
      case ACTIONS.SIGN_UP_SUCCESS:
        return {
          ...state,
          modules: [action.payload, ...state.modules],
          loading: false
        };
   
  }
};

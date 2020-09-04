import {
  GET_ERRORS,
  GET_ALERTS,
  CLEAR_ERRORS,
  CLEAR_ALERTS,
  ADD_FILE,
  ADD_FAVORITE,
  GET_COPY_INGESTED,
  POST_COPY_INGESTED,
  NEW_PROJECT,
  GET_BOTTOM_PANEL,
  POST_BOTTOM_PANEL,
  GET_CREATE_FOLDER,
  POST_CREATE_FOLDER,
  GET_FAVORITE_LIST,
  GET_OPEN_FILE,
  POST_OPEN_FILE,
  DASHBOARD_SUCCESS,
} from "../types";

const initialState = {
  file_list: [],
  favorite_list: [],
  project_list: [],
  loading: true,
  dashboard: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DASHBOARD_SUCCESS:
      return {
        ...state,
        dashboard: action.payload,
      };
    case ADD_FILE:
      return {
        ...state,
        file_list: action.payload,
        loading: true,
      };
    case ADD_FAVORITE:
      return {
        ...state,
        favorite_list: action.payload,
        loading: true,
      };

    case NEW_PROJECT:
      return {
        ...state,
        project_list: action.payload,
        loading: true,
      };
    default:
      return state;
  }
};

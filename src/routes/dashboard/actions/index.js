import axios from "axios";

import { baseURL } from "../../../config";
import { node } from "prop-types";
import ErrorHandler from "../../../utils/errorHandler";
import { dashboard, createFolder as createFolderApi } from "../api";
import { getAccessToken } from "../../auth/selectors";

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
  DASHBOARD_REQUEST,
  DASHBOARD_SUCCESS,
  DASHBOARD_FAILURE,
} from "../types";

const dashboardSuccess = payload => ({
  type: DASHBOARD_SUCCESS,
  payload,
});

export const requestDashboard = () => (dispatch, getState) => {
  const token = getAccessToken(getState());
  (async () => {
    const response = await dashboard({ token });
    dispatch(dashboardSuccess(response.data));
  })();
};

export const createFolder = (parent_id, folder_name) => (dispatch, getState) => {
  const token = getAccessToken(getState());
  (async () => {
    const response = await createFolderApi({ token, parent_id, folder_name });
    dispatch(requestDashboard());
  })();
};

const DASHBOARD_URL = `${baseURL}/dashboard/`;

export const addFavorite = id => dispatch => {
  dispatch({
    type: CLEAR_ALERTS,
  });

  const url = `${DASHBOARD_URL}add-favorite/` + id;

  axios
    .post(url)
    .then(res => {
      const { data } = res.data;
      dispatch({
        type: ADD_FAVORITE,
        payload: data,
      });
    })
    .catch(err => {
      const e = ErrorHandler(err);
      if (e && e.length > 0) {
        e.forEach(item => {
          dispatch(item);
        });
      }
    });
};
export const addFile = params => dispatch => {
  dispatch({
    type: CLEAR_ALERTS,
  });

  const url = `${DASHBOARD_URL}add-file`;

  axios
    .post(url)
    .then(res => {
      const { data } = res.data;
      dispatch({
        type: ADD_FILE,
        payload: data,
      });
    })
    .catch(err => {
      const e = ErrorHandler(err);
      if (e && e.length > 0) {
        e.forEach(item => {
          dispatch(item);
        });
      }
    });
};
export const newProject = project_name => dispatch => {
  dispatch({
    type: CLEAR_ALERTS,
  });
  dispatch({
    type: CLEAR_ERRORS,
  });

  const url = `${DASHBOARD_URL}api/new-project/` + project_name + "create";

  axios
    .post(url)
    .then(res => {
      const { data } = res.data;

      dispatch({
        type: NEW_PROJECT,
        payload: data,
      });
      dispatch({
        type: GET_ALERTS,
        payload: {
          type: "success",
          msg: "Project   has been created successfully",
        },
      });
    })
    .catch(err => {
      const e = ErrorHandler(err);
      if (e && e.length > 0) {
        e.forEach(item => {
          dispatch(item);
        });
      }
    });
};

import client, { methods } from "../../api/axios";
import { baseURL } from "../../config";
import { node } from "prop-types";

const AUTH_URL = `${baseURL}/dashboard/`;

export const addFavorite = async ({ id }) =>
  await client()({
    url: `${AUTH_URL}add-favorite/` + id,
    data: {},
    method: methods.POST,
  });

export const addFile = async ({ up_file, user, node_id }) =>
  await client()({
    url: `${AUTH_URL}add-file`,
    method: methods.POST,
    data: {
      email,
      up_file: file,
      user: user,
      node_id: node_id,
    },
    method: methods.POST,
  });
export const copyIngested = async ({}) =>
  await client()({
    url: `${AUTH_URL}api/copy_ingested/`,
    method: methods.GET,
    data: {},
  });

export const newProject = async ({ project_name }) =>
  await client()({
    url: `${AUTH_URL}api/new-project/` + project_name + `create`,
    data: {},
    method: methods.POST,
  });
export const bottomPanel = async ({ node_id }) =>
  await client()({
    url: `${AUTH_URL}bottom-panel/` + node_id,
    data: {},
    method: methods.GET,
  });
export const bottomPanel = async ({ node_id }) =>
  await client()({
    url: `${AUTH_URL}bottom-panel/` + node_id,
    data: {},
    method: methods.POST,
  });
export const createFolder = async ({ parent_id, folder_name }) =>
  await client()({
    url: `${AUTH_URL}create-folder/` + parent_id + folder_name,
    data: {},
    method: methods.GET,
  });
export const createFolder = async ({ parent_id, folder_name }) =>
  await client()({
    url: `${AUTH_URL}create-folder/` + parent_id + folder_name,
    data: {},
    method: methods.POST,
  });
export const favoriteList = async ({}) =>
  await client()({
    url: `${AUTH_URL}favorite_list/`,
    data: {},
    method: methods.GET,
  });
export const openFile = async ({ node_id }) =>
  await client()({
    url: `${AUTH_URL}file-manager/open-file` + node_id,
    data: {
      data: node,
    },
    method: methods.POST,
  });
export const openFile = async ({ node_id }) =>
  await client()({
    url: `${AUTH_URL}file-manager/open-file` + node_id,
    data: {
      data: node,
    },
    method: methods.GET,
  });

export const deleteFile = async ({}) =>
  await client()({
    url: `${AUTH_URL}file-manager/delete-files`,
    data: {
      data: node,
    },
    method: methods.POST,
  });

export const fileManager = async ({ parent_id }) =>
  await client()({
    url: `${AUTH_URL}file-manager/` + parent_id,
    data: {
      parent_id: parent_id,
    },
    method: methods.GET,
  });

export const fileManager = async ({ parent_id }) =>
  await client()({
    url: `${AUTH_URL}file-manager/` + parent_id,
    data: {
      parent_id: parent_id,
    },
    method: methods.POST,
  });

export const mainTable = async ({ parent_id }) =>
  await client()({
    url: `${AUTH_URL}main-table/` + parent_id,
    data: {
      parent_id: parent_id,
    },
    method: methods.POST,
  });
export const mainTable = async ({ parent_id }) =>
  await client()({
    url: `${AUTH_URL}main-table/` + parent_id,
    data: {
      parent_id: parent_id,
    },
    method: methods.GET,
  });
export const openFile = async ({}) =>
  await client()({
    url: `${AUTH_URL}open-file/`,
    data: {},
    method: methods.POST,
  });
export const openDashboard = async ({ id }) =>
  await client()({
    url: `${AUTH_URL}open/` + id,
    data: {},
    method: methods.GET,
  });
export const openDashboard = async ({ id }) =>
  await client()({
    url: `${AUTH_URL}open/` + id,
    data: {},
    method: methods.POST,
  });
export const postRating = async ({ node_id, rating }) =>
  await client()({
    url: `${AUTH_URL}post-rating/` + node_id + rating,
    data: {},
    method: methods.POST,
  });
export const postTag = async ({ node_id, tag }) =>
  await client()({
    url: `${AUTH_URL}post-tag/` + node_id + tag,
    data: {},
    method: methods.POST,
  });
export const project = async ({ project_name }) =>
  await client()({
    url: `${AUTH_URL}project/` + project_name,
    data: {},
    method: methods.GET,
  });
export const newProject = async ({ project_name }) =>
  await client()({
    url: `${AUTH_URL}project/` + project_name + `new/`,
    data: {},
    method: methods.POST,
  });
export const renameFile = async ({ id }) =>
  await client()({
    url: `${AUTH_URL}rename-file/` + id,
    data: {},
    method: methods.GET,
  });

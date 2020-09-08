import { node } from "prop-types";
import client, { methods } from "../../api/axios";
import { baseURL } from "../../config";

const URL = `${baseURL}/dashboard`;

export const dashboard = async ({ token }) =>
  await client(token)({
    url: `${URL}`,
    method: methods.GET,
  });

export const addFavorite = async ({ token, id }) =>
  await client(token)({
    url: `${URL}add-favorite/${id}`,
    data: {},
    method: methods.POST,
  });

export const addFile = async ({ token, file, user, nodeId,dispatch}) => {
  const formData = new FormData();
  formData.append("up_file", file.File);
  formData.append("user", 1);
  formData.append("node_id", nodeId);
  
  console.log(file);
  return await client(token, dispatch )({
    url: `${URL}/add-file`,
    method: methods.POST,
    headers: {
      "Content-type": "multipart/form-data",
      
    },
    data: formData,
  }
  );
 
};
export const copyIngested = async ({ token, projectName }) =>
  await client(token)({
    url: `${URL}api/copy_ingested/`,
    method: methods.GET,
    data: {},
  });

export const newProject = async ({ token, project_name, dispatch }) =>
  await client(
    token,
    dispatch
  )({
    url: `${URL}/api/new-project/${project_name}/create`,
    method: methods.POST,
  });
export const bottomPanel = async ({ token, node_id }) =>
  await client(token)({
    url: `${URL}bottom-panel/${node_id}`,
    data: {},
    method: methods.GET,
  });

export const createFolder = async ({ token, parent_id, folder_name }) =>
  await client(token)({
    url: `${URL}/create-folder/${parent_id}/${folder_name}`,
    data: {},
    method: methods.POST,
  });
export const favoriteList = async ({ token }) =>
  await client(token)({
    url: `${URL}/favorite_list/`,
    data: {},
    method: methods.GET,
  });

export const deleteFile = async ({ token }) =>
  await client(token)({
    url: `${URL}/file-manager/delete-files`,
    data: {
      data: node,
    },
    method: methods.POST,
  });

export const fileManager = async ({ token, parent_id }) =>
  await client(token)({
    url: `${URL}/file-manager/${parent_id}`,
    data: {
      parent_id,
    },
    method: methods.GET,
  });

export const mainTable = async ({ token, parent_id }) =>
  await client(token)({
    url: `${URL}/main-table/${parent_id}`,
    data: {
      parent_id,
    },
    method: methods.POST,
  });

export const openFile = async ({ token }) =>
  await client(token)({
    url: `${URL}/open-file/`,
    data: {},
    method: methods.POST,
  });

export const openDashboard = async ({ token, id }) =>
  await client(token)({
    url: `${URL}/open/${id}`,
    data: {},
    method: methods.GET,
  });

export const postRating = async ({ token, node_id, rating }) =>
  await client(token)({
    url: `${URL}/post-rating/${node_id}/${rating}`,
    data: {},
    method: methods.POST,
  });
export const postTag = async ({ token, node_id, tag }) =>
  await client(token)({
    url: `${URL}/post-tag/${node_id}/${tag}`,
    data: {},
    method: methods.POST,
  });

export const project = async ({ token, project_name }) =>
  await client(token)({
    url: `${URL}/project/${project_name}`,
    data: {},
    method: methods.GET,
  });

export const renameFile = async ({ token, id }) =>
  await client(token)({
    url: `${URL}/rename-file/${id}`,
    data: {},
    method: methods.GET,
  });

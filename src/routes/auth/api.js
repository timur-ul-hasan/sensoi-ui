import client, { methods } from "../../api/axios";
import { baseURL } from "../../config";

const AUTH_URL = `${baseURL}/accounts/`;

export const login = async ({ email, password }) =>
  await client()({
    url: `${AUTH_URL}token/`,
    data: {
      email,
      password,
    },
    method: methods.POST,
  });

export const signUp = async ({ email, name, password, passwordConfirmation }) =>
  await client()({
    url: `${AUTH_URL}register/`,
    method: methods.POST,
    data: {
      email,
      full_name: name,
      password1: password,
      password2: passwordConfirmation,
    },
  });

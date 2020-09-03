import client, { methods } from "../../api/axios";
import { baseURL } from "../../config";
import axios from "axios";
const AUTH_URL = `${baseURL}/accounts/`;

export const login = async data => {
  return await axios.post(`${AUTH_URL}token/`, data);
};

// // await client()({
// //   url: `${AUTH_URL}token/`,
// //   data: {
// //     email,
// //     password,
// //   },
// //   method: methods.POST,
// // }
// );
// export const signUp = async data => {
//   return await axios.post(`${AUTH_URL}register/`, data);
// };

export const signUp = async ({ email, full_name, password1, password2 }) =>
  await client()({
    url: `${AUTH_URL}register/`,
    method: methods.POST,
    data: {
      email,
      full_name: full_name,
      password1: password1,
      password2: password2,
    },
  });

import client, { methods } from "../../api/axios";
import { baseURL } from "../../config";

const AUTH_URL = `${baseURL}/api/auth/`;

const profileTypes = {
  SERVICEPROVIDER: "service-providers/",
  SUPPLIER: "suppliers/",
  CUSTOMER: "customers/",
};

const signIn = async ({ type, username, password }) =>
  await client()({
    url: `${AUTH_URL}${profileTypes[type]}login`,
    data: {
      username,
      password,
    },
    method: methods.POST,
  });

const customerSignUp = async ({ name, phone, email, password, passwordConfirmation }) =>
  await client()({
    url: `${AUTH_URL}customers/signup`,
    method: methods.POST,
    data: {
      name,
      phone,
    },
  });

export { customerSignUp, signIn };

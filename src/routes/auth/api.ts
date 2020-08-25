import client, { methods } from "../../api/axios";
import { baseURL } from "../../config";

const AUTH_URL = `${baseURL}/api/auth/`;

const profileTypes = {
  SERVICEPROVIDER: "service-providers/",
  SUPPLIER: "suppliers/",
  CUSTOMER: "customers/",
};

const customerSignUp: any = async ({ name, phone, email, password, passwordConfirmation }: any) =>
  await client()({
    url: `${AUTH_URL}customers/signup`,
    method: methods.POST,
    data: {
      name,
      phone,
      email,
      password,
      password_confirmation: passwordConfirmation,
    },
  });

const supplierSignUp: any = async ({
  businessPhone,
  bank_details,
  businessEmail,
  name,
  businessName,
  contactPersonName,
  cnic,
  phone,
  monthlySales,
  email,
  noOfEmployees,
  password,
  passwordConfirmation,
  bankName,
  accountTitle,
  accountNumber,
  addresses,
}: any) =>
  await client()({
    url: `${AUTH_URL}suppliers/signup`,
    method: methods.POST,
    data: {
      business_name: businessName,
      business_phone: businessPhone,
      bank_details,
      business_email: businessEmail,
      name,
      cnic,
      phone,
      email,
      contact_person: contactPersonName,
      monthly_sales: monthlySales,
      no_of_employees: noOfEmployees,
      password,
      password_confirmation: passwordConfirmation,
      bank_name: bankName,
      account_number: accountNumber,
      account_title: accountTitle,
      addresses,
    },
  });

const serviceProviderSignUp: any = async ({
  businessPhone,
  bank_details,
  businessEmail,
  name,
  businessName,
  contactPersonName,
  cnic,
  phone,
  monthlySales,
  email,
  noOfEmployees,
  password,
  passwordConfirmation,
  bankName,
  accountTitle,
  accountNumber,
  website,
  yearlyTurnOver,
  isoCertification,
  categories,
  companyProfile,
  addresses,
}: any) =>
  await client()({
    url: `${AUTH_URL}service-providers/signup`,
    method: methods.POST,
    data: {
      business_name: businessName,
      business_phone: businessPhone,
      bank_details,
      business_email: businessEmail,
      yearly_turn_over: yearlyTurnOver,
      website,
      iso_certification: isoCertification,
      name,
      cnic,
      phone,
      email,
      contact_person: contactPersonName,
      monthly_sales: monthlySales,
      no_of_employees: noOfEmployees,
      password,
      password_confirmation: passwordConfirmation,
      bank_name: bankName,
      account_number: accountNumber,
      account_title: accountTitle,
      addresses,
      categories: categories && categories.length,
      company_profile: companyProfile,
    },
  });

const signIn: any = async ({ type, username, password }: any) =>
  await client()({
    url: `${AUTH_URL}${profileTypes[type]}login`,
    data: {
      username,
      password,
    },
    method: methods.POST,
  });

const adminSignin: any = async ({ username, password }: any) =>
  await client()({
    url: `${baseURL}/api/admin/auth/login`,
    data: {
      username,
      password,
    },
    method: methods.POST,
  });

const adminInfo: any = async ({ token }: any) =>
  await client(token)({
    url: `${baseURL}/api/admin/show`,
    method: methods.GET,
  });

const signOut: any = async ({ token }) =>
  await client(token)({
    url: `${AUTH_URL}logout`,
    method: methods.POST,
  });

const authUser: any = async ({ token }) =>
  await client(token)({
    url: `${baseURL}/api/customers/show`,
    method: methods.GET,
  });

const verifyEmail: any = async ({ token, code }: any) =>
  await client(token)({
    url: `${AUTH_URL}verify-email`,
    data: {
      verification_code: code,
    },
    method: methods.POST,
  });

const verifyPhone: any = async ({ token, code }: any) =>
  await client(token)({
    url: `${AUTH_URL}verify-phone`,
    data: {
      verification_code: code,
    },
    method: methods.POST,
  });

const refreshToken: any = async ({ token }) =>
  await client(token)({
    url: `${AUTH_URL}refresh-token`,
    method: methods.POST,
  });

const forgotPassword: any = async ({ username }) =>
  await client()({
    url: `${AUTH_URL}forgot-password`,
    method: methods.POST,
    data: {
      username,
    },
  });

const socialSignup: any = async ({ name, email, phone, accessToken, id, provider }) =>
  await client()({
    url: `${AUTH_URL}social-signup`,
    method: methods.POST,
    data: {
      name,
      email,
      phone,
      social_id: id,
      social_token: accessToken,
      social_provider: provider,
    },
  });

const socialSignin: any = async ({ accessToken, id, provider }) =>
  await client()({
    url: `${AUTH_URL}social-login`,
    method: methods.POST,
    data: {
      social_id: id,
      social_token: accessToken,
      social_provider: provider,
    },
  });

const resendVerifyEmail: any = async ({ token }: any) =>
  await client(token)({
    url: `${AUTH_URL}resend-email-verification-code`,
    method: methods.POST,
  });

const resendVerifyPhone: any = async ({ token }: any) =>
  await client(token)({
    url: `${AUTH_URL}resend-phone-verification-code`,
    method: methods.POST,
  });

export const emailAvailable: any = async (email: any) =>
  await client()({
    url: `${AUTH_URL}email-available`,
    data: {
      email,
    },
    method: methods.POST,
  });

export const phoneAvailable: any = async (phone: any) =>
  await client()({
    url: `${AUTH_URL}phone-available`,
    data: {
      phone,
    },
    method: methods.POST,
  });

export {
  customerSignUp,
  supplierSignUp,
  serviceProviderSignUp,
  signIn,
  signOut,
  authUser,
  verifyEmail,
  verifyPhone,
  resendVerifyEmail,
  resendVerifyPhone,
  refreshToken,
  forgotPassword,
  socialSignup,
  socialSignin,
  adminSignin,
  adminInfo,
};

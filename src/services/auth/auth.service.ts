// Auth services

import CONSTANTS from "config/constants";
import { LoginResponse, TemporalAdminUser, User } from "types/user.types";
import axiosDefault from "utils/axios.utils";

import { Login } from "./auth.service.types";
import { RegisterUserConfig, VerifyMethod } from "./auth.service.types";

const { API } = CONSTANTS;
const { REACT_APP_API_URL } = API;

export const signInAdmin = async (data: Login): Promise<TemporalAdminUser> => {
  try {
    return await axiosDefault
      .post(`${REACT_APP_API_URL}`, data)
      .then(response => response.data);
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const signInUserStep1 = async (
  data: RegisterUserConfig
): Promise<User> => {
  try {
    return await axiosDefault
      .post(`${REACT_APP_API_URL}/auth/validate/reniec`, data)
      .then(response => response.data);
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const signInUserStep2 = async (method: VerifyMethod): Promise<void> => {
  const { type, dni } = method;
  try {
    return await axiosDefault
      .post(`${REACT_APP_API_URL}/auth/generateCode/user`, {
        type: type === "SMS" ? 1 : 2,
        dni
      })
      .then(response => console.log(response.data));
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const signInUserStep3 = async (data: Login): Promise<LoginResponse> => {
  const { dni, password } = data;
  try {
    return await axiosDefault
      .post(`${REACT_APP_API_URL}`, { dni, password })
      .then(response => response.data);
  } catch (e: any) {
    throw new Error(e.message);
  }
};

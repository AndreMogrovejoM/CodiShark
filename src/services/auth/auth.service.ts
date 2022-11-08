// Auth services

import CONSTANTS from "config/constants";
import axiosDefault from "utils/axios.utils";

import { Auth, RegisterAdminConfig } from "./auth.service.types";
import { RegisterUserConfig, VerifyMethod } from "./auth.service.types";

const { API } = CONSTANTS;
const { REACT_APP_API_URL } = API;

const BASE_URL = `${REACT_APP_API_URL}/auth`;

export const signInAdmin = async (data: RegisterAdminConfig): Promise<Auth> => {
  try {
    return await axiosDefault
      .post(BASE_URL, data)
      .then(response => response.data);
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const signInUserStep1 = async (
  data: RegisterUserConfig
): Promise<Auth> => {
  try {
    return await axiosDefault
      .post(BASE_URL, data)
      .then(response => response.data);
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const signInUserStep2 = async (method: VerifyMethod): Promise<Auth> => {
  try {
    return await axiosDefault
      .post(BASE_URL, { method })
      .then(response => response.data);
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const signInUserStep3 = async (code: string): Promise<Auth> => {
  try {
    return await axiosDefault
      .post(BASE_URL, { code })
      .then(response => response.data);
  } catch (e: any) {
    throw new Error(e.message);
  }
};

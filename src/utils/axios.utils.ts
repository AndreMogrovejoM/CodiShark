import axios from "axios";
import CONSTANTS from "config/constants";
import { getCookie } from "react-use-cookie";

const { API } = CONSTANTS;
const { DEFAULT_REQUEST_TIMEOUT, INCLUDED_LOGGER_ENVS } = API;
const { EXCLUDED_LOGGER_STATUS_CODES } = API;
const { REACT_APP_API_URL, REACT_APP_PLATFORM } = API;
const { IZI_PAY_USER_NAME } = API;
const { IZI_PAY_USER_PASSWORD } = API;
const { REACT_APP_IZI_PAY_URL } = API;

const axiosDefault = axios.create({
  baseURL: REACT_APP_API_URL,
  timeout: DEFAULT_REQUEST_TIMEOUT,
  headers: {
    Platform: REACT_APP_PLATFORM as string,
    "Content-Type": "application/json",
    Authorization: `Bearer ${getCookie("token")}`,
    responseType: "json"
  }
});

// Report to logger middleware
const report = (error: any) => {
  const env = import.meta.env.REACT_APP_ENV as string;
  const includedEnv = INCLUDED_LOGGER_ENVS.includes(env);
  let excludedCode = true;
  let timeout = false;

  if (error.code === "ECONNABORTED" || error.response.status === 408) {
    timeout = true;
  } else {
    excludedCode = EXCLUDED_LOGGER_STATUS_CODES.includes(error.response.status);
  }

  if (includedEnv && (timeout || !excludedCode)) {
    console.warn(error);
  }
  return Promise.reject(error);
};

axiosDefault.interceptors.response.use(
  (response: any) => {
    // Do something with response data
    return response;
  },
  (error: any) => {
    // Do something with response error
    return report(error);
  }
);

export const axiosBasic = axios.create({
  baseURL: REACT_APP_IZI_PAY_URL,
  timeout: DEFAULT_REQUEST_TIMEOUT,
  withCredentials: false,
  headers: {
    Platform: REACT_APP_PLATFORM as string,
    "Content-Type": "application/x-www-form-urlencoded"
  }
});

export const buildBasicAuth = () => {
  return {
    username: IZI_PAY_USER_NAME,
    password: IZI_PAY_USER_PASSWORD
  };
};

export const buildHeaders = () => {
  return {
    Platform: REACT_APP_PLATFORM as string,
    "Content-Type": "application/json",
    Authorization: `Bearer ${getCookie("token")}`,
    responseType: "json"
  };
};

export default axiosDefault;

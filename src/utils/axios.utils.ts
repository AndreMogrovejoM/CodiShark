import axios from "axios";
import CONSTANTS from "config/constants";
import { getCookie } from "react-use-cookie";

const { API } = CONSTANTS;
const { DEFAULT_REQUEST_TIMEOUT, INCLUDED_LOGGER_ENVS } = API;
const { EXCLUDED_LOGGER_STATUS_CODES } = API;

const token = getCookie("token");

const axiosDefault = axios.create({
  baseURL: API.REACT_APP_API_URL,
  timeout: DEFAULT_REQUEST_TIMEOUT,
  headers: {
    Platform: API.REACT_APP_PLATFORM as string,
    "Content-Type": "application/json",
    Authorization: token ? `Bearer ${token}` : "",
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

export default axiosDefault;

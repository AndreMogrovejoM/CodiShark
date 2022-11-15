// Administrator services

import CONSTANTS from "config/constants";
import axiosDefault from "utils/axios.utils";

import { GraphicsResponse } from "./administrator.service.types";
import { Status, UsersListResponse } from "./administrator.service.types";
import { OperationListResponse } from "./administrator.service.types";
import { SecondPanelPayload } from "./administrator.service.types";
import { SecondPanelAdministrator } from "./administrator.service.types";
import { FirstPanelAdministrator } from "./administrator.service.types";
const { API } = CONSTANTS;

const { REACT_APP_API_URL } = API;

export const fetchAdministratorFirstPanel =
  async (): Promise<FirstPanelAdministrator> => {
    try {
      const response = await axiosDefault.get(
        `${REACT_APP_API_URL}/admin/home/panel/month`
      );
      return response?.data;
    } catch (e: any) {
      throw new Error(e.message);
    }
  };

export const fetchAdministratorSecondPanel = async (
  data: SecondPanelPayload
): Promise<SecondPanelAdministrator> => {
  const { dateIni, dateEnd } = data;
  try {
    const response = await axiosDefault.get(
      `${REACT_APP_API_URL}/admin/home/panel?dateIni=${dateIni}&dateEnd=${dateEnd}`
    );
    return response?.data;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const fetchAdministratorUsers = async (
  rol: number,
  take: number
): Promise<UsersListResponse> => {
  try {
    const response = await axiosDefault.get(
      `${REACT_APP_API_URL}/admin/users?rol=${rol}&take=${take}`
    );
    return response?.data;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const fetchAdministratorOperations = async (
  status?: Status,
  take = 4
): Promise<OperationListResponse> => {
  const url = status
    ? `${REACT_APP_API_URL}/admin/operations?status=${status}&take=${take}`
    : `${REACT_APP_API_URL}/admin/operations?take=${take}`;
  try {
    const response = await axiosDefault.get(url);
    return response?.data;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const fetchAdministratorGraphics = async (
  year: string
): Promise<GraphicsResponse> => {
  try {
    const response = await axiosDefault.get(
      `${REACT_APP_API_URL}/admin/home/grafic/income?year=${year}`
    );
    return response?.data;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const exportUsersPdf = async (): Promise<File> => {
  try {
    const response = await axiosDefault.get(
      `${REACT_APP_API_URL}/admin/export/users/pdf`,
      {
        responseType: "blob"
      }
    );
    return response?.data;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const exportUsersExcel = async (): Promise<File> => {
  try {
    const response = await axiosDefault.get(
      `${REACT_APP_API_URL}/admin/export/users/excel`,
      {
        responseType: "blob"
      }
    );
    return response?.data;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const exportOperationsPdf = async (): Promise<File> => {
  try {
    const response = await axiosDefault.get(
      `${REACT_APP_API_URL}/admin/export/operations/pdf`,
      {
        responseType: "blob"
      }
    );
    return response?.data;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const exportOperationsExcel = async (): Promise<File> => {
  try {
    const response = await axiosDefault.get(
      `${REACT_APP_API_URL}/admin/export/operations/excel`,
      {
        responseType: "blob"
      }
    );
    return response?.data;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

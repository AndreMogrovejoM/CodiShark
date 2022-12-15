// Administrator services

import CONSTANTS from "config/constants";
import axiosDefault, { buildHeaders } from "utils/axios.utils";

import { SecondFaResponse } from "./administrator.service.types";
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
        `${REACT_APP_API_URL}/admin/home/panel/month`,
        {
          headers: buildHeaders()
        }
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
      `${REACT_APP_API_URL}/admin/home/panel?dateIni=${dateIni}&dateEnd=${dateEnd}`,
      {
        headers: buildHeaders()
      }
    );
    return response?.data;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const fetchAdministratorUsers = async (
  rol: number,
  take: number,
  search = ""
): Promise<UsersListResponse> => {
  try {
    const response = await axiosDefault.get(
      `${REACT_APP_API_URL}/admin/users?rol=${rol}&take=${take}&search=${search}`,
      {
        headers: buildHeaders()
      }
    );
    return response?.data;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const fetchAdministratorOperations = async (
  status?: Status,
  take = 4,
  search = ""
): Promise<OperationListResponse> => {
  const url = status
    ? `${REACT_APP_API_URL}/admin/operations?status=${status}&take=${take}}&search=${search}`
    : `${REACT_APP_API_URL}/admin/operations?take=${take}}&search=${search}`;
  try {
    const response = await axiosDefault.get(url, {
      headers: buildHeaders()
    });
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
      `${REACT_APP_API_URL}/admin/home/grafic/income?year=${year}`,
      {
        headers: buildHeaders()
      }
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
        responseType: "blob",
        headers: buildHeaders()
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
        responseType: "blob",
        headers: buildHeaders()
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
        responseType: "blob",
        headers: buildHeaders()
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
        responseType: "blob",
        headers: buildHeaders()
      }
    );
    return response?.data;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const generate2fa = async (): Promise<SecondFaResponse> => {
  try {
    const response = await axiosDefault.post(`/admin/generate2fa`, {
      headers: buildHeaders()
    });
    const { data } = response ?? {};
    return data;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const activate2fa = async (): Promise<void> => {
  try {
    return await axiosDefault.get(`/admin/generate2fa/active`, {
      headers: buildHeaders()
    });
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const deactivate2fa = async (): Promise<void> => {
  try {
    return await axiosDefault.get(`/admin/generate2fa/desactive`, {
      headers: buildHeaders()
    });
  } catch (e: any) {
    throw new Error(e.message);
  }
};

// Administrator services

import CONSTANTS from "config/constants";
import axiosDefault from "utils/axios.utils";

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

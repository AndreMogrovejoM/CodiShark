// Users services
import { OperationListResponse } from "services/administrator/administrator.service.types";
import axiosDefault, { buildHeaders } from "utils/axios.utils";

import { UserDebt } from "./users.service.types";

export const userDebts = async (): Promise<UserDebt[]> => {
  try {
    const response = await axiosDefault.get(`/debts`, {
      headers: buildHeaders()
    });
    return response?.data;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const fetchUserOperations = async (): Promise<OperationListResponse> => {
  try {
    const response = await axiosDefault.get("/operations", {
      headers: buildHeaders()
    });
    return response?.data;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

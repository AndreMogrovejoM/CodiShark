// Users services
import { Status } from "services/administrator/administrator.service.types";
import axiosDefault, { buildHeaders } from "utils/axios.utils";

import { OperationUserDebt, UserDebtResponse } from "./users.service.types";

export const userDebts = async (): Promise<UserDebtResponse> => {
  try {
    const response = await axiosDefault.get(`/debts`, {
      headers: buildHeaders()
    });
    return response?.data;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const fetchUserOperations = async (
  status?: Status,
  take = 4
): Promise<OperationUserDebt[]> => {
  try {
    const response = await axiosDefault.get("/operations", {
      headers: buildHeaders()
    });
    return response?.data;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

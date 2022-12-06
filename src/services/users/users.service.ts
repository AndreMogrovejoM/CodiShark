// Users services
import { Status } from "services/administrator/administrator.service.types";
import axiosDefault, { buildHeaders } from "utils/axios.utils";

import { OperationUserDebtResponse } from "./users.service.types";
import { UserDebtResponse } from "./users.service.types";

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
): Promise<OperationUserDebtResponse> => {
  try {
    const response = await axiosDefault.get("/operations", {
      headers: buildHeaders()
    });
    return response?.data;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

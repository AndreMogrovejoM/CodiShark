// Users services
import { Status } from "services/administrator/administrator.service.types";
import axiosDefault, { buildHeaders } from "utils/axios.utils";

import { OperationUserDebtResponse } from "./users.service.types";
import { OperationUserUniqueDebtResponse } from "./users.service.types";
import { OperationNumberPayload } from "./users.service.types";
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

export const generateOperationNumber = async (
  payload: OperationNumberPayload
): Promise<OperationUserUniqueDebtResponse> => {
  const { amount, debtId, type = 1 } = payload;
  try {
    const response = await axiosDefault.post(
      `/operations/generateTransfer`,
      { debt_id: debtId, amount_paid: amount, type },
      {
        headers: buildHeaders()
      }
    );
    const { data } = response ?? {};
    return data;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const exportOperationPdf = async (
  operationId?: number
): Promise<File> => {
  try {
    const response = await axiosDefault.get(
      `/operations/exportpdf/${operationId}`,
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

// Users services
import axiosDefault, { buildHeaders } from "utils/axios.utils";

import { OperationUserDebtResponse } from "./users.service.types";
import { FailedOperation } from "./users.service.types";
import { OperationUserDebt } from "./users.service.types";
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

export const fetchUserDebt = async (
  operationId?: number
): Promise<OperationUserDebt> => {
  try {
    const response = await axiosDefault.get(`/operations/${operationId}`, {
      headers: buildHeaders()
    });
    return response?.data?.data;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const fetchUserOperations = async (
  skip: number,
  take: number,
  pageParam?: any
): Promise<OperationUserDebtResponse> => {
  try {
    const response = await axiosDefault.get(
      `/operations?take=${take}&skip=${skip}`,
      {
        headers: buildHeaders()
      }
    );
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

export const sendOperationEmail = async (operationId?: number) => {
  try {
    return await axiosDefault.get(`/operations/sendMail/${operationId}`, {
      headers: buildHeaders()
    });
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const sendFailedOperation = async (
  data: FailedOperation
): Promise<void> => {
  const { debtId, operationNumber } = data ?? {};
  try {
    return await axiosDefault.post(
      `/operations/failed`,
      { debt_id: debtId, operation_number: operationNumber },
      {
        headers: buildHeaders()
      }
    );
  } catch (e: any) {
    throw new Error(e.message);
  }
};

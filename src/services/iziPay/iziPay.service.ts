// Users services
import axiosDefault from "utils/axios.utils";
import { buildHeaders } from "utils/axios.utils";

import { ValidateIziPayPaymentPayload } from "./iziPay.service.types";

export const validateIziPayPayment = async (
  payload: ValidateIziPayPaymentPayload
) => {
  const { amount, debtId, operationNumber, hash, rawClientAnswer } = payload;
  console.log(payload);
  try {
    return await axiosDefault.post(
      "/operations/validate",
      {
        debt_id: debtId,
        amount,
        operation_number: operationNumber,
        hash,
        rawClientAnswer
      },
      { headers: buildHeaders() }
    );
  } catch (e: any) {
    console.log(e);
    throw new Error(e.message);
  }
};

// Users services
import axiosDefault, { axiosBasic } from "utils/axios.utils";
import { buildBasicAuth, buildHeaders } from "utils/axios.utils";

import { CreatePaymentResponse } from "./iziPay.service.types";
import { CreateIziPayPaymentPayload } from "./iziPay.service.types";
import { ValidateIziPayPaymentPayload } from "./iziPay.service.types";

export const createIziPayPayment = async (
  payload: CreateIziPayPaymentPayload
): Promise<CreatePaymentResponse> => {
  const { amount, debtId, currency = "PEN", user } = payload;
  const { email } = user;

  try {
    return await axiosBasic.post(
      "/api-payment/V4/Charge/CreatePayment",
      {
        amount: amount,
        currency: currency,
        customer: {
          email: email,
          ...user
        },
        orderId: debtId
      },
      { auth: buildBasicAuth() }
    );
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const validateIziPayPayment = async (
  payload: ValidateIziPayPaymentPayload
) => {
  const { amount, debtId, operationNumber } = payload;
  console.log("ENTER TO validateIziPayPayment");
  try {
    return await axiosDefault.post(
      "/operations/validate",
      {
        debt_id: debtId,
        amount,
        operation_number: operationNumber
      },
      { headers: buildHeaders() }
    );
  } catch (e: any) {
    console.log(e);
    throw new Error(e.message);
  }
};

import { useMutation, useQueryClient } from "react-query";

import { createIziPayPayment, validateIziPayPayment } from "./iziPay.service";
import { ValidateIziPayPaymentPayload } from "./iziPay.service.types";
import { CreatePaymentResponse } from "./iziPay.service.types";
import { CreateIziPayPaymentPayload } from "./iziPay.service.types";

export const useCreateIziPayPayment = () => {
  const queryClient = useQueryClient();

  return useMutation<CreatePaymentResponse, Error, CreateIziPayPaymentPayload>(
    createIziPayPayment,
    {
      // When mutate is called:
      onMutate: async () => {
        // Cancel any outgoing refetch (so they don't overwrite our optimistic update)
        await queryClient.cancelQueries("iziPay");
      },
      onError: () => {
        console.error("");
      },
      onSettled: () => {
        // Always refetch after error or success:
        queryClient.invalidateQueries("iziPay");
      }
    }
  );
};

export const useValidateIziPayPayment = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, ValidateIziPayPaymentPayload>(
    validateIziPayPayment,
    {
      // When mutate is called:
      onMutate: async () => {
        // Cancel any outgoing refetch (so they don't overwrite our optimistic update)
        await queryClient.cancelQueries("iziPay");
      },
      onError: () => {
        console.error("");
      },
      onSettled: () => {
        // Always refetch after error or success:
        queryClient.invalidateQueries("iziPay");
      }
    }
  );
};

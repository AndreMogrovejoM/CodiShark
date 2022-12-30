import { useInfiniteQuery, useMutation } from "react-query";
import { useQuery, useQueryClient } from "react-query";
import { getCookie } from "react-use-cookie";

import { fetchUserDebt, sendFailedOperation } from "./users.service";
import { generateOperationNumber } from "./users.service";
import { fetchUserOperations, userDebts } from "./users.service";
import { OperationUserUniqueDebtResponse } from "./users.service.types";
import { FailedOperation } from "./users.service.types";
import { OperationNumberPayload } from "./users.service.types";

export const useUserDebts = () => {
  const token = getCookie("token");

  return useQuery(["users", "debts"], () => userDebts(), {
    enabled: !!token,
    staleTime: 15 * 1000 * 60
  });
};

export const useFetchUserDebt = (operationId?: number) => {
  const token = getCookie("token");

  return useQuery(
    ["users", "debt", operationId],
    () => fetchUserDebt(operationId),
    {
      enabled: !!token && !!operationId,
      staleTime: 15 * 1000 * 60
    }
  );
};

export const useFetchUserOperations = (skip = 0, take = 10) => {
  const token = getCookie("token");

  return useInfiniteQuery(
    ["user-operations-list", skip, take],
    ({ pageParam }) => fetchUserOperations(skip, take, pageParam),
    {
      enabled: !!token,
      keepPreviousData: true,
      staleTime: 15 * 1000 * 60,
      getNextPageParam: () => {}
    }
  );
};

export const useGenerateOperationNumber = () => {
  const queryClient = useQueryClient();

  return useMutation<
    OperationUserUniqueDebtResponse,
    unknown,
    OperationNumberPayload
  >(generateOperationNumber, {
    // When mutate is called:
    onMutate: async () => {
      // Cancel any outgoing refetch (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries("operationNumber");
    },
    onError: () => {
      console.error("");
    },
    onSettled: () => {
      // Always refetch after error or success:
      queryClient.invalidateQueries("operationNumber");
    }
  });
};

export const useSendFailedOperation = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, FailedOperation>(sendFailedOperation, {
    // When mutate is called:
    onMutate: async () => {
      // Cancel any outgoing refetch (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries("operationNumber");
    },
    onError: () => {
      console.error("");
    },
    onSettled: () => {
      // Always refetch after error or success:
      queryClient.invalidateQueries("operationNumber");
    }
  });
};

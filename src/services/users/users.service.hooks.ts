import { useMutation, useQuery, useQueryClient } from "react-query";
import { getCookie } from "react-use-cookie";

import { generateOperationNumber } from "./users.service";
import { fetchUserOperations, userDebts } from "./users.service";
import { OperationUserUniqueDebtResponse } from "./users.service.types";
import { OperationNumberPayload } from "./users.service.types";

export const useUserDebts = () => {
  const token = getCookie("token");

  return useQuery(["users"], () => userDebts(), {
    enabled: !!token,
    staleTime: 15 * 1000 * 60
  });
};

export const useFetchUserOperations = (skip: 0, take = 10) => {
  const token = getCookie("token");
  return useQuery(
    ["user-operations-list", skip, take],
    () => fetchUserOperations(skip, take),
    {
      enabled: !!token,
      staleTime: 15 * 1000 * 60
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

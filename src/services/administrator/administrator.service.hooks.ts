import { useInfiniteQuery, useMutation } from "react-query";
import { useQuery, useQueryClient } from "react-query";
import { getCookie } from "react-use-cookie";
import { PaymentStatus } from "types/payment.types";

import { generate2fa, importUsersByExcel } from "./administrator.service";
import { invalidePayment, validatePayment } from "./administrator.service";
import { fetchAdministratorSecondPanel } from "./administrator.service";
import { fetchAdministratorGraphics } from "./administrator.service";
import { fetchAdministratorUsers } from "./administrator.service";
import { fetchAdministratorOperations } from "./administrator.service";
import { fetchAdministratorFirstPanel } from "./administrator.service";
import { SecondFaResponse } from "./administrator.service.types";

export const useFetchAdministratorFirstPanel = () => {
  const token = getCookie("token");

  return useQuery(["panel-month"], () => fetchAdministratorFirstPanel(), {
    enabled: !!token,
    staleTime: 15 * 1000 * 60
  });
};

export const useFetchAdministratorSecondPanel = (
  dateIni: string,
  dateEnd: string
) => {
  const token = getCookie("token");
  return useQuery(
    ["panel", dateIni, dateEnd],
    () =>
      fetchAdministratorSecondPanel({
        dateIni,
        dateEnd
      }),
    {
      enabled: !!token && !!dateIni && !!dateEnd,
      staleTime: 15 * 1000 * 60
    }
  );
};

export const useFetchAdministratorUsers = (
  rol = 1,
  skip = 0,
  take = 10,
  search: string
) => {
  const token = getCookie("token");

  return useInfiniteQuery(
    ["users-list", rol, skip, take, search],
    ({ pageParam }) =>
      fetchAdministratorUsers(rol, skip, take, search, pageParam),
    {
      enabled: !!token,
      keepPreviousData: true,
      staleTime: 15 * 1000 * 60,
      getNextPageParam: () => {}
    }
  );
};

export const useFetchAdministratorOperations = (
  skip = 0,
  take = 10,
  status?: PaymentStatus | string,
  search = ""
) => {
  const token = getCookie("token");
  return useInfiniteQuery(
    ["operations-list", skip, take, status, search],
    ({ pageParam }) =>
      fetchAdministratorOperations(skip, take, status, search, pageParam),
    {
      enabled: !!token,
      keepPreviousData: true,
      staleTime: 15 * 1000 * 60,
      getNextPageParam: () => {}
    }
  );
};

export const useFetchAdministratorGraphics = (year: string) => {
  const token = getCookie("token");
  return useQuery(
    ["graphics-income", year],
    () => fetchAdministratorGraphics(year),
    {
      enabled: !!token,
      staleTime: 15 * 1000 * 60
    }
  );
};

export const useGenerate2fa = () => {
  const queryClient = useQueryClient();

  return useMutation<SecondFaResponse, unknown, void>(generate2fa, {
    // When mutate is called:
    onMutate: async () => {
      // Cancel any outgoing refetch (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries("2fa");
    },
    onError: () => {
      console.error("");
    },
    onSettled: () => {
      // Always refetch after error or success:
      queryClient.invalidateQueries("2fa");
    }
  });
};

export const useImportUsersByExcel = () => {
  const queryClient = useQueryClient();

  return useMutation<any, unknown, FormData>(importUsersByExcel, {
    // When mutate is called:
    onMutate: async () => {
      // Cancel any outgoing refetch (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries("file");
    },
    onError: () => {
      console.error("");
    },
    onSettled: () => {
      // Always refetch after error or success:
      queryClient.invalidateQueries("file");
    }
  });
};

export const useValidatePayment = (id?: number) => {
  const queryClient = useQueryClient();

  return useMutation(validatePayment, {
    // When mutate is called:
    onMutate: async () => {
      // Cancel any outgoing refetch (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries("operations-list");
    },
    onError: () => {
      console.error("");
    },
    onSettled: () => {
      // Always refetch after error or success:
      queryClient.invalidateQueries("operations-list");
    }
  });
};

export const useInvalidePayment = (id?: number) => {
  const queryClient = useQueryClient();

  return useMutation(invalidePayment, {
    // When mutate is called:
    onMutate: async () => {
      // Cancel any outgoing refetch (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries("operations-list");
    },
    onError: () => {
      console.error("");
    },
    onSettled: () => {
      // Always refetch after error or success:
      queryClient.invalidateQueries("operations-list");
    }
  });
};

import { useMutation, useQuery, useQueryClient } from "react-query";
import { getCookie } from "react-use-cookie";
import { PaymentStatus } from "types/payment.types";

import { generate2fa, importUsersByExcel } from "./administrator.service";
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
  take = 4,
  search: string
) => {
  const token = getCookie("token");

  return useQuery(
    ["users-list", rol, take, search],
    () => fetchAdministratorUsers(rol, take, search),
    {
      enabled: !!token,
      staleTime: 15 * 1000 * 60
    }
  );
};

export const useFetchAdministratorOperations = (
  status?: PaymentStatus | string,
  take = 4,
  search?: string
) => {
  const token = getCookie("token");
  return useQuery(
    ["operations-list", status, take, search],
    () => fetchAdministratorOperations(status, take, search),
    {
      enabled: !!token,
      staleTime: 15 * 1000 * 60
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

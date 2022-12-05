import { useQuery } from "react-query";
import { getCookie } from "react-use-cookie";
import { Status } from "services/administrator/administrator.service.types";

import { fetchUserOperations, userDebts } from "./users.service";

export const useUserDebts = () => {
  const token = getCookie("token");

  return useQuery(["users"], () => userDebts(), {
    enabled: !!token,
    staleTime: 15 * 1000 * 60
  });
};

export const useFetchUserOperations = (status?: Status, take = 4) => {
  const token = getCookie("token");
  return useQuery(
    ["user-operations-list", status, take],
    () => fetchUserOperations(status, take),
    {
      enabled: !!token,
      staleTime: 15 * 1000 * 60
    }
  );
};

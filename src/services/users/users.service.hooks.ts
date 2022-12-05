import { useQuery } from "react-query";
import { getCookie } from "react-use-cookie";

import { fetchUserOperations, userDebts } from "./users.service";

export const useUserDebts = () => {
  const token = getCookie("token");

  return useQuery(["users"], () => userDebts(), {
    enabled: !!token,
    staleTime: 15 * 1000 * 60
  });
};

export const useFetchUserOperations = () => {
  const token = getCookie("token");
  return useQuery(["user-operations-list"], () => fetchUserOperations(), {
    enabled: !!token,
    staleTime: 15 * 1000 * 60
  });
};

import { useQuery } from "react-query";
import { getCookie } from "react-use-cookie";

import { fetchAdministratorSecondPanel } from "./administrator.service";
import { fetchAdministratorFirstPanel } from "./administrator.service";

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

import history from "router/Router/history";

export const useNavigate = () => {
  return {
    navigate: (route: string) => history.push(route),
    back: () => history.back(),
    replace: (route: string) => history.replace(route)
  };
};

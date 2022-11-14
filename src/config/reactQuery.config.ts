// React query configurations
import { QueryClient } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: import.meta.env.PROD,
      retry: window.Cypress ? 1 : undefined,
      staleTime: 15 * 1000 * 60
    }
  }
});

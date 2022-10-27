// React query configurations
import { QueryClient } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: window.Cypress ? 1 : undefined
    }
  }
});

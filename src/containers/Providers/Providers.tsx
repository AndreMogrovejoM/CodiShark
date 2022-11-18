import { ThemeProvider } from "@mui/material";
import { queryClient } from "config/reactQuery.config";
import AuthProvider from "contexts/auth/auth.context";
import GlobalsProvider from "contexts/globals/globals.context";
import i18n from "i18n/i18n";
import React from "react";
import { I18nextProvider } from "react-i18next";
import { QueryClientProvider } from "react-query";
import Router from "router/Router/Router";
import GlobalStyles from "styles/base/index";
import { theme } from "styles/theme";

import { ProvidersProps as Props } from "./Providers.types";

const Providers: React.FC<Props> = props => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* {process.env.NODE_ENV === "development" ? <ReactQueryDevtools /> : null} */}
      <I18nextProvider i18n={i18n}>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <GlobalsProvider>
            <AuthProvider>
              <Router />
            </AuthProvider>
          </GlobalsProvider>
        </ThemeProvider>
      </I18nextProvider>
    </QueryClientProvider>
  );
};

Providers.defaultProps = {};

export default Providers;

import SetupProvider from "containers/SetupProvider/SetupProvider";
import React, { lazy, memo, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { RouterProps as Props } from "./Router.types";

// Root routes
const FiverZeroZero = lazy(() => import("pages/500/500.page"));
const FourZeroFour = lazy(() => import("pages/404/404.page"));
const Home = lazy(() => import("pages/home.page"));
const SignInAdministrator = lazy(
  () => import("pages/signInAdministrator.page")
);
const AdministratorPanel = lazy(() => import("pages/AdministratorPanel.page"));
const SignInUser = lazy(() => import("pages/signInUser.page"));
const UserPanel = lazy(() => import("pages/userPanel.page"));
const UserOperationsPanel = lazy(
  () => import("pages/userOperationalPanel.page")
);

const Router: React.FC<Props> = props => {
  return (
    <SetupProvider>
      <Suspense fallback={null}>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/signin" element={<SignInUser />} />
          <Route
            path="/signInAdministrator"
            element={<SignInAdministrator />}
          />
          <Route path="/userPaymentList" element={<UserOperationsPanel />} />
          <Route path="/userClientList" element={<UserPanel />} />
          <Route path="/administratorPanel" element={<AdministratorPanel />} />
          <Route path="/500" element={<FiverZeroZero />} />
          <Route path="*" element={<FourZeroFour />} />
        </Routes>
      </BrowserRouter>
      </Suspense>
    </SetupProvider>
  );
};

Router.defaultProps = {};

export default memo(Router);

import Backdrop from "components/Backdrop/Backdrop";
import React, { lazy, memo, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { privateAdminRoute, privateRoute } from "./Router.helpers";
import { RouterProps as Props } from "./Router.types";

// Root routes
const FiverZeroZero = lazy(() => import("pages/500/500.page"));
const FourZeroFour = lazy(() => import("pages/404/404.page"));
const SignInAdministrator = lazy(
  () => import("pages/signInAdministrator.page")
);
const AdministratorPanel = lazy(() => import("pages/AdministratorPanel.page"));
const AdminPaymentListPage = lazy(() => import("pages/AdminPaymentListPage"));
const Client = lazy(() => import("pages/Client.page"));
const SignInUser = lazy(() => import("pages/signInUser.page"));
const UserPanel = lazy(() => import("pages/userPanel.page"));
const Settings = lazy(() => import("pages/settings.page"));
const UserOperationsPanel = lazy(
  () => import("pages/userOperationalPanel.page")
);
const UserPaymentDetails = lazy(() => import("pages/userPaymentDetails.page"));

const Router: React.FC<Props> = props => {
  const noAuthRoutes = () => {
    return (
      <>
        <Route path="/signin" element={<SignInUser />} />
        <Route path="/signInAdministrator" element={<SignInAdministrator />} />
        <Route path="/500" element={<FiverZeroZero />} />
        <Route path="*" element={<FourZeroFour />} />
      </>
    );
  };

  const userRoutes = () => {
    return (
      <>
        <Route path="/" element={<Client />} />
        <Route
          path="/userPaymentDetails/:id"
          element={privateRoute(<UserPaymentDetails />)}
        />
        <Route
          path="/userPaymentList"
          element={privateRoute(<AdminPaymentListPage />)}
        />
      </>
    );
  };

  const adminRoutes = () => {
    return (
      <>
        <Route
          path="/adminPaymentList"
          element={privateAdminRoute(<UserOperationsPanel />)}
        />
        <Route
          path="/adminClientList"
          element={privateAdminRoute(<UserPanel />)}
        />
        <Route
          path="/administratorPanel"
          element={privateAdminRoute(<AdministratorPanel />)}
        />

        <Route path="/settings" element={privateAdminRoute(<Settings />)} />
      </>
    );
  };

  return (
    <Suspense fallback={<Backdrop isLoading={true} />}>
      <Routes>
        {userRoutes()}
        {noAuthRoutes()}
        {adminRoutes()}
      </Routes>
    </Suspense>
  );
};

Router.defaultProps = {};

export default memo(Router);

import Backdrop from "components/Backdrop/Backdrop";
import React, { lazy, memo, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

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
const UserOperationsPanel = lazy(
  () => import("pages/userOperationalPanel.page")
);
const UserPaymentDetails = lazy(() => import("pages/userPaymentDetails.page"));

const Router: React.FC<Props> = props => {
  return (
    <Suspense fallback={<Backdrop isLoading={true} />}>
      <Routes>
        <Route path="/" element={<Client />} />
        <Route path="/signin" element={<SignInUser />} />
        <Route path="/signInAdministrator" element={<SignInAdministrator />} />
        <Route path="/userPaymentList" element={<UserOperationsPanel />} />
        <Route path="/userClientList" element={<UserPanel />} />
        <Route path="/userPaymentDetails" element={<UserPaymentDetails />} />
        <Route path="/administratorPanel" element={<AdministratorPanel />} />
        <Route
          path="/administratorPaymentList"
          element={<AdminPaymentListPage />}
        />
        <Route path="/500" element={<FiverZeroZero />} />
        <Route path="*" element={<FourZeroFour />} />
      </Routes>
    </Suspense>
  );
};

Router.defaultProps = {};

export default memo(Router);

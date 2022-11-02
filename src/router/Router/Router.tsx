import SignInAdministratorVerify from "components/SignInAdministratorVerify/SignInAdministratorVerify";
import SignIn from "components/signIn/SignIn/SignIn";
import SetupProvider from "containers/SetupProvider/SetupProvider";
import React, { lazy, memo, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { privateRoute } from "./Router.helpers";
import { RouterProps as Props } from "./Router.types";

// Root routes
const FiverZeroZero = lazy(() => import("pages/500/500.page"));
const FourZeroFour = lazy(() => import("pages/404/404.page"));
const Home = lazy(() => import("pages/home.page"));
const SignInAdministrator = lazy(
  () => import("pages/signInAdministrator.page")
);

const Router: React.FC<Props> = props => {
  return (
    <SetupProvider>
      <Suspense fallback={null}>
        <Routes>
          <Route path="*" element={<FourZeroFour />} />
          <Route path="/500" element={<FiverZeroZero />} />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/signInAdministrator"
            element={<SignInAdministrator />}
          />
          <Route
            path="/signInAdministratorVerify"
            element={<SignInAdministratorVerify />}
          />
          <Route path="/" element={privateRoute(<Home />)} />
        </Routes>
      </Suspense>
    </SetupProvider>
  );
};

Router.defaultProps = {};

export default memo(Router);

import SetupProvider from "containers/SetupProvider/SetupProvider";
import React, { lazy, memo, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
          <Switch>
            <Route path="/" children={<Home />} />
            <Route path="/signin" children={<SignInUser />} />
            <Route
              path="/signInAdministrator"
              children={<SignInAdministrator />}
            />
            <Route path="/userPaymentList" children={<UserOperationsPanel />} />
            <Route path="/userClientList" children={<UserPanel />} />
            <Route
              path="/administratorPanel"
              children={<AdministratorPanel />}
            />
            <Route path="/500" children={<FiverZeroZero />} />
            <Route path="*" children={<FourZeroFour />} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </SetupProvider>
  );
};

Router.defaultProps = {};

export default memo(Router);

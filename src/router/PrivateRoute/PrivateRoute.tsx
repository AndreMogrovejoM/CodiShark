import CONSTANTS from "config/constants";
import useAuth from "contexts/auth/auth.hooks";
import React, { memo } from "react";
import { Navigate } from "react-router-dom";

import { PrivateRouteProps as Props } from "./PrivateRoute.types";

const { NO_AUTH_PATH } = CONSTANTS.ROUTES;

const PrivateRoute: React.FC<Props> = props => {
  const { children } = props;
  const { isAnonymous } = useAuth();

  if (!isAnonymous) return children;

  return <Navigate replace to={NO_AUTH_PATH} />;
};

PrivateRoute.defaultProps = {};

export default memo(PrivateRoute);

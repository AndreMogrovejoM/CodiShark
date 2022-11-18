import CONSTANTS from "config/constants";
import useAuth from "contexts/auth/auth.hooks";
import React, { memo } from "react";
import { Navigate } from "react-router-dom";

import { PrivateAdminRouteProps as Props } from "./PrivateAdminRoute.types";

const { NO_AUTH_PATH } = CONSTANTS.ROUTES;

const PrivateAdminRoute: React.FC<Props> = props => {
  const { children } = props;
  const { isAnonymous, user } = useAuth();
  const { rol } = user ?? {};

  if (!isAnonymous && rol === 10) return children;

  return <Navigate replace to={NO_AUTH_PATH} />;
};

PrivateAdminRoute.defaultProps = {};

export default memo(PrivateAdminRoute);

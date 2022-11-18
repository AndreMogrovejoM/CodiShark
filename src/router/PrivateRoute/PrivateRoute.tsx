import CONSTANTS from "config/constants";
import useAuth from "contexts/auth/auth.hooks";
import React, { memo } from "react";
import { useNavigate } from "utils/useNavigate";

import { PrivateRouteProps as Props } from "./PrivateRoute.types";

const { NO_AUTH_PATH } = CONSTANTS.ROUTES;

const PrivateRoute: React.FC<Props> = props => {
  const { children } = props;
  const { isAnonymous } = useAuth();
  const { replace } = useNavigate();

  if (!isAnonymous) return children;

  replace(NO_AUTH_PATH);
  return null;
};

PrivateRoute.defaultProps = {};

export default memo(PrivateRoute);

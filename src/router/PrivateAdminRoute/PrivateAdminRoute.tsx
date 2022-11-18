import CONSTANTS from "config/constants";
import useAuth from "contexts/auth/auth.hooks";
import React, { memo } from "react";
import { useNavigate } from "utils/useNavigate";

import { PrivateAdminRouteProps as Props } from "./PrivateAdminRoute.types";

const { NO_AUTH_PATH } = CONSTANTS.ROUTES;

const PrivateAdminRoute: React.FC<Props> = props => {
  const { children } = props;
  const { isAnonymous, user } = useAuth();
  const { replace } = useNavigate();
  const { rol } = user ?? {};

  if (!isAnonymous && rol === 10) return children;
  replace(NO_AUTH_PATH);
  return null;
};

PrivateAdminRoute.defaultProps = {};

export default memo(PrivateAdminRoute);

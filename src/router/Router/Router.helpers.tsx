// Router helper functions and data
import React, { ReactElement } from "react";
import PrivateAdminRoute from "router/PrivateAdminRoute/PrivateAdminRoute";
import PrivateRoute from "router/PrivateRoute/PrivateRoute";

export const privateRoute = (element: ReactElement): ReactElement => {
  return <PrivateRoute>{element}</PrivateRoute>;
};

export const privateAdminRoute = (element: ReactElement): ReactElement => {
  return <PrivateAdminRoute>{element}</PrivateAdminRoute>;
};

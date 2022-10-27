// Router helper functions and data
import React, { ReactElement } from "react";
import PrivateRoute from "router/PrivateRoute/PrivateRoute";

export const privateRoute = (element: ReactElement): ReactElement => {
  return <PrivateRoute>{element}</PrivateRoute>;
};

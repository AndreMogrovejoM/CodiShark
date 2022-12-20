import AdministratorPanelContainer from "containers/AdministratorPanel/AdministratorPanel.container";
import ClientContainerContainer from "containers/ClientContainer/Client.container";
import useAuth from "contexts/auth/auth.hooks";
import FourZeroFour from "pages/404/404.page";
import React from "react";

import { HomeContainerProps as Props } from "./Home.container.types";

const HomeContainer: React.FC<Props> = props => {
  const { user } = useAuth();
  const { rol } = user ?? {};
  if (rol === 10) return <AdministratorPanelContainer />;
  else if (rol === 1) return <ClientContainerContainer />;
  else return <FourZeroFour />;
};

HomeContainer.defaultProps = {};

export default HomeContainer;

import Home from "components/globals/Home/Home";
import LayoutContainer from "containers/Layout/Layout.container";
import React from "react";

import { HomeContainerProps as Props } from "./Home.container.types";

const HomeContainer: React.FC<Props> = props => {
  return (
    <LayoutContainer>
      <Home />
    </LayoutContainer>
  );
};

HomeContainer.defaultProps = {};

export default HomeContainer;

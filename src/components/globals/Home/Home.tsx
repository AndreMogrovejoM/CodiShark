import InfoCard from "components/InfoCard/InfoCard";
import React from "react";

import Styles from "./Home.styles";
import { HomeProps as Props } from "./Home.types";

const Home: React.FC<Props> = props => {
  return <Styles className="Home"></Styles>;
};

Home.defaultProps = {};

export default Home;

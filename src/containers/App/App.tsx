import dayjs from "dayjs";
import React from "react";

import Providers from "../Providers/Providers";
import { AppProps as Props } from "./App.types";
import "antd/dist/antd.compact.css";

dayjs.locale("es");

const App: React.FC<Props> = props => {
  return <Providers />;
};

App.defaultProps = {};

export default App;

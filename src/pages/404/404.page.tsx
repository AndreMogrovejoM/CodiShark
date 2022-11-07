import { ReactComponent as FourZeroFourSVG } from "assets/404.svg";
import React from "react";
import { useNavigate } from "react-router";

import { FourZeroFourProps as Props } from "./404.page.types";
import Styles from "./404.styles.page";

const FourZeroFour: React.FC<Props> = props => {
  const navigate = useNavigate();
  return (
    <Styles className="FourZeroFour">
      <header className="FourZeroFour__header" />
      <main className="FourZeroFour__main">
        <FourZeroFourSVG className="FourZeroFour__icon" />
        <button onClick={() => navigate("/signin")}>Regresar</button>
      </main>
      <footer className="FourZeroFour__footer" />
    </Styles>
  );
};

FourZeroFour.defaultProps = {};

export default FourZeroFour;

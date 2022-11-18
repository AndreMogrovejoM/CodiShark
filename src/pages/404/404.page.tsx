import { ReactComponent as FourZeroFourSVG } from "assets/404.svg";
import Button from "components/globals/Button/Button";
import React from "react";
import { useNavigate } from "utils/useNavigate";

import { FourZeroFourProps as Props } from "./404.page.types";
import Styles from "./404.styles.page";

const FourZeroFour: React.FC<Props> = props => {
  const { navigate } = useNavigate();
  return (
    <Styles className="FourZeroFour">
      <header className="FourZeroFour__header" />
      <main className="FourZeroFour__main">
        <FourZeroFourSVG className="FourZeroFour__icon" />
        <Button onClick={() => navigate("/signin")}>
          Ir a registro usuario
        </Button>
        <Button onClick={() => navigate("/signinAdministrator")}>
          Ir a registro admin
        </Button>
      </main>
      <footer className="FourZeroFour__footer" />
    </Styles>
  );
};

FourZeroFour.defaultProps = {};

export default FourZeroFour;

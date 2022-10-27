import { ReactComponent as FiveZeroZeroSVG } from "assets/500.svg";
import CONSTANTS from "config/constants";
import React from "react";
import { useNavigate } from "react-router-dom";

import { FiveZeroZeroProps as Props } from "./500.page.types";
import Styles from "./500.styles.page";

const { ENTRY_PATH } = CONSTANTS.ROUTES;

const FiveZeroZero: React.FC<Props> = props => {
  const navigate = useNavigate();
  const reload = () => {
    navigate(ENTRY_PATH);
    window.location.reload();
  };

  return (
    <Styles className="FiveZeroZero">
      <header className="FiveZeroZero__header" />
      <main className="FiveZeroZero__main">
        <div className="FiveZeroZero__wrapper">
          <FiveZeroZeroSVG className="FiveZeroZero__icon" />
          <button className="FiveZeroZero__cta" onClick={reload}>
            Recargar
          </button>
        </div>
      </main>
      <footer className="FiveZeroZero__footer" />
    </Styles>
  );
};

FiveZeroZero.defaultProps = {};

export default FiveZeroZero;

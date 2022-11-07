import InfoCard from "components/InfoCard/InfoCard";
import React from "react";

import Styles from "./Indicators.styles";
import { IndicatorsProps as Props } from "./Indicators.types";

const Indicators: React.FC<Props> = props => {
  const renderHeaderIndicators = (
    <>
      <h3 className="Indicators__title">Te mostramos algunos indicadores</h3>
      <div className="Indicators__spanContainer">
        <span className="Indicators__span">MES</span>
        <span className="Indicators__span">AÑO</span>
        <span className="Indicators__span">DIA</span>
      </div>
    </>
  );

  return (
    <Styles className={`Indicators`}>
      {renderHeaderIndicators}
      <div className="Indicators__cardsContainer">
        <InfoCard title="Cobros Realizados" value="S/. 37,850.00" />
        <InfoCard title="Ingresos al Sistema" value="2,350" />
        <InfoCard title="Solicitudes de contacto por llamada" value="114" />
        <InfoCard title="Pagos por transferencia" value="65" />
      </div>
    </Styles>
  );
};

Indicators.defaultProps = {};

export default Indicators;

import iconMasterCardInformation from "assets/images/iconMasterCardInformation.svg";
import iconVisaInformation from "assets/images/iconVisaInformation.svg";
import ImagePayInformation from "assets/images/imagePayInformation.svg";
import lineInformation from "assets/images/lineInformation.svg";
import Button from "components/globals/Button/Button";
import React from "react";

import Styles from "./InformationClient.styles";
import { InformationClientProps as Props } from "./InformationClient.types";

const InformationClient: React.FC<Props> = props => {
  return (
    <Styles className="InformationClient">
      <div className="InformationClient__section1">
        <h2 className="InformationClient__title">Pago con tarjeta</h2>
        <h2 className="InformationClient__subtitle">
          Aceptamos los siguientes métodos de pago:
        </h2>
        <img
          className="InformationClient__image1"
          src={ImagePayInformation}
          alt="ImagePayInformation"
        />
        <h2 className="InformationClient__subtitle2">
          También puedes pagar con tus tarjetas de débito
        </h2>
        <div className="InformationClient__imageSection">
          <img
            className="InformationClient__image2"
            src={iconVisaInformation}
            alt="iconVisaInformation"
          />
          <img
            className="InformationClient__image3"
            src={iconMasterCardInformation}
            alt="iconMasterCardInformation"
          />
        </div>
        <Button className="InformationClient__button" variant="contained">
          PAGAR
        </Button>
      </div>
      <div className="InformationClient__section2">
        <h2 className="InformationClient__title2">Transferencia bancaria</h2>
        <h2 className="InformationClient__subtitle3">BANCO</h2>
        <h2 className="InformationClient__subtitle4">Cuenta corriente soles</h2>
        <p className="InformationClient__cuenta1">191 5264 8452 1254</p>
        <h2 className="InformationClient__subtitle4">Cuenta corriente soles</h2>
        <p className="InformationClient__cuenta1">191 55044 00541 14460</p>
        <p className="InformationClient__parrafo">
          Después de realizar el depósito, envíanos el voucher al número 900 415
          521 oal correo atencion@b12.pe, indicando el número de operación.
        </p>
        <h2 className="InformationClient__subtitle6">
          Genera tu número de operación para realizar el pago
        </h2>
        <Button className="InformationClient__button2" variant="contained">
          GENERAR NÚMERO DE OPERACIÓN
        </Button>
      </div>
      <img
        className="InformationClient__line"
        src={lineInformation}
        alt="lineInformation"
      />
    </Styles>
  );
};

InformationClient.defaultProps = {};

export default InformationClient;

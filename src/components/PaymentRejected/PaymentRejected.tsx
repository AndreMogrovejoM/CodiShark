import lineSucces from "assets/images/lineSucces.svg";
import rejectedImage from "assets/images/rejectedImage.svg";
import ClientPayment from "components/ClientPayment/ClientPayment";
import Button from "components/globals/Button/Button";
import useI18n from "i18n/i18n.hooks";
import React from "react";

import Styles from "./PaymentRejected.styles";
import { PaymentRejectedProps as Props } from "./PaymentRejected.types";

const PaymentRejected: React.FC<Props> = props => {
  const t = useI18n().signIn.PaymentRejected;
  return (
    <Styles className="PaymentRejected">
      <div className="PaymentRejected__container">
        <img
          className="PaymentRejected__line"
          src={lineSucces}
          alt="lineSucces"
        />
        <div className="PaymentRejected__section">
          <img
            className="PaymentRejected__image"
            src={rejectedImage}
            alt="rejectedImage"
          />
          <ClientPayment
            title={"Pago Rechazado"}
            subtitle={"No se pudo procesar el pago"}
          />
          <Button className="PaymentRejected__button" variant="contained">
            <h3 className="PaymentRejected__text">{t.button}</h3>
          </Button>
        </div>
        <div className="PaymentRejected__section2">
          <h2 className="PaymentRejected__title">{t.title}</h2>
          <div className="PaymentRejected__parrafos">
            <div className="PaymentRejected__p1div">
              <p className="PaymentRejected__p1">{t.parrafo1}</p>
              <span className="PaymentRejected__span1">S/. 1.750.00</span>
            </div>
            <div className="PaymentRejected__p2div">
              <p className="PaymentRejected__p2">
                {t.parrafo2}{" "}
                <span className="PaymentRejected__span2">05/09/2022</span>
              </p>
            </div>
            <div className="PaymentRejected__p3div">
              <p className="PaymentRejected__p3">
                {t.parrafo3}{" "}
                <span className="PaymentRejected__span3">17:45 horas</span>
              </p>
            </div>
            <div className="PaymentRejected__p4div">
              <p className="PaymentRejected__p4">
                {t.parrafo4}{" "}
                <span className="PaymentRejected__span4">S/. 1.750.00</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  );
};

PaymentRejected.defaultProps = {};

export default PaymentRejected;

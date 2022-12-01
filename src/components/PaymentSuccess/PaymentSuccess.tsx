import lineSucces from "assets/images/lineSucces.svg";
import succesImage from "assets/images/succesImage.svg";
import ClientPayment from "components/ClientPayment/ClientPayment";
import useI18n from "i18n/i18n.hooks";
import React from "react";

import Styles from "./PaymentSuccess.styles";
import { PaymentSuccessProps as Props } from "./PaymentSuccess.types";

const PaymentSuccess: React.FC<Props> = props => {
  const t = useI18n().signIn.PaymentRejected;

  return (
    <Styles className="PaymentSuccess">
      <div className="PaymentSuccess__container">
        <img
          className="PaymentSuccess__line"
          src={lineSucces}
          alt="lineSucces"
        />
        <div className="PaymentSuccess__section">
          <img
            className="PaymentSuccess__image"
            src={succesImage}
            alt="succesImage"
          />
          <ClientPayment
            title={"Pago Exitoso"}
            subtitle={"Se ha aprobado su pago con éxito"}
          />
        </div>
        <div className="PaymentSuccess__section2">
          <h2 className="PaymentSuccess__title">{t.title}</h2>
          <div className="PaymentSuccess__parrafos">
            <div className="PaymentSuccess__p1div">
              <p className="PaymentSuccess__p1">{t.parrafo1}</p>
              <span className="PaymentSuccess__span1">S/. 1.750.00</span>
            </div>
            <div className="PaymentSuccess__p2div">
              <p className="PaymentSuccess__p2">
                {t.parrafo2}
                <span className="PaymentSuccess__span2">05/09/2022</span>
              </p>
            </div>
            <div className="PaymentSuccess__p3div">
              <p className="PaymentSuccess__p3">
                {t.parrafo3}{" "}
                <span className="PaymentSuccess__span3">17:45 horas</span>
              </p>
            </div>
            <div className="PaymentSuccess__p4div">
              <p className="PaymentSuccess__p4">
                {t.parrafo4}{" "}
                <span className="PaymentSuccess__span4">S/. 1.750.00</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  );
};

PaymentSuccess.defaultProps = {};

export default PaymentSuccess;

import ClientPayment from "components/ClientPayment/ClientPayment";
import React from "react";

import Styles from "./PaymentSucces.styles";
import { PaymentSuccesProps as Props } from "./PaymentSucces.types";

import lineSucces from "../../assets/images/lineSucces.svg";
import succesImage from "../../assets/images/succesImage.svg";

const PaymentSucces: React.FC<Props> = props => {
  return (
    <Styles className="PaymentSucces">
      <div className="PaymentSucces__container">
        <img
          className="PaymentSucces__line"
          src={lineSucces}
          alt="lineSucces"
        />
        <div className="PaymentSucces__section">
          <img
            className="PaymentSucces__image"
            src={succesImage}
            alt="succesImage"
          />
          <ClientPayment
            title={"Pago Exitoso"}
            subtitle={"Se ha aprobado su pago con éxito"}
          />
        </div>
        <div className="PaymentSucces__section2">
          <h2 className="PaymentSucces__title">Detalles del pago</h2>
          <div className="PaymentSucces__parrafos">
            <div className="PaymentSucces__p1div">
              <p className="PaymentSucces__p1">Monto Pagado:</p>
              <span className="PaymentSucces__span1">S/. 1.750.00</span>
            </div>
            <div className="PaymentSucces__p2div">
              <p className="PaymentSucces__p2">
                Fecha: <span className="PaymentSucces__span2">05/09/2022</span>
              </p>
            </div>
            <div className="PaymentSucces__p3div">
              <p className="PaymentSucces__p3">
                Hora: <span className="PaymentSucces__span3">17:45 horas</span>
              </p>
            </div>
            <div className="PaymentSucces__p4div">
              <p className="PaymentSucces__p4">
                Monto Pagado:{" "}
                <span className="PaymentSucces__span4">S/. 1.750.00</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  );
};

PaymentSucces.defaultProps = {};

export default PaymentSucces;

import lineSuccess from "assets/images/lineSucces.svg";
import successImage from "assets/images/successImage.svg";
import useI18n from "i18n/i18n.hooks";
import React from "react";

import Styles from "./PaymentSuccess.styles";
import { PaymentSuccessProps as Props } from "./PaymentSuccess.types";

const PaymentSuccess: React.FC<Props> = props => {
  const t = useI18n().signIn.PaymentRejected;

  return (
    <Styles className="PaymentSuccess">
      <div className="PaymentSuccess__container">
        <div className="PaymentSuccess__section">
          <img
            className="PaymentSuccess__image"
            src={successImage}
            alt="successImage"
          />
          <h2 className="PaymentSuccess__title">{t.success}</h2>
          <h2 className="PaymentSuccess__subtitle">{t.approved}</h2>
        </div>
        <img src={lineSuccess} alt="lineSuccess" />
        <div className="PaymentSuccess__section2">
          <h2 className="PaymentSuccess__title2">{t.title}</h2>
          <div className="PaymentSuccess__paragraph">
            <div className="PaymentSuccess__p1div">
              <p className="PaymentSuccess__p1">{t.paragraph1}</p>
              <span className="PaymentSuccess__span1">S/. 1.750.00</span>
            </div>
            <div className="PaymentSuccess__p2div">
              <p className="PaymentSuccess__p2">
                {t.paragraph2}{" "}
                <span className="PaymentSuccess__span2">05/09/2022</span>
              </p>
            </div>
            <div className="PaymentSuccess__p3div">
              <p className="PaymentSuccess__p3">
                {t.paragraph3}
                <span className="PaymentSuccess__span3">17:45 horas</span>
              </p>
            </div>
            <div className="PaymentSuccess__p4div">
              <p className="PaymentSuccess__p4">
                {t.paragraph4}
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

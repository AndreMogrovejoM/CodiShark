import lineSuccess from "assets/images/lineSucces.svg";
import rejectedImage from "assets/images/rejectedImage.svg";
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
        <div className="PaymentRejected__section">
          <img
            className="PaymentRejected__image"
            src={rejectedImage}
            alt="rejectedImage"
          />
          <h2 className="PaymentRejected__title">{t.rejected}</h2>
          <h2 className="PaymentRejected__subtitle">{t.disapproved}</h2>

          <Button className="PaymentRejected__button" variant="contained">
            <h3 className="PaymentRejected__text">{t.button}</h3>
          </Button>
        </div>
        <img
          className="PaymentRejected__line"
          src={lineSuccess}
          alt="lineSuccess"
        />
        <div className="PaymentRejected__section2">
          <h2 className="PaymentRejected__title2">{t.title}</h2>
          <div className="PaymentRejected__paragraph">
            <div className="PaymentRejected__package">
              <p className="PaymentRejected__p1">
                {t.paragraph1}{" "}
                <span className="PaymentRejected__span1">S/. 1.750.00</span>
              </p>
            </div>
            <div className="PaymentRejected__p2div">
              <p className="PaymentRejected__p2">
                {t.paragraph2}{" "}
                <span className="PaymentRejected__span2">05/09/2022</span>
              </p>
            </div>
            <div className="PaymentRejected__p3div">
              <p className="PaymentRejected__p3">
                {t.paragraph3}{" "}
                <span className="PaymentRejected__span3">17:45 horas</span>
              </p>
            </div>
            <div className="PaymentRejected__package">
              <p className="PaymentRejected__p1">
                {t.paragraph4}{" "}
                <span className="PaymentRejected__span1">S/. 1.750.00</span>
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

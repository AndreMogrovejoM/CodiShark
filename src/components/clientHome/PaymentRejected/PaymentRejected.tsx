// import lineSuccess from "assets/images/lineSucces.svg";
import rejectedImage from "assets/images/rejectedImage.svg";
import Button from "components/globals/Button/Button";
import useGlobals from "contexts/globals/globals.hooks";
import useI18n from "i18n/i18n.hooks";
import React from "react";

import Styles from "./PaymentRejected.styles";
import { PaymentRejectedProps as Props } from "./PaymentRejected.types";

const PaymentRejected: React.FC<Props> = props => {
  const t = useI18n().signIn.PaymentRejected;
  const { setPaymentStatus } = useGlobals();

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

          <Button
            className="PaymentRejected__button"
            variant="contained"
            onClick={() => setPaymentStatus("NONE")}
          >
            <h3 className="PaymentRejected__text">{t.button}</h3>
          </Button>
        </div>
      </div>
    </Styles>
  );
};

PaymentRejected.defaultProps = {};

export default PaymentRejected;

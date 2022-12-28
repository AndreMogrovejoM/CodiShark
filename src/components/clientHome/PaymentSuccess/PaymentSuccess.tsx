import successImage from "assets/images/successImage.svg";
import useGlobals from "contexts/globals/globals.hooks";
import dayjs from "dayjs";
import useI18n from "i18n/i18n.hooks";
import React from "react";
import { numberWithCommas } from "utils/common.utils";

import Styles from "./PaymentSuccess.styles";
import { PaymentSuccessProps as Props } from "./PaymentSuccess.types";

const PaymentSuccess: React.FC<Props> = props => {
  const t = useI18n().signIn.PaymentRejected;
  const { operationUserDebt } = useGlobals();
  const { amount_paid, operation_date, operation_time } =
    operationUserDebt ?? {};
  const date = dayjs(operation_date).format("DD/MM/YYYY");

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
        <div className="PaymentSuccess__divider" />
        <div className="PaymentSuccess__section2">
          <h2 className="PaymentSuccess__title2">{t.title}</h2>
          <div className="PaymentSuccess__paragraph">
            <div className="PaymentSuccess__package">
              <p className="PaymentSuccess__p1">
                {t.paragraph4}
                <span className="PaymentSuccess__span1">
                  {`S./ ${numberWithCommas(amount_paid ?? 0)}` ?? "-"}
                </span>
              </p>
            </div>
            <div className="PaymentSuccess__p2div">
              <p className="PaymentSuccess__p2">
                {t.paragraph2}{" "}
                <span className="PaymentSuccess__span2">{date}</span>
              </p>
            </div>
            <div className="PaymentSuccess__p3div">
              <p className="PaymentSuccess__p3">
                {t.paragraph3}
                <span className="PaymentSuccess__span3">
                  {operation_time ?? "-"}
                </span>
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

import IconUserPhoto from "assets/images/iconUserPhoto.svg";
import useI18n from "i18n/i18n.hooks";
import React from "react";
import { useParams } from "react-router-dom";

import ProofPayment from "../ProofPayment/ProofPayment";
import Styles from "./PaymentDetails.styles";
import { PaymentDetailsProps as Props } from "./PaymentDetails.types";

const PaymentDetails: React.FC<Props> = props => {
  const t = useI18n().pages.AdminPaymentDetails.card;
  const { id } = useParams();

  const renderCard = () => (
    <div className="PaymentDetails__component--card">
      <>
        <div className="PaymentDetails__container--card-image">
          <img
            src={IconUserPhoto}
            alt={t.alt}
            className="PaymentDetails__container--image"
          />
        </div>
        <div className="PaymentDetails__container--card-text">
          <p className="PaymentDetails__text--title">
            {t.title.toLocaleUpperCase()}
          </p>
          <p className="PaymentDetails__text--subtitle">{t.subtitle}</p>
        </div>
      </>
    </div>
  );

  return (
    <Styles className={`PaymentDetails`}>
      <div className="PaymentDetails__container--components">
        {renderCard()}
        <ProofPayment operationId={parseInt(id ?? "")} />
      </div>
    </Styles>
  );
};

PaymentDetails.defaultProps = {};

export default PaymentDetails;

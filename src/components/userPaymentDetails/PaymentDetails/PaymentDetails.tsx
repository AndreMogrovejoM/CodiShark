import IconUserPhoto from "assets/images/iconUserPhoto.svg";
import SkeletonComponent from "components/globals/SkeletonComponent/SkeletonComponent";
import useI18n from "i18n/i18n.hooks";
import React from "react";

import ProofPayment from "../ProofPayment/ProofPayment";
import Styles from "./PaymentDetails.styles";
import { PaymentDetailsProps as Props } from "./PaymentDetails.types";

const PaymentDetails: React.FC<Props> = props => {
  const t = useI18n().pages.AdminPaymentDetails.card;
  /* TODO: Pending */
  const isLoading = false;

  const renderCard = () => (
    <div className="PaymentDetails__component--card">
      {isLoading ? (
        <SkeletonComponent variant="rounded" height={320} width={200} />
      ) : (
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
      )}
    </div>
  );

  return (
    <Styles className={`PaymentDetails`}>
      <div className="PaymentDetails__container--components">
        {renderCard()}
        <ProofPayment isLoading={isLoading} />
      </div>
    </Styles>
  );
};

PaymentDetails.defaultProps = {};

export default PaymentDetails;

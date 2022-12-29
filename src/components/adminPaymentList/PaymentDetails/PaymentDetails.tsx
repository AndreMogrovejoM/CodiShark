import DetailsPay from "assets/images/detailsPay.svg";
import Button from "components/globals/Button/Button";
import dayjs from "dayjs";
import useI18n from "i18n/i18n.hooks";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useValidatePayment } from "services/administrator/administrator.service.hooks";
import { useInvalidePayment } from "services/administrator/administrator.service.hooks";
import { numberWithCommas } from "utils/common.utils";
import { disabledButton } from "utils/validations.utils";

import Styles from "./PaymentDetails.styles";
import { PaymentDetailsProps as Props } from "./PaymentDetails.types";

const PaymentDetails: React.FC<Props> = props => {
  const { data } = props;
  const { user, payment_status, id } = data ?? {};
  const showValidate = payment_status === "Pendiente";

  const navigate = useNavigate();
  const t = useI18n().components.OperationalDetails;

  const {
    mutateAsync: validateMutation,
    reset: validateReset,
    isLoading: isValidating
  } = useValidatePayment();
  const {
    mutateAsync: invalideMutation,
    reset: invalideReset,
    isLoading
  } = useInvalidePayment();

  const renderDefault = () => (
    <>
      <div className="PaymentDetails__component--details">
        <div className="PaymentDetails__component--details-content">
          <img
            src={DetailsPay}
            alt={t.alt}
            className="PaymentDetails__container--image"
          />
          <p className="PaymentDetails__text--paragraph">
            {t.paragraphDetails}
          </p>
        </div>
      </div>
    </>
  );

  const styleClass = () =>
    `AdminPaymentListView__component--button  ${
      disabledButton(data?.payment_status)
        ? "AdminPaymentListView__component--button-disabled"
        : ""
    }`;

  const renderActions = () => (
    <div className="PaymentDetails__renderActions">
      <Button
        variant="contained"
        className={styleClass()}
        onClick={() => {
          if (data && "id" in data) {
            navigate(`/userPaymentDetails/${data.id}`);
          }
        }}
      >
        {t.button}
      </Button>
      {showValidate && (
        <Button
          variant="contained"
          className="AdminPaymentListView__component--button"
          onClick={async () => {
            validateMutation(id);
            validateReset();
          }}
          disabled={isValidating || isLoading}
        >
          {t.validate}
        </Button>
      )}
      {showValidate && (
        <Button
          variant="contained"
          className="AdminPaymentListView__component--button"
          onClick={async () => {
            invalideMutation(id);
            invalideReset();
          }}
          disabled={isValidating || isLoading}
        >
          {t.invalide}
        </Button>
      )}
    </div>
  );

  const renderContent = () => (
    <div className="PaymentDetails__component--details PaymentDetails__component--details-component PaymentDetails__component--details-operation">
      <p className="PaymentDetails__text--paragraph PaymentDetails__text--paragraph-blue">
        {t.customerName}
        <span className="PaymentDetails__text--paragraph PaymentDetails__text--paragraph-gray">
          {`${user?.first_name ?? "-"} ${user?.last_name ?? "-"} ${
            user?.mother_last_name ?? "-"
          }`}
        </span>
      </p>

      <p className="PaymentDetails__text--paragraph PaymentDetails__text--paragraph-blue">
        {t.amountPaid}
        <span className="PaymentDetails__text--paragraph PaymentDetails__text--paragraph-gray">
          {` S/ ${numberWithCommas(data?.amount_paid ?? 0)}`}
        </span>
      </p>

      <p className="PaymentDetails__text--paragraph PaymentDetails__text--paragraph-blue">
        {t.date}
        <span className="PaymentDetails__text--paragraph PaymentDetails__text--paragraph-gray">
          {dayjs(data?.operation_date).format("DD/MM/YYYY")}
        </span>
      </p>

      <p className="PaymentDetails__text--paragraph PaymentDetails__text--paragraph-blue">
        {t.hour}
        <span className="PaymentDetails__text--paragraph PaymentDetails__text--paragraph-gray">
          {data?.operation_time ?? "-"}
        </span>
      </p>

      <p className="PaymentDetails__text--paragraph PaymentDetails__text--paragraph-blue">
        {t.paymentMedium}
        <span className="PaymentDetails__text--paragraph PaymentDetails__text--paragraph-gray">
          {data?.payment_method ?? "-"}
        </span>
      </p>

      <p className="PaymentDetails__text--paragraph PaymentDetails__text--paragraph-blue">
        {t.paymentStatus}
        <span className="PaymentDetails__text--paragraph PaymentDetails__text--paragraph-gray">
          {data?.payment_status ?? "-"}
        </span>
      </p>

      {renderActions()}
    </div>
  );
  return (
    <Styles className={`PaymentDetails`}>
      <h2 className="PaymentDetails__text--subtitle PaymentDetails__container--separate">
        {t.titleDetails}
      </h2>
      {data ? renderContent() : renderDefault()}
    </Styles>
  );
};

PaymentDetails.defaultProps = {};

export default PaymentDetails;

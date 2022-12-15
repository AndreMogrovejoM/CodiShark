import DetailsPay from "assets/images/detailsPay.svg";
import Button from "components/globals/Button/Button";
import useGlobals from "contexts/globals/globals.hooks";
import dayjs from "dayjs";
import useI18n from "i18n/i18n.hooks";
import React from "react";
import { useNavigate } from "react-router-dom";
import { disabledButton } from "utils/validations.utils";

import Styles from "./PaymentDetails.styles";
import { PaymentDetailsProps as Props } from "./PaymentDetails.types";

const PaymentDetails: React.FC<Props> = props => {
  const { data } = props;
  const { user } = data ?? {};

  const navigate = useNavigate();
  const { setOperationUserDebt } = useGlobals();

  const t = useI18n().components.OperationalDetails;

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

  // TODO: PENDING
  const renderActions = () => (
    <Button
      variant="contained"
      className={styleClass()}
      onClick={() => {
        if (data && "debt_id" in data) {
          // @ts-ignore
          navigate(`/userPaymentDetails/${data.debt_id}`);
          setOperationUserDebt(data);
        }
      }}
    >
      {t.button}
    </Button>
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
          {` S/ ${data?.amount_paid.toFixed(2)}`}
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

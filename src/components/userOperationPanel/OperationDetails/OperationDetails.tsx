import DetailsPay from "assets/images/detailsPay.svg";
import Button from "components/globals/Button/Button";
import dayjs from "dayjs";
import useI18n from "i18n/i18n.hooks";
import React from "react";
import { disabledButton } from "utils/validations.utils";

import Styles from "./OperationDetails.styles";
import { OperationDetailsProps as Props } from "./OperationDetails.types";

const OperationDetails: React.FC<Props> = props => {
  const { data } = props;
  const { user } = data ?? {};

  const t = useI18n().components.OperationalDetails;

  const renderDefault = () => (
    <>
      <div className="OperationDetails__component--details">
        <div className="OperationDetails__component--details-content">
          <img
            src={DetailsPay}
            alt={t.alt}
            className="OperationDetails__container--image"
          />
          <p className="OperationDetails__text--paragraph">
            {t.paragraphDetails}
          </p>
        </div>
      </div>
    </>
  );

  const styleClass = () =>
    `OperationListView__component--button  ${
      disabledButton(data?.payment_status)
        ? "OperationListView__component--button-disabled"
        : ""
    }`;

  // TODO: PENDING
  const renderActions = () => (
    <Button
      variant="contained"
      className={styleClass()}
      onClick={() => console.log("Ver Comprobante")}
    >
      {t.button}
    </Button>
  );

  const renderContent = () => (
    <div className="OperationDetails__component--details OperationDetails__component--details-component OperationDetails__component--details-operation">
      <p className="OperationDetails__text--paragraph OperationDetails__text--paragraph-blue">
        {t.customerName}
        <span className="OperationDetails__text--paragraph OperationDetails__text--paragraph-gray">
          {`${user?.first_name} ${user?.last_name} ${user?.mother_last_name}`}
        </span>
      </p>

      <p className="OperationDetails__text--paragraph OperationDetails__text--paragraph-blue">
        {t.amountPaid}
        <span className="OperationDetails__text--paragraph OperationDetails__text--paragraph-gray">
          {` S/ ${data?.amount_paid.toFixed(2)}`}
        </span>
      </p>

      <p className="OperationDetails__text--paragraph OperationDetails__text--paragraph-blue">
        {t.date}
        <span className="OperationDetails__text--paragraph OperationDetails__text--paragraph-gray">
          {dayjs(data?.operation_date).format("DD/MM/YYYY")}
        </span>
      </p>

      <p className="OperationDetails__text--paragraph OperationDetails__text--paragraph-blue">
        {t.hour}
        <span className="OperationDetails__text--paragraph OperationDetails__text--paragraph-gray">
          {data?.operation_time}
        </span>
      </p>

      <p className="OperationDetails__text--paragraph OperationDetails__text--paragraph-blue">
        {t.paymentMedium}
        <span className="OperationDetails__text--paragraph OperationDetails__text--paragraph-gray">
          {data?.payment_method}
        </span>
      </p>

      <p className="OperationDetails__text--paragraph OperationDetails__text--paragraph-blue">
        {t.paymentStatus}
        <span className="OperationDetails__text--paragraph OperationDetails__text--paragraph-gray">
          {data?.payment_status}
        </span>
      </p>

      {renderActions()}
    </div>
  );
  return (
    <Styles className={`OperationDetails`}>
      <h2 className="OperationDetails__text--subtitle OperationDetails__container--separate">
        {t.titleDetails}
      </h2>
      {data ? renderContent() : renderDefault()}
    </Styles>
  );
};

OperationDetails.defaultProps = {};

export default OperationDetails;

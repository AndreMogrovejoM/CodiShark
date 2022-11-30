import DetailsPay from "assets/images/detailsPay.svg";
import Button from "components/globals/Button/Button";
import useI18n from "i18n/i18n.hooks";
import React from "react";

import Styles from "./OperationDetails.styles";
import { OperationDetailsProps as Props } from "./OperationDetails.types";

const OperationDetails: React.FC<Props> = props => {
  const { id } = props;

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

  // TODO: PENDING
  const renderActions = () => (
    <Button
      variant="contained"
      className="OperationListView__component--button"
      onClick={() => console.log("Ver Comprobante")}
    >
      {t.button}
    </Button>
  );

  const renderContent = () => (
    <div className="OperationDetails__component--details OperationDetails__component--details-component OperationDetails__component--details-operation">
      <p className="OperationDetails__text--paragraph OperationDetails__text--paragraph-blue">
        {t.customerName}
        {/* TODO: Pending */}
        <span className="OperationDetails__text--paragraph OperationDetails__text--paragraph-gray">
          Armando Rodriguez Guerra
        </span>
      </p>

      <p className="OperationDetails__text--paragraph OperationDetails__text--paragraph-blue">
        {t.amountPaid}
        {/* TODO: Pending */}
        <span className="OperationDetails__text--paragraph OperationDetails__text--paragraph-gray">
          S/ 3600.00
        </span>
      </p>

      <p className="OperationDetails__text--paragraph OperationDetails__text--paragraph-blue">
        {t.date}
        {/* TODO: Pending */}
        <span className="OperationDetails__text--paragraph OperationDetails__text--paragraph-gray">
          05/09/2022
        </span>
      </p>

      <p className="OperationDetails__text--paragraph OperationDetails__text--paragraph-blue">
        {t.hour}
        {/* TODO: Pending */}
        <span className="OperationDetails__text--paragraph OperationDetails__text--paragraph-gray">
          8:00 pm
        </span>
      </p>

      <p className="OperationDetails__text--paragraph OperationDetails__text--paragraph-blue">
        {t.paymentMedium}
        {/* TODO: Pending */}
        <span className="OperationDetails__text--paragraph OperationDetails__text--paragraph-gray">
          Tarjeta de Crédito - Pasarela Izipay
        </span>
      </p>

      <p className="OperationDetails__text--paragraph OperationDetails__text--paragraph-blue">
        {t.paymentStatus}
        {/* TODO: Pending */}
        <span className="OperationDetails__text--paragraph OperationDetails__text--paragraph-gray">
          Pagado
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
      {id ? renderContent() : renderDefault()}
    </Styles>
  );
};

OperationDetails.defaultProps = {};

export default OperationDetails;

import Button from "components/globals/Button/Button";
import useI18n from "i18n/i18n.hooks";
import React from "react";

import Styles from "./ProofPayment.styles";
import { ProofPaymentProps as Props } from "./ProofPayment.types";

// TODO: Pending response from backend.
const ProofPayment: React.FC<Props> = props => {
  const t = useI18n().pages.AdminPaymentDetails.proof;

  const renderDetails = () => (
    <div className="ProofPayment__separator--paragraph">
      <div className="ProofPayment__text--paragraph ProofPayment__text--paragraph-bold">
        <p>{t.name}</p>
        <p>{t.bankEntity}</p>
        <p>{t.debtType}</p>
        <p>{t.currencyType}</p>
        <p>{t.paymentMethod}</p>
        <p>{t.date}</p>
        <p>{t.hour}</p>
      </div>

      {/* TODO: Pending response from backend. */}
      <div className="ProofPayment__text--paragraph">
        <p>Dei Molina</p>
        <p>Banco Interbank </p>
        <p>Préstamo personal</p>
        <p>Sol peruano</p>
        <p>Tarjeta de débito</p>
        <p>27-03-2022</p>
        <p>14:36</p>
      </div>
    </div>
  );

  const renderAmount = () => (
    <div className="ProofPayment__separator--sm">
      <div className="ProofPayment__component--code ">
        <p className="ProofPayment__text--paragraph">
          {t.paymentcode.toLocaleUpperCase()}
        </p>
        <p className="ProofPayment__text--paragraph-superBold">P-25148</p>
      </div>
      <div className="ProofPayment__separator--paragraph">
        <div className="ProofPayment__text--paragraph ProofPayment__text--paragraph-bold ProofPayment__text--paragraph-blue">
          <p>{t.originalAmount}</p>
          <p>{t.discount}</p>
          <p>{t.subtotal}</p>
          <p>{t.amountPaid}</p>
        </div>

        {/* TODO: Pending response from backend. */}
        <div className="ProofPayment__text--paragraph">
          <p>S/ 5400.00</p>
          <p>S/ 2400.00</p>
          <p>S/ 2600.00</p>
          <p>S/ 2600.00</p>
        </div>
      </div>
    </div>
  );

  const renderActions = () => {
    const styleClass = () =>
      "ProofPayment__component--button ProofPayment__text--paragraph ProofPayment__text--paragraph-bold";

    return (
      <>
        <Button
          variant="contained"
          className={`${styleClass()} ProofPayment__component--button-green`}
          // TODO: Pending
          onClick={() => console.log("pdf")}
        >
          {t.buttons.pdf}
        </Button>
        <Button
          variant="contained"
          className={styleClass()}
          // TODO: Pending

          onClick={() => console.log("excel")}
        >
          {t.buttons.email}
        </Button>
        <Button
          variant="contained"
          className={`${styleClass()} ProofPayment__component--button-blue`}
          // TODO: Pending
          onClick={() => console.log("back")}
        >
          {t.buttons.back}
        </Button>
      </>
    );
  };

  return (
    <Styles className={`ProofPayment`}>
      <div className="ProofPayment__component--card">
        <h2 className="ProofPayment__text--title ProofPayment__separator--title">
          {t.title.toLocaleUpperCase()}
        </h2>
        <div className="ProofPayment__separator--details">
          {renderDetails()}
          {renderAmount()}
        </div>
        <div className="ProofPayment__separator--actions">
          {renderActions()}
        </div>
      </div>
    </Styles>
  );
};

ProofPayment.defaultProps = {};

export default ProofPayment;

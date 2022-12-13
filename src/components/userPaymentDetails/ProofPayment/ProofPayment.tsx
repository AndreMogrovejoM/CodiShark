import Button from "components/globals/Button/Button";
import SkeletonComponent from "components/globals/SkeletonComponent/SkeletonComponent";
import useAuth from "contexts/auth/auth.hooks";
import useI18n from "i18n/i18n.hooks";
import FileDownload from "js-file-download";
import React from "react";
import { useNavigate } from "react-router-dom";
import { exportOperationPdf } from "services/users/users.service";

import Styles from "./ProofPayment.styles";
import { ProofPaymentProps as Props } from "./ProofPayment.types";

const ProofPayment: React.FC<Props> = props => {
  const { userDebt, isLoading } = props;
  const t = useI18n().pages.AdminPaymentDetails.proof;
  //TODO: Change auth user by userId from debt
  const { user } = useAuth();
  const { first_name, last_name } = user ?? {};
  const navigate = useNavigate();

  //TODO: Check fields with nicolas
  const { id, amount_dscto_cancellation } = userDebt ?? {};
  const { capital_debt, currency, banking_entity, pct_dscto_cancellation } =
    userDebt ?? {};

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
        <p>{`${first_name} ${last_name}`}</p>
        <p>{banking_entity ?? "-"}</p>
        <p>Préstamo personal</p>
        <p>{currency ?? "-"}</p>
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
          <p>{`S./ ${capital_debt ?? 0}`}</p>
          <p>{`S./ ${pct_dscto_cancellation ?? 0}`}</p>
          <p>{`S./ ${
            (capital_debt ?? 0) - (amount_dscto_cancellation ?? 0)
          }`}</p>
          <p>{`S./ ${amount_dscto_cancellation ?? 0}`}</p>
        </div>
      </div>
    </div>
  );

  const handlePDF = async () => {
    try {
      const response = await exportOperationPdf(id);
      FileDownload(response, "report.pdf");
    } catch (error) {
      console.log("Error at trying to print pdf");
    }
  };

  const renderActions = () => {
    const styleClass = () =>
      "ProofPayment__component--button ProofPayment__text--paragraph ProofPayment__text--paragraph-bold";

    return (
      <>
        <Button
          variant="contained"
          className={`${styleClass()} ProofPayment__component--button-green`}
          onClick={handlePDF}
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
          onClick={() => navigate("/")}
        >
          {t.buttons.back}
        </Button>
      </>
    );
  };

  const renderLoading = () =>
    isLoading ? (
      <SkeletonComponent variant="rounded" height={"400px"} />
    ) : (
      <>
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
      </>
    );

  return (
    <Styles className={`ProofPayment`}>
      <div className="ProofPayment__component--card">{renderLoading()}</div>
    </Styles>
  );
};

ProofPayment.defaultProps = {};

export default ProofPayment;

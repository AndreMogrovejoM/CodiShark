import Button from "components/globals/Button/Button";
import useGlobals from "contexts/globals/globals.hooks";
import dayjs from "dayjs";
import useI18n from "i18n/i18n.hooks";
import FileDownload from "js-file-download";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { sendOperationEmail } from "services/users/users.service";
import { exportOperationPdf } from "services/users/users.service";
import { useFetchUserDebt } from "services/users/users.service.hooks";
import Swal from "sweetalert2";
import { numberWithCommas } from "utils/common.utils";

import Styles from "./ProofPayment.styles";
import { ProofPaymentProps as Props } from "./ProofPayment.types";

const ProofPayment: React.FC<Props> = props => {
  const { operationId } = props;
  const t = useI18n().pages.AdminPaymentDetails.proof;
  const { setIsLoading } = useGlobals();
  const { data: userDebt, isLoading } = useFetchUserDebt(operationId);
  const navigate = useNavigate();

  const { debt, operation_number, amount_paid, id, user } = userDebt ?? {};
  const { payment_method, operation_date, operation_time } = userDebt ?? {};
  const { amount_dscto_cancellation, product, amount_cancellation } =
    debt ?? {};
  const { capital_debt, currency, banking_entity } = debt ?? {};
  const { first_name, last_name, mother_last_name } = user ?? {};

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading, setIsLoading]);

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
        <p>{`${first_name ?? ""} ${last_name ?? ""} ${
          mother_last_name ?? ""
        }`}</p>
        <p>{banking_entity ?? "-"}</p>
        <p>{product ?? "-"}</p>
        <p>{currency ?? "-"}</p>
        <p>{payment_method ?? "-"}</p>
        <p>{dayjs(operation_date).format("YYYY-MM-DD") ?? "-"}</p>
        <p>{operation_time ?? "-"}</p>
      </div>
    </div>
  );

  const renderAmount = () => (
    <div className="ProofPayment__separator--sm">
      <div className="ProofPayment__component--code ">
        <p className="ProofPayment__text--paragraph">
          {t.paymentcode.toLocaleUpperCase()}
        </p>
        <p className="ProofPayment__text--paragraph-superBold">
          {`P-${operation_number ?? "XXXXXX"}`}
        </p>
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
          <p>{`S/. ${numberWithCommas(capital_debt ?? 0)}`}</p>
          <p>{`S/. ${numberWithCommas(amount_dscto_cancellation ?? 0)}`}</p>
          <p>{`S/. ${numberWithCommas(amount_cancellation ?? 0)}`}</p>
          <p>{`S/. ${numberWithCommas(amount_paid ?? 0)}`}</p>
        </div>
      </div>
    </div>
  );

  const handlePDF = async () => {
    try {
      setIsLoading(true);
      const response = await exportOperationPdf(id);
      // TODO: Diccionarios
      Swal.fire(
        "Exito",
        "El documento se descargará en breves momentos.",
        "success"
      );
      FileDownload(response, "report.pdf");
    } catch (error) {
      console.log("Error at trying to print pdf");
    } finally {
      setIsLoading(false);
    }
  };

  const handleMail = async () => {
    try {
      setIsLoading(true);
      await sendOperationEmail(id);
      // TODO: Diccionarios
      Swal.fire("Exito", "El correo fue enviado con éxito", "success");
    } catch (error) {
      console.log("Error at trying to print pdf");
    } finally {
      setIsLoading(false);
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
          disabled={isLoading}
        >
          {t.buttons.pdf}
        </Button>
        <Button
          variant="contained"
          className={styleClass()}
          onClick={handleMail}
          disabled={isLoading}
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

  const renderLoading = () => (
    <>
      <h2 className="ProofPayment__text--title ProofPayment__separator--title">
        {t.title.toLocaleUpperCase()}
      </h2>
      <div className="ProofPayment__separator--details">
        {renderDetails()}
        {renderAmount()}
      </div>
      <div className="ProofPayment__separator--actions">{renderActions()}</div>
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

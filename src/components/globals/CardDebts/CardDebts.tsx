import { CheckCircleOutline } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import IziPayForm from "components/IziPayForm/IziPayForm";
import OperationNumberModal from "components/OperationNumberModal/OperationNumberModal";
import DebtExpandableRowsComponent from "components/clientHome/DebtExpandableRowsComponent/DebtExpandableRowsComponent";
import PaymentRejected from "components/clientHome/PaymentRejected/PaymentRejected";
import PaymentSuccess from "components/clientHome/PaymentSuccess/PaymentSuccess";
import useGlobals from "contexts/globals/globals.hooks";
import useI18n from "i18n/i18n.hooks";
import React, { useState, useEffect } from "react";
import { useGenerateOperationNumber } from "services/users/users.service.hooks";
import { numberWithCommas } from "utils/common.utils";

import Button from "../Button/Button";
import Styles from "./CardDebts.styles";
import { CardDebtsProps as Props } from "./CardDebts.types";

const CardDebts: React.FC<Props> = props => {
  const t = useI18n().components.CardDebts;
  const { data } = props;
  const [openOperationModal, setOpenOperationModal] = useState(false);
  const [openIziPayModal, setOpenIziPayModal] = useState(false);
  const [operationNumber, setOperationNumber] = useState<string>();

  const { paymentStatus, currentDebtId, setIsLoading, setPaymentStatus } =
    useGlobals();
  const { mutateAsync, reset, isLoading } = useGenerateOperationNumber();
  const { id, amount_cancellation } = data ?? {};

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading, setIsLoading]);

  const handleOpenIziPay = () => {
    setPaymentStatus("NONE");
    setOpenIziPayModal(!openIziPayModal);
  };

  const handleClick = async () => {
    setPaymentStatus("NONE");
    try {
      if (amount_cancellation && id) {
        await mutateAsync({
          amount: amount_cancellation,
          debtId: id
        })
          .then(response => {
            const { data } = response ?? {};
            const { operation_number } = data ?? {};
            setOperationNumber(operation_number);
          })
          .catch();
        setOpenOperationModal(!openOperationModal);
        reset();
        setOpen(true);
      }
    } catch (error) {
      setPaymentStatus("ERROR");
      setOpen(true);
      console.log(error);
    }
  };

  const handleClickOpen = () => setOpen(!open);

  const stylesClass = () =>
    "CardDebts__component--button CardDebts__text--button";

  const renderButtonExpand = () => (
    <Button
      variant="contained"
      className={`${stylesClass()}`}
      onClick={handleClickOpen}
    >
      <>
        {t.buttonExpand}
        {open ? <RemoveIcon fontSize="small" /> : <AddIcon fontSize="small" />}
      </>
    </Button>
  );

  const renderExpanded = () =>
    open && (
      <>
        {(paymentStatus === "NONE" || currentDebtId.current !== id) && (
          <DebtExpandableRowsComponent data={data} />
        )}
        {paymentStatus === "SUCCESS" && currentDebtId.current === id && (
          <PaymentSuccess />
        )}
        {/* TODO: Pending status 'ERROR' */}
        {paymentStatus === "ERROR" && currentDebtId.current === id && (
          <PaymentRejected />
        )}
      </>
    );

  const renderActions = () => (
    <div className="CardDebts__container--buttons">
      {(paymentStatus === "NONE" ||
        paymentStatus === "ERROR" ||
        currentDebtId.current !== id) && (
        <>
          <Button
            variant="contained"
            className={`${stylesClass()} CardDebts__component--button-blue  CardDebts__text--button-pay`}
            disabled={isLoading}
            onClick={handleOpenIziPay}
          >
            <>
              {t.button}
              <AddIcon className="CardDebts__component--icon" />
            </>
          </Button>

          <Button
            variant="contained"
            className={`${stylesClass()} CardDebts__component--button-blue  CardDebts__text--button-pay`}
            onClick={handleClick}
            disabled={isLoading}
          >
            <>
              {t.button2}

              <AddIcon className="CardDebts__component--icon" />
            </>
          </Button>
        </>
      )}

      {paymentStatus === "SUCCESS" && currentDebtId.current === id && (
        <Button
          variant="contained"
          className={`${stylesClass()} CardDebts__component--button-blue  CardDebts__text--button-pay`}
        >
          <>
            Pagado
            <CheckCircleOutline className="CardDebts__component--icon" />
          </>
        </Button>
      )}
    </div>
  );

  return (
    <Styles className={`CardDebts`}>
      <div className="CardDebts__component">
        <div className="CardDebts__container--components">
          <p className="CardDebts__text--title CardDebts__text--blue">
            {data?.banking_entity ?? "-"}
          </p>
          {renderButtonExpand()}
        </div>
        <div className="CardDebts__container--prices">
          <div className="CardDebts__container--price">
            <p className="CardDebts__text--subtitle">{t.amount}</p>
            <p className="CardDebts__text--price CardDebts__text--gray">
              {`S/. ${data?.capital_debt ?? "00.00"}`}
            </p>
          </div>
          <div className="CardDebts__component--divider" />
          <div className="CardDebts__container--price">
            <p className="CardDebts__text--subtitle">{t.discount}</p>
            <div className="CardDebts__container--offer">
              <h3 className="CardDebts__text--price CardDebts__text--skyBlue">{`S/. ${numberWithCommas(
                data?.amount_cancellation ?? 0
              )}`}</h3>
              <div>
                <span className="CardDebts__component--discount">{` - ${
                  Math.round(data?.pct_dscto_cancellation * 100) ?? ""
                } %`}</span>
              </div>
            </div>
          </div>
        </div>
        {renderExpanded()}
      </div>

      {renderActions()}

      <IziPayForm
        open={openIziPayModal}
        setOpen={setOpenIziPayModal}
        operationNumber={operationNumber}
        userDebt={data}
      />
      <OperationNumberModal
        open={openOperationModal}
        setOpen={setOpenOperationModal}
        operationNumber={operationNumber}
        userDebt={data}
      />
    </Styles>
  );
};

CardDebts.defaultProps = {};

export default CardDebts;

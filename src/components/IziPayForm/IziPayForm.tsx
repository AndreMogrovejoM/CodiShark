import KRGlue from "@lyracom/embedded-form-glue";
import { Box, Modal } from "@mui/material";
import americanExpress from "assets/images/americanExpress.svg";
import dinersClub from "assets/images/dinersClub.svg";
import logoKonecta from "assets/images/logoKonecta.svg";
import masterCard from "assets/images/masterCard.svg";
import visa from "assets/images/visa.svg";
import CONSTANTS from "config/constants";
import useAuth from "contexts/auth/auth.hooks";
import useGlobals from "contexts/globals/globals.hooks";
import React, { useCallback, useEffect } from "react";
import { useValidateIziPayPayment } from "services/iziPay/iziPay.service.hooks";
import { useGenerateOperationNumber } from "services/users/users.service.hooks";

import Styles, { style } from "./IziPayForm.styles";
import { IziPayFormProps as Props } from "./IziPayForm.types";

const { API } = CONSTANTS;
const { IZI_PAY_PUBLIC_KEY, REACT_APP_IZI_PAY_URL } = API;

const IziPayForm: React.FC<Props> = props => {
  const { open, setOpen, userDebt } = props;
  const { id: debtId, amount_cancellation } = userDebt ?? {};
  const { mutateAsync, isLoading } = useGenerateOperationNumber();
  const { mutateAsync: validateMutation } = useValidateIziPayPayment();
  const {
    setIsLoading,
    setPaymentStatus,
    currentDebtId,
    setOperationUserDebt
  } = useGlobals();
  const { user } = useAuth();

  const handleInitIziPay = useCallback(async () => {
    let formTokenValue: string | undefined = undefined;
    let operationNumberValue: string | undefined = undefined;
    if (!user || !debtId || !amount_cancellation) return;
    currentDebtId.current = debtId;

    try {
      await mutateAsync({
        amount: amount_cancellation,
        debtId,
        type: 2
      })
        .then(response => {
          const { izipay, data } = response ?? {};
          const { operation_number } = data ?? {};
          const { answer } = izipay ?? {};
          const { formToken } = answer ?? {};
          setOperationUserDebt(data);
          operationNumberValue = operation_number;
          formTokenValue = formToken;
          return KRGlue.loadLibrary(REACT_APP_IZI_PAY_URL, IZI_PAY_PUBLIC_KEY);
        })
        .then(({ KR }) =>
          KR.setFormConfig({
            formToken: formTokenValue,
            "kr-language": "es-PE"
          })
        )
        .then(({ KR }) =>
          KR.onSubmit(paymentData => {
            const { clientAnswer, hash } = paymentData ?? {};
            if (!operationNumberValue)
              throw new Error("Operation Number Error");
            validateMutation({
              debtId,
              operationNumber: operationNumberValue,
              amount: amount_cancellation,
              rawClientAnswer: JSON.stringify(clientAnswer),
              hash
            });
            setOpen(false);
            setPaymentStatus("SUCCESS");
            return false;
          })
        )
        .then(({ KR }) => KR.addForm("#myPaymentForm"))
        .then(({ KR, result }) => {
          KR.showForm(result.formId);
          setIsLoading(false);
        })
        .catch(error => {
          throw new Error(error);
        });
    } catch (error: any) {
      console.log(error.response);
      setOpen(false);
      setIsLoading(false);
      setPaymentStatus("ERROR");
    }
  }, [
    amount_cancellation,
    currentDebtId,
    debtId,
    mutateAsync,
    setIsLoading,
    setOpen,
    setOperationUserDebt,
    setPaymentStatus,
    user,
    validateMutation
  ]);

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading, setIsLoading]);

  useEffect(() => {
    if (open) handleInitIziPay();
  }, [handleInitIziPay, open]);

  return (
    <Modal
      open={open && !isLoading}
      onClose={() => setOpen(!open)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Styles className="IziPayForm">
          <img
            src={logoKonecta}
            alt="logoKonecta"
            className="SignInAdministratorVerify__logo"
            width={154}
          />
          <div className="form">
            <div className="container">
              <div id="myPaymentForm"></div>
            </div>
          </div>
          <div className="IziPayForm__images">
            <img className="IziPayForm__image" src={visa} alt="visa" />
            <img
              className="IziPayForm__image"
              src={americanExpress}
              alt="americanExpress"
            />
            <img
              className="IziPayForm__image"
              src={dinersClub}
              alt="dinersClub"
            />
            <img
              className="IziPayForm__image"
              src={masterCard}
              alt="masterCard"
            />
          </div>
        </Styles>
      </Box>
    </Modal>
  );
};

IziPayForm.defaultProps = {};

export default IziPayForm;

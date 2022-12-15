import iconMasterCardInformation from "assets/images/iconMasterCardInformation.svg";
import iconVisaInformation from "assets/images/iconVisaInformation.svg";
import ImagePayInformation from "assets/images/imagePayInformation.svg";
import lineInformation from "assets/images/lineInformation.svg";
import IziPayForm from "components/IziPayForm/IziPayForm";
import OperationNumberModal from "components/OperationNumberModal/OperationNumberModal";
import Button from "components/globals/Button/Button";
import CONSTANTS from "config/constants";
import useGlobals from "contexts/globals/globals.hooks";
import useI18n from "i18n/i18n.hooks";
import React, { useEffect, useState } from "react";
import { useGenerateOperationNumber } from "services/users/users.service.hooks";

import Styles from "./InformationClient.styles";
import { InformationClientProps as Props } from "./InformationClient.types";

const { CCI_ACCOUNT_NUMBER, ACCOUNT_NUMBER } = CONSTANTS;

const InformationClient: React.FC<Props> = props => {
  const t = useI18n().signIn.InformationClient;
  const { userDebt } = props;
  const [openOperationModal, setOpenOperationModal] = useState(false);
  const [openIziPayModal, setOpenIziPayModal] = useState(false);
  const [operationNumber, setOperationNumber] = useState<string>();

  const { id, amount_cancellation } = userDebt ?? {};
  const { mutateAsync, reset, isLoading } = useGenerateOperationNumber();
  const { setIsLoading, setPaymentStatus } = useGlobals();

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
      }
    } catch (error) {
      setPaymentStatus("ERROR");
      console.log(error);
    }
  };

  return (
    <Styles className="InformationClient">
      <div className="InformationClient__section1">
        <h2 className="InformationClient__title">{t.title}</h2>
        <h2 className="InformationClient__subtitle">{t.subtitle}</h2>
        <img
          className="InformationClient__image1"
          src={ImagePayInformation}
          alt="ImagePayInformation"
        />
        <h2 className="InformationClient__subtitle2">{t.subtitle2}</h2>
        <div className="InformationClient__imageSection">
          <img
            className="InformationClient__image2"
            src={iconVisaInformation}
            alt="iconVisaInformation"
          />
          <img
            className="InformationClient__image3"
            src={iconMasterCardInformation}
            alt="iconMasterCardInformation"
          />
        </div>
        <Button
          className="InformationClient__button"
          variant="contained"
          disabled={isLoading}
          onClick={handleOpenIziPay}
        >
          <h3 className="InformationClient__text1">
            {t.button.toLocaleUpperCase()}
          </h3>
        </Button>
      </div>
      <img
        className="InformationClient__line"
        src={lineInformation}
        alt="lineInformation"
      />
      <div className="InformationClient__section2">
        <h2 className="InformationClient__title2">{t.title2}</h2>
        <div className="InformationClient__container--content">
          <h2 className="InformationClient__subtitle3">{t.subtitle3}</h2>
          <h2 className="InformationClient__subtitle4">{t.subtitle4}</h2>
          <p className="InformationClient__cuenta1">{ACCOUNT_NUMBER}</p>
          <h2 className="InformationClient__subtitle4">{t.subtitle5}</h2>
          <p className="InformationClient__cuenta1">{CCI_ACCOUNT_NUMBER}</p>
          <p className="InformationClient__paragraph">{t.paragraph}</p>
          <h2 className="InformationClient__subtitle6">{t.subtitle6}</h2>
        </div>
        <div className="InformationClient__container--button">
          <Button
            className="InformationClient__button2"
            variant="contained"
            onClick={handleClick}
            disabled={isLoading}
          >
            <h3 className="InformationClient__text2">
              {t.button2.toLocaleUpperCase()}
            </h3>
          </Button>
        </div>
      </div>
      <IziPayForm
        open={openIziPayModal}
        setOpen={setOpenIziPayModal}
        operationNumber={operationNumber}
        userDebt={userDebt}
      />
      <OperationNumberModal
        open={openOperationModal}
        setOpen={setOpenOperationModal}
        operationNumber={operationNumber}
        userDebt={userDebt}
      />
    </Styles>
  );
};

InformationClient.defaultProps = {};

export default InformationClient;

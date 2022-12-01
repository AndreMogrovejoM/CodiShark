import iconMasterCardInformation from "assets/images/iconMasterCardInformation.svg";
import iconVisaInformation from "assets/images/iconVisaInformation.svg";
import ImagePayInformation from "assets/images/imagePayInformation.svg";
import Button from "components/globals/Button/Button";
import useI18n from "i18n/i18n.hooks";
import React from "react";

import Styles from "./InformationClient.styles";
import { InformationClientProps as Props } from "./InformationClient.types";

const InformationClient: React.FC<Props> = props => {
  const t = useI18n().signIn.InformationClient;

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
        <div className="InformationClient__p">
          <p>Paga con todas las billeteras</p>
          <p>electrónicas como Yape, Plim, etc</p>
        </div>
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
        <Button className="InformationClient__button" variant="contained">
          <h3 className="InformationClient__text1">{t.button}</h3>
        </Button>
      </div>
      <div className="InformationClient__section2">
        <h2 className="InformationClient__title2">{t.title2}</h2>
        <div className="InformationClient__container--content">
          <h2 className="InformationClient__subtitle3">{t.subtitle3}</h2>
          <h2 className="InformationClient__subtitle4">{t.subtitle4}</h2>
          <p className="InformationClient__cuenta1">191 5264 8452 1254</p>
          <h2 className="InformationClient__subtitle4">{t.subtitle5}</h2>
          <p className="InformationClient__cuenta1">191 55044 00541 14460</p>
          <p className="InformationClient__parrafo">{t.parrafo}</p>
          <h2 className="InformationClient__subtitle6">{t.subtitle6}</h2>
        </div>
        <div className="InformationClient__container--button">
          <Button className="InformationClient__button2" variant="contained">
            <h3 className="InformationClient__text2">{t.button2}</h3>
          </Button>
        </div>
      </div>
    </Styles>
  );
};

InformationClient.defaultProps = {};

export default InformationClient;

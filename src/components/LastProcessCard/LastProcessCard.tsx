import useI18n from "i18n/i18n.hooks";
import React from "react";

import Styles from "./LastProcessCard.styles";
import { LastProcessCardProps as Props } from "./LastProcessCard.types";

import iconArrowCard from "../../assets/images/iconArrowCard.svg";
import iconCard from "../../assets/images/iconCard.svg";

const LastProcessCard: React.FC<Props> = props => {
  const t = useI18n().signIn.AdministratorPanel;
  const { title } = props;

  const renderUser = () => {
    return (
      <div className="LastProcessCard__sectionContainer">
        <img className="LastProcessCard__icon" src={iconCard} alt="iconCard" />
        <h2 className="LastProcessCard__name">Jorge Lopez Pinto</h2>
      </div>
    );
  };

  const renderDebt = () => {
    return (
      <div className="LastProcessCard__sectionContainer">
        <h3 className="LastProcessCard__debt">S/. 565.00</h3>
        <img
          className="LastProcessCard__iconDebt"
          src={iconArrowCard}
          alt="iconArrowCard"
        />
      </div>
    );
  };

  return (
    <Styles className="LastProcessCard">
      <h1 className="LastProcessCard__title">{title}</h1>
      <div className="LastProcessCard__container">
        <div>
          <h3 className="LastProcessCard__subtitle">{t.name}</h3>
          <div className="LastProcessCard__names">
            {renderUser()}
            {renderUser()}
            {renderUser()}
            {renderUser()}
          </div>
        </div>
        <div className="LastProcessCard__debs">
          <h3 className="LastProcessCard__subtitle">{t.debt}</h3>
          {renderDebt()}
          {renderDebt()}
          {renderDebt()}
          {renderDebt()}
        </div>
      </div>
      <h3 className="LastProcessCard__footerSubtitle" onClick={() => {}}>
        {t.footerTitle}
      </h3>
    </Styles>
  );
};

LastProcessCard.defaultProps = {};

export default LastProcessCard;

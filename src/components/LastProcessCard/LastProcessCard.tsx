import iconArrowCard from "assets/images/iconArrowCard.svg";
import iconCard from "assets/images/iconCard.svg";
import useI18n from "i18n/i18n.hooks";
import React from "react";
import { useFetchAdministratorOperations } from "services/administrator/administrator.service.hooks";

import Styles from "./LastProcessCard.styles";
import { LastProcessCardProps as Props } from "./LastProcessCard.types";

const LastProcessCard: React.FC<Props> = props => {
  const { title, status } = props;
  const t = useI18n().signIn.AdministratorPanel;
  const { data } = useFetchAdministratorOperations(status);
  const { data: operationsList } = data ?? {};

  const renderUser = (name: string) => {
    return (
      <div className="LastProcessCard__sectionContainer">
        <img className="LastProcessCard__icon" src={iconCard} alt="iconCard" />
        <h2 className="LastProcessCard__name">{name?.slice(0, 24)}</h2>
      </div>
    );
  };

  const renderDebt = (debt?: number) => {
    return (
      <div className="LastProcessCard__sectionContainer">
        <h3 className="LastProcessCard__debt">{`S/. ${debt ?? 0}`}</h3>
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
            {operationsList?.map((operation, idx) => {
              const { user } = operation ?? {};
              const { first_name, last_name, mother_last_name } = user ?? {};
              return renderUser(
                `${first_name} ${last_name} ${mother_last_name}`
              );
            })}
          </div>
        </div>
        <div className="LastProcessCard__debs">
          <h3 className="LastProcessCard__subtitle">{t.debt}</h3>
          {operationsList?.map((operation, idx) => {
            const { amount_paid } = operation ?? {};
            return renderDebt(amount_paid);
          })}
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

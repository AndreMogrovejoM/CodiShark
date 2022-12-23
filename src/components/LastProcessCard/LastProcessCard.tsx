import iconArrowCard from "assets/images/iconArrowCard.svg";
import iconCard from "assets/images/iconCard.svg";
import useI18n from "i18n/i18n.hooks";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useFetchAdministratorOperations } from "services/administrator/administrator.service.hooks";

import Styles from "./LastProcessCard.styles";
import { LastProcessCardProps as Props } from "./LastProcessCard.types";

const LastProcessCard: React.FC<Props> = props => {
  const { title, status } = props;
  const t = useI18n().signIn.AdministratorPanel;
  const { data } = useFetchAdministratorOperations(status);
  const { data: operationsList } = data ?? {};

  const navigate = useNavigate();

  const renderUser = (name: string, idx?: number) => {
    return (
      <div className="LastProcessCard__sectionContainer" key={idx}>
        <img className="LastProcessCard__icon" src={iconCard} alt="iconCard" />
        <h2 className="LastProcessCard__name">{name?.slice(0, 24)}</h2>
      </div>
    );
  };

  const renderDebt = (debt?: number, idx?: number) => {
    return (
      <div className="LastProcessCard__sectionContainer" key={idx}>
        <h3 className="LastProcessCard__debt">{`S/. ${debt ?? 0}`}</h3>
        <img
          className="LastProcessCard__icon"
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
                `${first_name} ${last_name} ${mother_last_name}`,
                idx
              );
            })}
          </div>
        </div>
        <div className="LastProcessCard__debs">
          <h3 className="LastProcessCard__subtitle">{t.debt}</h3>
          {operationsList?.map((operation, idx) => {
            const { amount_paid } = operation ?? {};
            return renderDebt(amount_paid, idx);
          })}
        </div>
      </div>
      <h3
        className="LastProcessCard__footerSubtitle"
        onClick={() => {
          navigate(`/adminPaymentList?status=${status}`);
        }}
      >
        {t.footerTitle}
      </h3>
    </Styles>
  );
};

LastProcessCard.defaultProps = {};

export default LastProcessCard;

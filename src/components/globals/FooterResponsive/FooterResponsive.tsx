import contactIcon from "assets/images/contactIcon.svg";
import homeIcon from "assets/images/homeIcon.svg";
import payIcon from "assets/images/payIcon.svg";
import CONSTANTS from "config/constants";
import useAuth from "contexts/auth/auth.hooks";
import useI18n from "i18n/i18n.hooks";
import React from "react";
import { useNavigate } from "react-router-dom";
import { userRol } from "utils/validations.utils";

import Styles from "./FooterResponsive.styles";
import { FooterResponsiveProps as Props } from "./FooterResponsive.types";

const { ADMIN_ENTRY_PATH, ENTRY_PATH } = CONSTANTS.ROUTES;
const { USER_PAYMENT_LIST, ADMIN_PAYMENT_LIST } = CONSTANTS.ROUTES;

const FooterResponsive: React.FC<Props> = props => {
  const { setOpen } = props;
  const t = useI18n().components.FooterResponsive;
  const navigate = useNavigate();
  const { user } = useAuth();
  const { rol } = user ?? {};

  const handleClick = (url: string) => {
    navigate(url);
  };

  return (
    <Styles className={`FooterResponsive`}>
      <div className="FooterResponsive__container">
        <div
          className="FooterResponsive__container--icon FooterResponsive__text"
          onClick={() =>
            handleClick(
              rol === userRol ? USER_PAYMENT_LIST : ADMIN_PAYMENT_LIST
            )
          }
        >
          <img
            src={payIcon}
            alt={t.myPayments}
            className="FooterResponsive__component--icon"
          />
          <span>{t.myPayments}</span>
        </div>
        <div
          className="FooterResponsive__container--icon  FooterResponsive__container--home"
          onClick={() =>
            handleClick(rol === userRol ? ENTRY_PATH : ADMIN_ENTRY_PATH)
          }
        >
          <img
            src={homeIcon}
            alt={t.homeIcon}
            className="FooterResponsive__component--icon-middle"
          />
        </div>
        <div
          className="FooterResponsive__container--icon  FooterResponsive__text"
          onClick={() => setOpen(true)}
        >
          <img
            src={contactIcon}
            alt={t.contactIcon}
            className="FooterResponsive__component--icon"
          />
          <span>{t.contact}</span>
        </div>
      </div>
    </Styles>
  );
};

FooterResponsive.defaultProps = {};

export default FooterResponsive;

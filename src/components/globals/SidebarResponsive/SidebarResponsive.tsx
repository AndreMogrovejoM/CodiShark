import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LogoutIcon from "@mui/icons-material/Logout";
import logoKonecta from "assets/images/logoKonectaSidebar.svg";
import CONSTANTS from "config/constants";
import useAuth from "contexts/auth/auth.hooks";
import useGlobals from "contexts/globals/globals.hooks";
import useI18n from "i18n/i18n.hooks";
import React from "react";
import { useNavigate } from "react-router-dom";
import { setCookie } from "react-use-cookie";
import { useLogout } from "services/auth/auth.service.hooks";
import { useLocalStorage } from "utils/useLocalStorage";

import Styles from "./SidebarResponsive.styles";
import { LinkComponentProps } from "./SidebarResponsive.types";
import { SidebarResponsiveProps as Props } from "./SidebarResponsive.types";

const { NO_AUTH_PATH, USER_PAYMENT_LIST, ADMIN_ENTRY_PATH } = CONSTANTS.ROUTES;
const { ADMIN_CLIENT_LIST, ADMIN_PAYMENT_LIST } = CONSTANTS.ROUTES;
const { USER_PAYMENT_DETAILS, ENTRY_PATH, SETTINGS } = CONSTANTS.ROUTES;

const LinkComponent = (props: LinkComponentProps) => {
  const navigate = useNavigate();
  const { selectedIndex } = useGlobals();
  const { idx, text, url } = props;

  const handleClick = () => {
    navigate(url);
    selectedIndex.current = idx;
  };

  const stylesClass = () =>
    `SidebarResponsive__component--menu-item ${
      selectedIndex.current === idx ? "SidebarResponsive__active" : ""
    }`;

  return (
    <p className={stylesClass()} onClick={handleClick}>
      <ChevronRightIcon
        fontSize="large"
        className="SidebarResponsive__container--icon"
      />
      {text}
    </p>
  );
};

const SidebarResponsive: React.FC<Props> = props => {
  const t = useI18n().global.sideBar;
  const navigate = useNavigate();
  const { setSignInStep, setUser, user, isAnonymous } = useAuth();
  const { mutateAsync, reset } = useLogout();
  const [, setLocalUser] = useLocalStorage("user");
  const { rol } = user ?? {};

  const handleLogout = async () => {
    try {
      mutateAsync();
      reset();
      setSignInStep(0);
      setLocalUser("");
      setUser(undefined);
      setCookie("token", "");
      navigate(NO_AUTH_PATH);
      document.location.reload();
    } catch (error) {
      console.warn(error);
    }
  };

  const renderLogout = () => (
    <p
      className="SidebarResponsive__component--menu-item"
      onClick={handleLogout}
    >
      <LogoutIcon className="SidebarResponsive__container--icon-exit" />
      {t.logout}
    </p>
  );

  const renderUserRoutes = () => {
    if (isAnonymous) return null;

    return (
      <>
        <LinkComponent idx={10} text={t.start} url={ENTRY_PATH} />
        <LinkComponent idx={11} text={t.myPayments} url={USER_PAYMENT_LIST} />
        <LinkComponent
          idx={12}
          text={t.paymentDetails}
          url={USER_PAYMENT_DETAILS}
        />
      </>
    );
  };

  const renderAdminRoutes = () => {
    if (rol !== 10) return null;

    return (
      <>
        <LinkComponent idx={20} text={t.startAdmin} url={ADMIN_ENTRY_PATH} />
        <LinkComponent idx={21} text={t.myPayments} url={ADMIN_PAYMENT_LIST} />
        <LinkComponent idx={22} text={t.myClients} url={ADMIN_CLIENT_LIST} />
        <LinkComponent idx={23} text={t.setting} url={SETTINGS} />
      </>
    );
  };

  return (
    <Styles className={`SidebarResponsive`}>
      <div className="SidebarResponsive__container--menu">
        <input id="menu__toggle" type="checkbox" />
        <label
          className="SidebarResponsive__component--hamburger-button"
          htmlFor="menu__toggle"
        >
          <span />
        </label>
        <div className="SidebarResponsive__component--menu-box">
          <div className="SidebarResponsive__container--image">
            <img
              src={logoKonecta}
              alt="logo Konecta"
              width={180}
              className="SidebarResponsive__component--image"
            />
          </div>

          <div className="SidebarResponsive__container--components">
            {renderUserRoutes()}
            {renderAdminRoutes()}
            {renderLogout()}
          </div>
        </div>
      </div>
    </Styles>
  );
};

SidebarResponsive.defaultProps = {};

export default SidebarResponsive;

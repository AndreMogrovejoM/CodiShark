import americanExpress from "assets/images/americanExpress.svg";
import dinersClub from "assets/images/dinersClub.svg";
import masterCard from "assets/images/masterCard.svg";
import visa from "assets/images/visa.svg";
import Backdrop from "components/Backdrop/Backdrop";
import Sidebar from "components/globals/Sidebar/Sidebar";
import SidebarResponsive from "components/globals/SidebarResponsive/SidebarResponsive";
import useGlobals from "contexts/globals/globals.hooks";
import useI18n from "i18n/i18n.hooks";
import React from "react";

import Styles from "./Layout.container.styles";
import { LayoutContainerProps as Props } from "./Layout.container.types";

const LayoutContainer: React.FC<Props> = props => {
  const { children } = props;
  const { isLoading } = useGlobals();

  const t = useI18n().global;

  return (
    <Styles className="LayoutContainer">
      <div className="LayoutContainer__container">
        <Sidebar />
        <SidebarResponsive />
        <main className="LayoutContainer__children">
          {children}
          <div className="LayoutContainer__footer">{t.copyright}</div>
          <div className="LayoutContainer__footer-images">
            <img src={americanExpress} alt="americanExpress" />
            <img src={dinersClub} alt="dinersClub" />
            <img src={masterCard} alt="masterCard" />
            <img src={visa} alt="visa" />
          </div>
        </main>
        <Backdrop isLoading={isLoading} />
      </div>
    </Styles>
  );
};

LayoutContainer.defaultProps = {};

export default LayoutContainer;

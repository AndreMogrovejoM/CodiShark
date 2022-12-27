import americanExpress from "assets/images/americanExpress.svg";
import dinersClub from "assets/images/dinersClub.svg";
import masterCard from "assets/images/masterCard.svg";
import visa from "assets/images/visa.svg";
import Backdrop from "components/Backdrop/Backdrop";
import FooterResponsive from "components/globals/FooterResponsive/FooterResponsive";
import Sidebar from "components/globals/Sidebar/Sidebar";
import SidebarResponsive from "components/globals/SidebarResponsive/SidebarResponsive";
import useGlobals from "contexts/globals/globals.hooks";
import useI18n from "i18n/i18n.hooks";
import React from "react";

import Styles from "./Layout.container.styles";
import { LayoutContainerProps as Props } from "./Layout.container.types";

/* TODO: Link URL */
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
          <div className="LayoutContainer__children--container">
            {children}
            <div className="LayoutContainer__footer">{t.copyright}</div>
          </div>
        </main>

        <Backdrop isLoading={isLoading} />
      </div>
      <FooterResponsive />
    </Styles>
  );
};

LayoutContainer.defaultProps = {};

export default LayoutContainer;

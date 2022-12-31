import { Email, Home, LocalPhone } from "@mui/icons-material";
import { Box, Modal } from "@mui/material";
import Backdrop from "components/Backdrop/Backdrop";
import FooterResponsive from "components/globals/FooterResponsive/FooterResponsive";
import Sidebar from "components/globals/Sidebar/Sidebar";
import SidebarResponsive from "components/globals/SidebarResponsive/SidebarResponsive";
import useGlobals from "contexts/globals/globals.hooks";
import useI18n from "i18n/i18n.hooks";
import React, { useState } from "react";

import Styles, { ModalStyled } from "./Layout.container.styles";
import { LayoutContainerProps as Props } from "./Layout.container.types";
import { ModalProps } from "./Layout.container.types";

const ModalContact: React.FC<ModalProps> = props => {
  const { open, setOpen } = props;
  const t = useI18n().global.ModalContact;

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box sx={ModalStyled}>
        <Styles className={`LayoutContainer`}>
          <div className="LayoutContainer__container--modal">
            <h1 className="LayoutContainer__component--modal-title">
              {t.title}
            </h1>
            <div className="LayoutContainer__container--modal-info">
              <p className="LayoutContainer__component--modal-paragraph">
                <LocalPhone />
                {t.phone}
              </p>
              <p className="LayoutContainer__component--modal-paragraph">
                <Email />
                {t.email}
              </p>
              <p className="LayoutContainer__component--modal-paragraph">
                <Home />
                {t.address}
              </p>
            </div>
          </div>
        </Styles>
      </Box>
    </Modal>
  );
};

const LayoutContainer: React.FC<Props> = props => {
  const { children } = props;
  const { isLoading } = useGlobals();
  const [open, setOpen] = useState(false);

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
        <ModalContact setOpen={setOpen} open={open} />
      </div>
      <FooterResponsive setOpen={setOpen} />
    </Styles>
  );
};

LayoutContainer.defaultProps = {};

export default LayoutContainer;

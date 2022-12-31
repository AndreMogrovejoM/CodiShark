import { AccountCircle, Email, Home, LocalPhone } from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { AppBar, Box, IconButton, Menu, Modal, Toolbar } from "@mui/material";
import { MenuItem } from "@mui/material";
import logoKonecta from "assets/images/logoKonectaSidebar.svg";
import CONSTANTS from "config/constants";
import useAuth from "contexts/auth/auth.hooks";
import useI18n from "i18n/i18n.hooks";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setCookie } from "react-use-cookie";
import { useLogout } from "services/auth/auth.service.hooks";
import { useLocalStorage } from "utils/useLocalStorage";
import { userRol } from "utils/validations.utils";

import Styles, { ModalStyled } from "./SidebarResponsive.styles";
import { MenuItemStyled, MenuStyled } from "./SidebarResponsive.styles";
import { paperProps } from "./SidebarResponsive.styles";
import { SidebarResponsiveProps as Props } from "./SidebarResponsive.types";

const { ENTRY_PATH, ADMIN_ENTRY_PATH } = CONSTANTS.ROUTES;
const { SIGN_USER, SIGN_ADMIN } = CONSTANTS.ROUTES;

const SidebarResponsive: React.FC<Props> = props => {
  const t = useI18n().global.sideBar;
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { setSignInStep, setUser, user } = useAuth();
  const { mutateAsync, reset } = useLogout();
  const { first_name, last_name, mother_last_name } = user ?? {};
  const [, setLocalUser] = useLocalStorage("user");
  const { rol } = user ?? {};

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleLogout = async () => {
    try {
      mutateAsync();
      reset();
      setSignInStep(0);
      setLocalUser("");
      setUser(undefined);
      setCookie("token", "");
      navigate(rol === userRol ? SIGN_USER : SIGN_ADMIN);
      document.location.reload();
      handleClose();
    } catch (error) {
      console.warn(error);
    }
  };

  const renderMenu = () => (
    <Menu
      sx={MenuStyled}
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
      keepMounted
      transformOrigin={{ horizontal: "right", vertical: "bottom" }}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      PaperProps={paperProps}
    >
      <MenuItem
        onClick={() => setOpen(!open)}
        disableRipple
        sx={MenuItemStyled}
      >
        <SupportAgentIcon />
        {t.support}
      </MenuItem>

      <MenuItem onClick={handleLogout} disableRipple sx={MenuItemStyled}>
        <LogoutIcon />
        {t.logout}
      </MenuItem>
    </Menu>
  );

  const renderHome = () => navigate(rol === 1 ? ENTRY_PATH : ADMIN_ENTRY_PATH);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderModal = () => (
    <Modal open={open} onClose={() => setOpen(!open)}>
      <Box sx={ModalStyled}>
        <Styles className={`SidebarResponsive`}>
          <div className="SidebarResponsive__container--modal">
            <h1 className="SidebarResponsive__component--modal-title">
              {t.title}
            </h1>
            <div className="SidebarResponsive__container--modal-info">
              <p className="SidebarResponsive__component--modal-paragraph">
                <LocalPhone />
                {t.phone}
              </p>
              <p className="SidebarResponsive__component--modal-paragraph">
                <Email />
                {t.email}
              </p>
              <p className="SidebarResponsive__component--modal-paragraph">
                <Home />
                {t.address}
              </p>
            </div>
          </div>
        </Styles>
      </Box>
    </Modal>
  );

  return (
    <Styles className={`SidebarResponsive`}>
      <AppBar position="static" className="SidebarResponsive__container--menu">
        <Toolbar className="SidebarResponsive__component--menu">
          <img
            src={logoKonecta}
            alt="logo Konecta"
            className="SidebarResponsive__component--image"
            onClick={() => renderHome()}
          />

          <div className="SidebarResponsive__container--profile">
            <div className="SidebarResponsive__component--profile">
              <p className="SidebarResponsive__component--profile-name">
                {first_name}
              </p>
              <p className="SidebarResponsive__component--profile-lastName">{`${last_name} ${mother_last_name}`}</p>
            </div>
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                className="SidebarResponsive__component--button"
              >
                <AccountCircle
                  fontSize="large"
                  className="SidebarResponsive__component--icon"
                />
              </IconButton>

              {renderMenu()}
            </div>
          </div>
        </Toolbar>
      </AppBar>

      {renderModal()}
    </Styles>
  );
};

SidebarResponsive.defaultProps = {};

export default SidebarResponsive;

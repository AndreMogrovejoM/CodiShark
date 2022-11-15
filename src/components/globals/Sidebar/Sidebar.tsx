import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LogoutIcon from "@mui/icons-material/Logout";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Collapse, Drawer, List } from "@mui/material";
import iconPersonSideBar from "assets/images/iconPersonSideBar.svg";
import logoKonecta from "assets/images/logoKonectaSideBar.svg";
import CONSTANTS from "config/constants";
import useAuth from "contexts/auth/auth.hooks";
import useI18n from "i18n/i18n.hooks";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setCookie } from "react-use-cookie";
import { useLogout } from "services/auth/auth.service.hooks";

import Styles, { drawerStyle } from "./Sidebar.styles";
import { SidebarProps as Props } from "./Sidebar.types";

const { NO_AUTH_PATH, USER_PAY_PANEL, ADMIN_ENTRY_PATH, USER_OPERATION_PANEL } =
  CONSTANTS.ROUTES;

const Sidebar: React.FC<Props> = props => {
  const { open = true, onClose } = props;
  const t = useI18n().global.sideBar;
  const navigate = useNavigate();
  const [openList, setOpenList] = useState(true);
  const { setSignInStep, setUser, user } = useAuth();
  const { mutateAsync, reset } = useLogout();
  const { first_name, last_name, mother_last_name } = user ?? {};

  const handleClick = (idx: number) => {
    setOpenList(!openList);
  };

  const handleLogout = async () => {
    try {
      mutateAsync();
      reset();
      setSignInStep(0);
      setUser(undefined);
      setCookie("token", "");
      navigate(NO_AUTH_PATH);
      document.location.reload();
    } catch (error) {
      console.warn(error);
    }
  };

  const renderItem = (
    idx: number,
    text: string,
    url: string,
    subItems?: string[]
  ) => {
    return (
      <>
        <ListItemButton
          onClick={() => {
            navigate(url);
            handleClick(idx);
          }}
          sx={{ padding: "1.2rem 2.4rem" }}
        >
          <ListItemIcon>
            <ChevronRightIcon sx={{ color: "white" }} fontSize="large" />
          </ListItemIcon>
          <ListItemText>
            <h3>{text}</h3>
          </ListItemText>
        </ListItemButton>
        {subItems && (
          <Collapse in={openList} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 2 }}>
                <ListItemIcon>
                  <ChevronRightIcon />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </List>
          </Collapse>
        )}
      </>
    );
  };

  const renderLogout = () => {
    return (
      <ListItemButton onClick={handleLogout} sx={{ padding: "1.2rem 2.4rem" }}>
        <ListItemIcon>
          <LogoutIcon sx={{ color: "white" }} fontSize="medium" />
        </ListItemIcon>
        <ListItemText>
          <h3>{t.logout}</h3>
        </ListItemText>
      </ListItemButton>
    );
  };

  return (
    <Styles className="Sidebar">
      <Drawer
        anchor="left"
        open={open}
        onClose={onClose}
        className="Sidebar__drawer"
        sx={drawerStyle}
        variant="permanent"
      >
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          sx={drawerStyle}
          subheader={
            <div className="Sidebar__header">
              <div className="Sidebar__header-text">
                <img
                  className="Sidebar__icon"
                  src={logoKonecta}
                  alt="logoKonecta"
                />
                <div className="Sidebar__sectionContainer">
                  <img src={iconPersonSideBar} alt="iconPersonSideBar" />
                  <div>
                    <h2>{first_name}</h2>
                    <h4>{`${last_name} ${mother_last_name}`}</h4>
                  </div>
                </div>
              </div>
            </div>
          }
        >
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            sx={drawerStyle}
            subheader={
              <div className="Sidebar__footer">
                <div className="Sidebar__footer-text">
                  <div className="Sidebar__sectionContainerFooter">
                    <div className="Sidebar__footerList">
                      <h2 className="Sidebar__footerListTitle">{t.title}</h2>
                      <div className="Sidebar__iconFooter">
                        <LocalPhoneIcon />
                        <p>0800 1652 1254</p>
                      </div>
                      <div className="Sidebar__iconFooter">
                        <WhatsAppIcon />
                        <p>info@b12.com</p>
                      </div>
                      <div className="Sidebar__iconFooter">
                        <FmdGoodIcon />
                        <p>{t.direction}</p>
                      </div>
                      <a href="google.com">www.b12.com</a>
                    </div>
                  </div>
                </div>
              </div>
            }
          ></List>
          {renderItem(0, t.start, ADMIN_ENTRY_PATH)}
          {renderItem(0, t.myPayments, USER_PAY_PANEL)}
          {renderItem(0, t.myClients, USER_OPERATION_PANEL)}
          <div className="Sidebar__divider" />
          {renderLogout()}
        </List>
      </Drawer>
    </Styles>
  );
};

Sidebar.defaultProps = {};

export default Sidebar;

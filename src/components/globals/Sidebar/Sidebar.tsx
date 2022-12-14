import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LogoutIcon from "@mui/icons-material/Logout";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Collapse, Drawer, List } from "@mui/material";
import iconPersonSideBar from "assets/images/iconPersonSideBar.svg";
import logoKonecta from "assets/images/logoKonectaSidebar.svg";
import CONSTANTS from "config/constants";
import useAuth from "contexts/auth/auth.hooks";
import useGlobals from "contexts/globals/globals.hooks";
import useI18n from "i18n/i18n.hooks";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setCookie } from "react-use-cookie";
import { useLogout } from "services/auth/auth.service.hooks";
import { useLocalStorage } from "utils/useLocalStorage";

import Styles, { drawerStyle } from "./Sidebar.styles";
import { SidebarProps as Props } from "./Sidebar.types";

const { USER_PAYMENT_LIST, ADMIN_ENTRY_PATH } = CONSTANTS.ROUTES;
const { ADMIN_CLIENT_LIST, ADMIN_PAYMENT_LIST } = CONSTANTS.ROUTES;
const { ENTRY_PATH, SETTINGS } = CONSTANTS.ROUTES;

const Sidebar: React.FC<Props> = props => {
  const { open = true, onClose } = props;
  const t = useI18n().global.sideBar;
  const navigate = useNavigate();
  const { setSignInStep, setUser, user } = useAuth();
  const { selectedIndex } = useGlobals();
  const { mutateAsync, reset } = useLogout();
  const [, setLocalUser] = useLocalStorage("user");
  const { first_name, last_name, mother_last_name } = user ?? {};
  const { rol } = user ?? {};
  const { setIsLoading } = useGlobals();

  const [openList, setOpenList] = useState(true);

  const handleClick = (idx: number) => {
    setOpenList(!openList);
  };

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      mutateAsync();
      reset();
      setSignInStep(0);
      setLocalUser("");
      setCookie("token", "");
      setUser(undefined);
      setIsLoading(false);
      navigate("/inicio");
      document.location.reload();
    } catch (error) {
      setIsLoading(false);
      setLocalUser("");
      setCookie("token", "");
      setUser(undefined);
      navigate("/inicio");
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
          onClick={event => {
            navigate(url);
            handleClick(idx);
            selectedIndex.current = idx;
          }}
          sx={{ padding: "1.2rem 2.4rem" }}
          key={idx}
          className="Sidebar__listButton"
        >
          <ListItemIcon className="Sidebar__list--icon">
            <ChevronRightIcon
              sx={{ color: "white" }}
              className={selectedIndex.current === idx ? "Sidebar__active" : ""}
              fontSize="large"
            />
          </ListItemIcon>
          <ListItemText>
            <h3
              className={selectedIndex.current === idx ? "Sidebar__active" : ""}
            >
              {text}
            </h3>
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
      <ListItemButton
        onClick={handleLogout}
        sx={{ padding: "1.2rem 2.4rem" }}
        className="Sidebar__listButton"
      >
        <ListItemIcon className="Sidebar__list--icon">
          <LogoutIcon sx={{ color: "white" }} fontSize="medium" />
        </ListItemIcon>
        <ListItemText>
          <h3>{t.logout}</h3>
        </ListItemText>
      </ListItemButton>
    );
  };

  const renderUserRoutes = () => {
    if (rol !== 1) return null;

    return (
      <>
        {renderItem(0, t.start, ENTRY_PATH)}
        {renderItem(5, t.myPays, USER_PAYMENT_LIST)}
      </>
    );
  };

  const renderAdminRoutes = () => {
    if (rol !== 10) return null;
    return (
      <>
        {renderItem(0, t.start, ENTRY_PATH)}
        {renderItem(2, t.myPayments, ADMIN_PAYMENT_LIST)}
        {renderItem(3, t.myClients, ADMIN_CLIENT_LIST)}
        {renderItem(6, t.setting, SETTINGS)}
      </>
    );
  };

  const renderHome = () => {
    return navigate(rol === 1 ? ENTRY_PATH : ADMIN_ENTRY_PATH);
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
                <div className="Sidebar__icon--container">
                  <img
                    className="Sidebar__icon"
                    src={logoKonecta}
                    alt="logoKonecta"
                    width={140}
                    onClick={() => renderHome()}
                  />
                </div>
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
          {renderUserRoutes()}
          {renderAdminRoutes()}
          <div className="Sidebar__divider" />
          {renderLogout()}
        </List>
      </Drawer>
    </Styles>
  );
};

Sidebar.defaultProps = {};

export default Sidebar;

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LogoutIcon from "@mui/icons-material/Logout";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Collapse, Drawer, List } from "@mui/material";
import useI18n from "i18n/i18n.hooks";
import React from "react";

import Styles, { drawerStyle } from "./Sidebar.styles";
import { SidebarProps as Props } from "./Sidebar.types";

const Sidebar: React.FC<Props> = props => {
  const { open = true, onClose } = props;
  const t = useI18n().global.sideBar;

  const [openList, setOpenList] = React.useState(true);

  const handleClick = (idx: number) => {
    setOpenList(!openList);
  };

  const handleLogout = () => {};

  const renderItem = (idx: number, text: string, subItems?: string[]) => {
    return (
      <>
        <ListItemButton onClick={() => handleClick(idx)}>
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
      <ListItemButton onClick={handleLogout}>
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
                <h2>Armando</h2>
                <h4>Rodriguez Guerra</h4>
              </div>
            </div>
          }
        >
          {renderItem(0, t.start)}
          {renderItem(0, t.myPayments)}
          <div className="Sidebar__divider" />
          {renderLogout()}
        </List>
      </Drawer>
    </Styles>
  );
};

Sidebar.defaultProps = {};

export default Sidebar;

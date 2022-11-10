import styled from "styled-components";

import { SidebarStyledProps as Props } from "./Sidebar.types";

const SidebarStyled = styled.nav<Props>`
  position: absolute;
  top: 0;
  left: 0;
  width: 20.4rem;
  height: 100vh;
  flex: 1;
  color: var(--palette-white);

  * > h2 {
    font-size: 1.4rem;
    line-height: 2rem;
    font-weight: 600;
    color: inherit;
  }

  * > h3 {
    font-size: 1.2rem;
    line-height: 1.6rem;
    font-weight: 400;
    color: inherit;
  }

  * > h4 {
    font-size: 1rem;
    line-height: 1.6rem;
    font-weight: 300;
    color: inherit;
    text-transform: uppercase;
  }

  .Sidebar {
    &__header {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 1.6rem 0;
      gap: 0.8rem;
    }

    &__divider {
      width: 100%;
      height: 0.01rem;
      background-color: var(--palette-white05);
      margin: 0.8rem 0;
    }

    &__icon {
      padding-bottom: 0.8rem;
    }

    &__sectionContainer {
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }
  }
`;

export const drawerStyle = {
  width: "20.4rem",
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: "20.4rem",
    boxSizing: "border-box",
    backgroundColor: "var(--palette-deepBlue)",
    color: "white"
  }
};

export default SidebarStyled;

import CONSTANTS from "config/constants";
import styled from "styled-components";

import { SidebarResponsiveStyledProps as Props } from "./SidebarResponsive.types";

const { BREAKPOINTS } = CONSTANTS;

const SidebarResponsiveStyled = styled.div<Props>`
  display: block;

  @media screen and (min-width: ${BREAKPOINTS.tablet}px) {
    display: none;
  }

  .SidebarResponsive {
    &__component {
      &--menu {
        width: inherit;
        display: flex;
        justify-content: space-between;
        margin: auto;
      }

      &--image {
        width: 120px;
        cursor: pointer;
      }

      &--profile {
        color: var(--palette-white);

        &-name {
          font-size: 1.4rem;
          font-weight: 600;
        }

        &-lastName {
          font-weight: 160;
          font-size: 1.2rem;
        }

        &-image {
          width: 4rem;
          height: 4.8rem;
        }
      }

      &--button {
        &:focus {
          outline: none;
        }
      }

      &--icon {
        fill: var(--palette-skyBlue);
        font-size: 3.2rem;
      }

      &--modal {
        &-title {
          font-size: 2.4rem;
          font-weight: 600;
          text-align: center;
        }

        &-paragraph {
          display: flex;
          gap: 1.6rem;
          font-size: 1.4rem;
          font-weight: 400;
        }
      }
    }

    &__container {
      &--menu {
        background-color: var(--palette-deepBlue);
        min-height: 8vh;
      }

      &--image {
        margin-bottom: 3.6rem;
      }

      &--icon {
        margin-right: 1.6rem;
      }

      &--components {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      &--profile {
        display: flex;
        align-items: center;
      }

      &--modal {
        display: flex;
        flex-direction: column;
        gap: 3.2rem;

        &-info {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
      }
    }

    &__active {
      background-color: var(--palette-skyBlue);
    }
  }
`;

export default SidebarResponsiveStyled;

export const paperProps = {
  elevation: 0,
  sx: {
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px var(--palette-darkShadow))",
    mt: 1.5,
    "& .MuiAvatar-root": {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1
    },
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: 20,
      width: 10,
      height: 10,
      bgcolor: "background.paper",
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0
    }
  }
};

export const MenuItemStyled = {
  display: "flex",
  gap: "0.8rem",
  fontSize: "1.2rem",
  fontFamily: "inherit",
  "&:focus": {
    outline: "none"
  }
};

export const MenuStyled = {
  mt: "4vh"
};

export const ModalStyled = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 320,
  bgcolor: "var(--palette-white)",
  border: "1px solid var(--palette-primary)",
  borderRadius: 4,
  boxShadow: 24,
  p: 4
};

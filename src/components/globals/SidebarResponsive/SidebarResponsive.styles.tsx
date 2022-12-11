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
      &--hamburger {
        &-button {
          position: sticky;
          top: 2.5rem;
          left: 2rem;
          width: 2.4rem;
          height: 2.6rem;
          cursor: pointer;
          z-index: 10;

          & > span,
          & > span::before,
          & > span::after {
            display: block;
            position: absolute;
            width: 100%;
            height: 0.2rem;
            background-color: var(--palette-white);
            transition-duration: 0.25s;
          }

          & > span::before {
            content: "";
            top: -0.8rem;
          }

          & > span::after {
            content: "";
            top: 0.8rem;
          }
        }
      }

      &--menu {
        &-box {
          display: block;
          position: fixed;
          top: 0;
          left: -100%;
          width: 30rem;
          height: 100%;
          margin: 0;
          padding: 8rem 0;
          list-style: none;
          background-color: var(--palette-deepBlue);
          box-shadow: 0.2rem 0.2rem 0.6rem var(--palette-darkShadow);
          transition-duration: 0.25s;
        }

        &-item {
          display: flex;
          align-items: center;
          padding: 1.2rem 2.4rem;
          color: var(--palette-white);
          font-size: 1.6rem;
          font-weight: 600;
          text-decoration: none;
          transition-duration: 0.25s;
          cursor: pointer;
          width: 100%;

          &:hover {
            background-color: var(--palette-skyBlue);
          }
        }
      }

      &--image {
        margin: auto;
      }
    }

    &__container {
      &--menu {
        background-color: var(--palette-deepBlue);
        display: flex;
        align-items: flex-start;
        height: 4.8rem;
        padding-left: 2.4rem;
        padding-right: 2.4rem;
      }

      &--image {
        margin-bottom: 3.6rem;
      }

      &--icon {
        margin-right: 1.6rem;

        &-exit {
          margin-left: 0.4rem;
          margin-right: 1.6rem;
        }
      }

      &--components {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }

    &__active {
      background-color: var(--palette-skyBlue);
    }
  }

  #menu__toggle {
    opacity: 0;
    display: none;
  }

  #menu__toggle:checked
    + .SidebarResponsive__component--hamburger-button
    > span {
    transform: rotate(45deg);
  }

  #menu__toggle:checked
    + .SidebarResponsive__component--hamburger-button
    > span::before {
    top: 0;
    transform: rotate(0deg);
  }

  #menu__toggle:checked
    + .SidebarResponsive__component--hamburger-button
    > span::after {
    top: 0;
    transform: rotate(90deg);
  }

  #menu__toggle:checked ~ .SidebarResponsive__component--menu-box {
    left: 0 !important;
    z-index: 2;
  }
`;

export default SidebarResponsiveStyled;

import CONSTANTS from "config/constants";
import styled from "styled-components";

import { FooterResponsiveStyledProps as Props } from "./FooterResponsive.types";

const { BREAKPOINTS } = CONSTANTS;

const FooterResponsiveStyled = styled.div<Props>`
  display: block;

  @media screen and (min-width: ${BREAKPOINTS.tablet}px) {
    display: none;
  }

  .FooterResponsive {
    &__container {
      position: fixed;
      bottom: 0;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      background-color: var(--palette-deepBlue);
      height: 10vh;

      @media screen and (min-width: ${BREAKPOINTS.tablet}px) {
        display: none;
      }

      &--icon {
        display: flex;
        flex-direction: column;
        cursor: pointer;
      }

      &--home {
        padding: 1.6rem;
        background-color: var(--palette-primary);
        border-radius: 50%;
        cursor: pointer;
      }
    }

    &__component {
      &--icon {
        fill: var(--palette-white);
        height: 2rem;

        &-middle {
          height: 2.4rem;
        }
      }
    }

    &__footer {
      display: none;

      @media screen and (min-width: ${BREAKPOINTS.tablet}px) {
        display: block;
      }

      &--icon {
        fill: var(--palette-white);
        height: 2rem;

        &-middle {
          height: 2.4rem;
        }

        &-home {
          padding: 1.6rem;
          background-color: var(--palette-primary);
          border-radius: 50%;
          cursor: pointer;
        }

        &-text {
          gap: 0.4rem;
          font-size: 0.96rem;
          color: var(--palette-primary);
        }
      }
    }

    &__text {
      gap: 0.4rem;
      font-size: 0.96rem;
      color: var(--palette-primary);
    }
  }
`;

export default FooterResponsiveStyled;

import CONSTANTS from "config/constants";
import styled from "styled-components";

import { DebtTableStyledProps as Props } from "./DebtTable.types";

const { BREAKPOINTS } = CONSTANTS;

const DebtTableStyled = styled.div<Props>`
  .DebtTable {
    &__container {
      &--middle {
        display: flex;
        gap: 0.64rem;
        align-items: center;
      }

      &--button {
        &-content {
          display: flex;
          align-items: center;
          flex-direction: row;
          gap: 0.4rem;
          padding-left: 1.6rem;
          padding-right: 1.6rem;
        }
      }

      &--divider {
        border-right: 0.01rem solid var(--palette-darkText);
        height: 80%;
      }

      &--icon {
        pointer-events: none;
      }
    }

    &__component {
      &--discount {
        display: flex;
        font-weight: 700;
        align-items: center;
        line-height: 1.6rem;
        font-size: 1.2rem;
        background-color: var(--palette-yellow);
        border-radius: 0.8rem;
        padding: 0 0.8rem;
        justify-content: center;
      }

      &--button {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 0.8rem;
        background-color: var(--palette-greyBackground);
        color: var(--palette-blueText);
        text-align: center;
        padding: 0.2rem;
        font-weight: 700;
        font-size: 1rem;
        line-height: 1.2rem;
        min-width: 12rem;

        @media screen and (min-width: ${BREAKPOINTS.mobile}px) {
          padding: 0.8rem 1rem;
        }
      }
    }
    &__text {
      &--title {
        color: var(--palette-grayText);
        font-weight: 700;
        font-size: 1.4rem;
        line-height: 2.4rem;
      }

      &--color {
        color: var(--palette-primary);
      }

      &--date {
        font-weight: 300;
        font-size: 1.4rem;
        line-height: 2.4rem;
      }
    }
  }
`;

export default DebtTableStyled;

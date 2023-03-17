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
        position: relative;
        width: 20rem;

        @media screen and (max-width: 1400px) {
          width: 16rem;
        }
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

    &__discountContainer {
      background-color: var(--palette-yellow);
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      flex-direction: column;
      width: 8rem;
      height: 4.8rem;
      margin-left: 2.4rem;
      position: absolute;
      right: 0%;
      top: -1.8rem;
      border-radius: 0.4rem;
    }

    &__component {
      &--discountTitle {
        font-weight: bold;
        line-height: 1.6rem;
        font-size: 2rem;
      }

      &--discount {
        font-weight: 700;
        line-height: 1.6rem;
        font-size: 1rem;
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

      &--pagination {
        display: ${props => (props.hiddenMobile ? "none" : "block")};

        @media screen and (min-width: ${BREAKPOINTS.mobile}px) {
          display: "block";
        }
      }
    }

    &__text {
      &--title {
        color: var(--palette-grayText);
        font-weight: 700;
        font-size: 1.4rem;
        line-height: 2.4rem;
        display: block;
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

  .rdt_TableRow {
    height: 6.4rem !important;
  }
`;

export default DebtTableStyled;

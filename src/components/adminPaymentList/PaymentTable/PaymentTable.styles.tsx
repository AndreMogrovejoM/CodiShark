import CONSTANTS from "config/constants";
import styled from "styled-components";

import { PaymentTableStyledProps as Props } from "./PaymentTable.types";

const { BREAKPOINTS } = CONSTANTS;

const PaymentTableStyled = styled.div<Props>`
  .PaymentTable {
    &__container {
      &--button {
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--palette-white);
        cursor: pointer;
        font-size: 0.8rem;
        border-radius: 0.8rem;
        background-color: var(--palette-skyBlue);
        text-align: center;
        padding: 0.2rem;

        @media screen and (min-width: ${BREAKPOINTS.mobile}px) {
          padding: 0.8rem 1rem;
        }

        &-icon {
          background-color: var(--palette-greyBackground);
          color: var(--palette-darkText);
          font-weight: 600;
          font-size: 0.8rem;
          line-height: 1rem;
        }

        &-disabled {
          cursor: not-allowed;
          background-color: var(--palette-greyBackground);
          color: var(--palette-darkText);
          opacity: 0.8;
        }
      }

      &--field {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.6rem;
        color: var(--palette-blueText);

        &-bold {
          font-weight: 700;
        }

        &-expand {
          font-weight: 300;
          font-size: 1rem;
          line-height: 1.2rem;
        }
      }

      &--icon {
        display: flex;
        align-items: center;
        margin-right: none;
        pointer-events: none;

        @media screen and (min-width: ${BREAKPOINTS.mobile}px) {
          margin-right: 0.64rem;
        }
      }

      &__text {
        display: flex;
        align-items: center;
      }
    }
  }
`;

export default PaymentTableStyled;

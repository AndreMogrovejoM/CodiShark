import CONSTANTS from "config/constants";
import styled from "styled-components";

import { ProofPaymentStyledProps as Props } from "./ProofPayment.types";

const { BREAKPOINTS } = CONSTANTS;

const ProofPaymentStyled = styled.div<Props>`
  .ProofPayment {
    &__separator {
      &--paragraph {
        display: flex;
        gap: 3.2rem;
        justify-content: space-between;
        width: 100%;

        @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
          justify-content: none;
          width: auto;
        }
      }

      &--title {
        margin-bottom: 3.2rem;

        @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
          margin-bottom: 1.6rem;
        }
      }

      &--details {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 1.6rem;
        margin-bottom: 3.2rem;

        @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
          margin-bottom: 9.6rem;
        }
      }

      &--actions {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 1.6rem;
      }

      &--sm {
        justify-content: space-between;
        width: 100%;

        @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
          justify-content: none;
          width: auto;
        }
      }
    }

    &__component {
      &--card {
        border-radius: 8px;
        background-color: var(--palette-whiteBackground);
        padding: 2.4rem 3.6rem;
        width: auto;

        @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
          width: 60vw;
          min-height: 44.8rem;
        }

        @media screen and (min-width: ${BREAKPOINTS.wide}px) {
          min-width: 76rem;
        }
      }

      &--code {
        width: 18rem;
        height: 7.2rem;
        border: 0.4rem solid var(--palette-darkText);
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 2.4rem;

        @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
          margin-left: none;
          margin-bottom: 8.4rem;
        }
      }

      &--button {
        padding: 0.8rem 4.8rem;
        color: var(--palette-whiteBackground);

        &-green {
          background-color: var(--palette-limeGreenBackground);
        }

        &-blue {
          background-color: var(--palette-blue);
        }
      }
    }

    &__text {
      &--title {
        font-weight: 800;
        font-size: 1.4rem;
        line-height: 2rem;
        text-align: center;

        @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
          text-align: left;
        }
      }

      &--paragraph {
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 1.6rem;

        &-bold {
          font-weight: 600;
        }

        &-blue {
          color: var(--palette-blue);
        }

        &-superBold {
          font-weight: 800;
          font-size: 2rem;
          line-height: 2.64rem;
          color: var(--palette-blue);
        }
      }
    }
  }
`;

export default ProofPaymentStyled;

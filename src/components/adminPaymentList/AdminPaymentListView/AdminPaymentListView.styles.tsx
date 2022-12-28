import CONSTANTS from "config/constants";
import styled from "styled-components";

import { AdminPaymentListViewStyledProps as Props } from "./AdminPaymentListView.types";

const { BREAKPOINTS } = CONSTANTS;

const AdminPaymentListViewStyled = styled.div<Props>`
  .AdminPaymentListView {
    &__container {
      margin: auto 2.4rem;
      height: auto;

      @media screen and (min-width: ${BREAKPOINTS.mobile}px) {
        height: 90vh;
      }

      @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
        margin: auto;
      }

      &--actions {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 1.6rem;
      }

      &--button {
        display: flex;
        gap: 0.8rem;
      }

      &--separate {
        margin-bottom: 1.6rem;
      }

      &--layout {
        display: flex;
        gap: 1.6rem;
        flex-flow: row wrap;
        @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
          gap: 2%;
        }
      }

      &--details {
        min-width: 28rem;
        width: 100%;

        @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
          width: 38%;
        }

        @media screen and (min-width: ${BREAKPOINTS.wide}px) {
          width: 28%;
        }
      }

      &--table {
        width: 100%;

        @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
          min-width: 46rem;
          width: 60%;
        }

        @media screen and (min-width: ${BREAKPOINTS.wide}px) {
          width: 70%;
        }
      }
    }

    &__component {
      &--button {
        font-weight: 600;
        font-size: 1rem;
        line-height: 1.6rem;
        border-radius: 0.8rem;

        &-disabled {
          background-color: var(--palette-greyBackground);
          opacity: 0.8;
          pointer-events: none;
        }
      }
    }

    &__text {
      &--title {
        font-weight: 800;
        font-size: 1.6rem;
        line-height: 2.4rem;
        text-transform: unset;
      }

      &--subtitle {
        font-weight: 700;
        font-size: 1.6rem;
        line-height: 2.4rem;
      }

      &--paragraph {
        font-weight: 300;
        font-size: 1.2rem;
        line-height: 1.6rem;
      }
    }
  }
`;

export default AdminPaymentListViewStyled;

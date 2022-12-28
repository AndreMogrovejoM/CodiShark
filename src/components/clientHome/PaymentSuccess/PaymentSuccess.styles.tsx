import CONSTANTS from "config/constants";
import styled from "styled-components";

import { PaymentSuccessStyledProps as Props } from "./PaymentSuccess.types";

const { BREAKPOINTS } = CONSTANTS;

const PaymentSuccessStyled = styled.div<Props>`
  .PaymentSuccess {
    &__container {
      width: 100%;
      display: flex;
      background-color: var(--palette-white);
      border-radius: 0.8rem;
      padding: 4rem 2.4rem;
      margin: 3.2rem auto;
      justify-content: center;
      flex-direction: column;
      gap: 0.8rem;

      @media screen and (min-width: ${BREAKPOINTS.mobile}px) {
        flex-direction: row;
        justify-content: space-evenly;
      }
    }

    &__section {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 0.4rem;

      @media screen and (min-width: ${BREAKPOINTS.mobile}px) {
        gap: 0;
      }
    }

    &__title {
      font-weight: 800;
      font-size: 2rem;
      line-height: 2.4rem;
      text-align: center;
    }

    &__subtitle {
      font-weight: 400;
      font-size: 1.3rem;
      line-height: 2.4rem;
      text-align: center;
    }

    &__section2 {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      gap: 0.8rem;

      @media screen and (min-width: ${BREAKPOINTS.mobile}px) {
        gap: 3.2rem;
      }
    }

    &__title2 {
      font-weight: 540;
      font-size: 1.6rem;
      text-align: center;

      @media screen and (min-width: ${BREAKPOINTS.mobile}px) {
        font-weight: 800;
        font-size: 2rem;
        line-height: 2.4rem;
      }
    }

    &__divider {
      border-top: 0.04rem solid var(--palette-darkShadow);

      @media screen and (min-width: ${BREAKPOINTS.mobile}px) {
        border-left: 0.24rem solid var(--palette-darkShadow);
      }
    }

    &__image {
      display: flex;
      align-self: center;
      width: 6.4rem;
      height: 6.4rem;

      &--divider {
        display: none;

        @media screen and (min-width: ${BREAKPOINTS.mobile}px) {
          display: block;
        }
      }
    }

    &__package {
      margin-bottom: 0.8rem;
      gap: 0.8rem;
      display: flex;
    }

    &__p1 {
      font-weight: 800;
      font-size: 1.4rem;
      line-height: 1.6rem;
    }

    &__span1 {
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.6rem;
    }

    &__p2div {
      margin-bottom: 0.8rem;
      gap: 0.8rem;
      display: flex;
    }

    &__p2 {
      font-weight: 800;
      font-size: 1.4rem;
      line-height: 1.6rem;
    }

    &__span2 {
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.6rem;
    }

    &__p3div {
      margin-bottom: 0.8rem;
      gap: 0.8rem;
      display: flex;
    }

    &__p3 {
      font-weight: 800;
      font-size: 1.4rem;
      line-height: 1.6rem;
    }

    &__span3 {
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.6rem;
    }

    &__paragraph {
      display: flex;
      flex-flow: column wrap;

      @media screen and (min-width: 967px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
`;

export default PaymentSuccessStyled;

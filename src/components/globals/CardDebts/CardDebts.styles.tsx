import CONSTANTS from "config/constants";
import styled from "styled-components";

import { CardDebtsStyledProps as Props } from "./CardDebts.types";

const { BREAKPOINTS } = CONSTANTS;

const CardDebtsStyled = styled.div<Props>`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media screen and (min-width: ${BREAKPOINTS.mobile}px) {
    display: none;
  }

  .CardDebts {
    &__component {
      background-color: var(--palette-greyBackgroundSecond);
      border-radius: 0.8rem;
      padding: 1rem 2rem;
      display: flex;
      flex-direction: column;
      gap: 1.6rem;

      @media screen and (min-width: ${BREAKPOINTS.mobile}px) {
        display: none;
      }

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

      &--divider {
        border-left: 0.24rem solid var(--palette-black);
      }

      &--button {
        display: flex;
        gap: 0.4rem;
        align-items: center;
        justify-content: center;

        &-blue {
          background-color: var(--palette-blue);
          color: var(--palette-whiteBackgroundTwo);
          padding-top: 0.8rem;
          padding-bottom: 0.8rem;

          &:focus {
            outline: none;
          }
        }
      }

      &--icon {
        fill: var(--palette-skyBlue);
      }
    }

    &__container {
      &--components {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      &--offer {
        display: flex;
        gap: 0.64rem;
        align-items: center;
      }

      &--price {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
      }

      &--prices {
        display: flex;
        justify-content: space-between;
      }

      &--buttons {
        display: flex;
        justify-content: space-around;
      }
    }

    &__text {
      &--title {
        font-weight: 600;
        font-size: 1.2rem;
        line-height: 1.4rem;
      }

      &--subtitle {
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 1.4rem;
      }

      &--button {
        font-weight: 540;
        font-size: 1rem;
        line-height: 1.4rem;

        &-pay {
          font-weight: 400;
          font-size: 1.2rem;
        }
      }

      &--price {
        font-weight: 800;
        font-size: 1.6rem;
        line-height: 2.4rem;
      }

      &--blue {
        color: var(--palette-blueText);
      }

      &--gray {
        color: var(--palette-grayText);
      }

      &--skyBlue {
        color: var(--palette-skyBlue);
      }
    }
  }
`;

export default CardDebtsStyled;

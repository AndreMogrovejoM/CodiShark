import CONSTANTS from "config/constants";
import styled from "styled-components";

import { IndicatorsClientTwoStyledProps as Props } from "./IndicatorsClientTwo.types";

const { BREAKPOINTS } = CONSTANTS;

const IndicatorsClientTwoStyled = styled.div<Props>`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background-color: var(--palette-white);
  border-radius: 0.8rem;
  overflow: hidden;
  padding: 0rem 1.2rem;

  @media screen and (max-width: 1200px) {
    padding: 0rem 0.6rem;
  }

  @media screen and (max-width: ${BREAKPOINTS.mobile}px) {
    width: 88%;
    height: auto;
    background-color: var(--palette-greyBackgroundSecond);
    padding: 1.2rem;
  }

  .IndicatorsClientTwo {
    &__card {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 40%;
      height: 100%;
      justify-content: center;

      @media screen and (max-width: 1200px) {
        width: 50%;
      }

      @media screen and (min-width: ${BREAKPOINTS.mobile}px) {
        background-color: var(--palette-white);
      }
    }

    &__discountContainer {
      background-color: var(--palette-yellow);
      display: flex;
      align-items: center;
      border-radius: 0.8rem;
      padding: 1.2rem;
      gap: 1.2rem;
      align-self: center;

      @media screen and (max-width: 1300px) {
        padding: 1.2rem 0.4rem;
        gap: 1rem;
      }
    }

    &__text {
      &--bold {
        font-weight: 700;
        font-size: 1.6rem;
        line-height: 2.4rem;
      }

      &--bold2 {
        font-weight: 700;
        font-size: 1.8rem;
        line-height: 2rem;

        @media screen and (max-width: 1200px) {
          font-size: 1.4rem;
        }
      }

      &--p {
        font-size: 1.4rem;
        line-height: 1.2rem;

        @media screen and (max-width: 1200px) {
          font-size: 1.2rem;
        }
      }

      &--discount {
        font-weight: 700;
        font-size: 2.8rem;
        line-height: 2.4rem;

        @media screen and (max-width: 1200px) {
          font-size: 2.4rem;
        }
      }

      &--percent {
        font-weight: 700;
        font-size: 2rem;
        line-height: 2.4rem;
        margin-left: -1.2rem;
        margin-top: 0.64rem;

        @media screen and (max-width: 1200px) {
          font-size: 1.6rem;
          margin-left: -1rem;
        }
      }

      &--tached {
        font-weight: 700;
        font-size: 1.8rem;
        line-height: 2.4rem;
        text-decoration: line-through;
        color: var(--palette-whiteBackgroundTwo);
      }

      &--blue {
        color: var(--palette-primary);
        font-weight: 900;
        font-size: 2.4rem;
        line-height: 2.4rem;
      }
    }
  }
`;

export default IndicatorsClientTwoStyled;

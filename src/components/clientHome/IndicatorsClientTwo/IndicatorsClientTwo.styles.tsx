import CONSTANTS from "config/constants";
import styled from "styled-components";

import { IndicatorsClientTwoStyledProps as Props } from "./IndicatorsClientTwo.types";

const { BREAKPOINTS } = CONSTANTS;

const IndicatorsClientTwoStyled = styled.div<Props>`
  width: 28rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  @media screen and (min-width: ${BREAKPOINTS.mobile}px) {
    width: 100%;
    height: auto;
  }

  .IndicatorsClientTwo {
    &__component {
      &--card {
        background-color: var(--palette-greyBackgroundSecond);
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        border-radius: 0.8rem;
        padding: 2.4rem 1.2rem;
        height: 100%;
        justify-content: center;

        @media screen and (min-width: ${BREAKPOINTS.mobile}px) {
          padding: 2.4rem 1.6rem;
          background-color: var(--palette-white);
        }

        @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
          padding: 2.4rem;
        }
      }
    }

    &__text {
      &--bold {
        font-weight: 700;
        font-size: 1.6rem;
        line-height: 2.4rem;
      }

      &--blue {
        color: var(--palette-primary);
        font-weight: 800;
        font-size: 2.2rem;
        line-height: 2.4rem;
      }
    }
  }
`;

export default IndicatorsClientTwoStyled;

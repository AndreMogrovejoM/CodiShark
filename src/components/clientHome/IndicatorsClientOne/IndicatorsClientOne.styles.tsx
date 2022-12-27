import CONSTANTS from "config/constants";
import styled from "styled-components";

import { IndicatorsClientOneStyledProps as Props } from "./IndicatorsClientOne.types";

const { BREAKPOINTS } = CONSTANTS;

const IndicatorsClientOneStyled = styled.div<Props>`
  width: 28rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: ${BREAKPOINTS.mobile}px) {
    width: 100%;
  }

  .IndicatorsClientOne {
    &__component {
      &--card {
        background-color: var(--palette-greyBackgroundSecond);
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        width: 100%;
        border-radius: 0.8rem;
        padding: 2.4rem 1.2rem;

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
        font-weight: 800;
        font-size: 1.6rem;
        line-height: 2.4rem;
      }

      &--normal {
        font-weight: 600;
        font-size: 1.1rem;
        line-height: 1.6rem;
      }

      &--light {
        font-weight: 300;
        font-size: 1.4rem;
        line-height: 2rem;
      }

      &--extraLight {
        margin-top: 1rem;
        font-weight: 300;
        font-size: 1rem;
        line-height: 1.6rem;
      }
    }
  }
`;

export default IndicatorsClientOneStyled;

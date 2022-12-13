import styled from "styled-components";

import { IndicatorsClientOneStyledProps as Props } from "./IndicatorsClientOne.types";

const IndicatorsClientOneStyled = styled.div<Props>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .IndicatorsClientOne {
    &__component {
      &--card {
        background-color: var(--palette-white);
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        width: 100%;
        border-radius: 0.8rem;
        padding: 2.4rem;
        padding-right: 4rem;
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

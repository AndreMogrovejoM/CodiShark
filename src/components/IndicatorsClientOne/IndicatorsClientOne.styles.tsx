import styled from "styled-components";

import { IndicatorsClientOneStyledProps as Props } from "./IndicatorsClientOne.types";

const IndicatorsClientOneStyled = styled.div<Props>`
  width: 49%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1.6rem 0;

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
      &--normal {
        font-weight: 600;
        font-size: 1.2rem;
        line-height: 1.6rem;
      }
      &--bold {
        font-weight: 800;
        font-size: 1.6rem;
        line-height: 2.2rem;
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

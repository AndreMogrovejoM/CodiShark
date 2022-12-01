import styled from "styled-components";

import { IndicatorsClientTwoStyledProps as Props } from "./IndicatorsClientTwo.types";

const IndicatorsClientTwoStyled = styled.div<Props>`
  width: 49%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.6rem 0;

  .IndicatorsClientTwo {
    &__component {
      &--card {
        background-color: var(--palette-white);
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        border-radius: 0.8rem;
        padding: 2.4rem;
        padding-right: 4rem;
        gap: 1.6rem;
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

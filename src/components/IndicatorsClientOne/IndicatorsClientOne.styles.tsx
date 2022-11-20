import styled from "styled-components";

import { IndicatorsClientOneStyledProps as Props } from "./IndicatorsClientOne.types";

const IndicatorsClientOneStyled = styled.div<Props>`
  width: 48%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 2.4rem 0;
  position: relative;

  .IndicatorsClientOne {
    &__title {
      position: absolute;
      font-weight: 300;
      font-size: 1.4rem;
      line-height: 2.4rem;
      left: 4rem;
      top: 2rem;
    }

    &__cardsContainer {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
    }
  }
`;

export default IndicatorsClientOneStyled;

import styled from "styled-components";

import { IndicatorsClientTwoStyledProps as Props } from "./IndicatorsClientTwo.types";

const IndicatorsClientTwoStyled = styled.div<Props>`
  width: 49%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2.4rem 0;
  position: relative;

  .IndicatorsClientTwo {
    &__cardsContainer {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
    }
  }
`;

export default IndicatorsClientTwoStyled;

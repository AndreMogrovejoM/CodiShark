import styled from "styled-components";

import { IndicatorsStyledProps as Props } from "./Indicators.types";

const IndicatorsStyled = styled.div<Props>`
  width: 72rem;
  height: 22rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0.8rem;
  margin-top: 2.4rem;

  .Indicators {
    &__title {
      font-weight: 600;
      font-size: 1.1rem;
      line-height: 2.4rem;
    }

    &__cardsContainer {
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;
      width: 100%;
    }

    &__spanContainer {
      margin-top: 1.8rem;
      margin-bottom: 1rem;
      display: flex;
      align-items: flex-start;
      gap: 0.8rem;
    }

    &__span {
      font-weight: 700;
      display: block;
      width: 8rem;
      border-radius: 0.8rem;
      background-color: var(--palette-primary);
      text-align: center;
      padding: 0.4rem 0;
    }
  }
`;

export default IndicatorsStyled;

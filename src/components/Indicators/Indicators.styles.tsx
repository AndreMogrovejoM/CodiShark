import styled from "styled-components";

import { IndicatorsStyledProps as Props } from "./Indicators.types";

const IndicatorsStyled = styled.div<Props>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 2.4rem 0;

  .Indicators {
    &__header {
      width: 100%;
    }

    &__title {
      font-weight: 600;
      font-size: 1.2rem;
      line-height: 2.4rem;
    }

    &__button {
      padding: 0.2rem 0.8rem;
      border: 0.2rem;
    }

    &__button-text {
      color: var(--palette-white);
      font-size: 1.4rem;
    }

    &__rangePicker {
      border-radius: 0.4rem;
      font-size: 1.2rem;
      line-height: 2.4rem;
      padding: 0.4rem 1.2rem;
    }

    &__actionsContainer {
      display: flex;
      justify-content: space-between;
      flex: 1;
      width: 100%;
    }

    &__cardsContainer {
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;
      width: 100%;
    }

    &__spanContainer {
      margin-top: 1.6rem;
      margin-bottom: 0.8rem;
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

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export default IndicatorsStyled;

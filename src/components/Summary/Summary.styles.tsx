import styled from "styled-components";

import { SummaryStyledProps as Props } from "./Summary.types";

const SummaryStyled = styled.div<Props>`
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: var(--palette-white);
  border-radius: 0.8rem;
  padding: 1.2rem 2.4rem;
  position: relative;
  margin: 0 auto;

  .Summary {
    &__title {
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.6rem;
    }

    &__subtitle {
      padding-bottom: 1.2rem;
      color: var(--palette-blueText);
      font-weight: 600;
      font-size: 1rem;
      line-height: 1.6rem;
    }

    &__cardsContainer {
      display: flex;
      flex-direction: row;
      gap: 9rem;
    }

    &__button {
      background-color: var(--palette-greyBackground);
      position: absolute;
      right: 5rem;
      bottom: 3.8rem;
    }

    &__line1 {
      position: absolute;
      left: 16rem;
      top: 3.6rem;
    }

    &__line2 {
      position: absolute;
      left: 32rem;
      top: 3.6rem;
    }
  }
`;

export default SummaryStyled;

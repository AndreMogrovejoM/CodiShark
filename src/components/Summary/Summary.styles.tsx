import styled from "styled-components";

import { SummaryStyledProps as Props } from "./Summary.types";

const SummaryStyled = styled.div<Props>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: var(--palette-white);
  border-radius: 0.8rem;
  padding: 2rem 2.4rem;
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
      display: flex;
      justify-content: left;
      background-color: var(--palette-greyBackground);
    }

    &__text {
      color: var(--palette-blueText);
      font-weight: 700;
      font-size: 0.9rem;
      line-height: 1.6rem;
    }

    &__line1 {
      position: absolute;
      left: 16rem;
      top: 3.6rem;
    }

    &__line2 {
      position: absolute;
      left: 34rem;
      top: 3.6rem;
    }

    &__sectionDate {
      display: flex;
      gap: 2rem;
    }

    &__span {
      display: flex;
      font-weight: 700;
      align-items: center;
      line-height: 1.6rem;
      font-size: 1.2rem;
      background-color: var(--palette-yellow);
      border-radius: 0.8rem;
      width: 5rem;
      padding: 0 auto;
      justify-content: center;
    }

    &__h3 {
      color: var(--palette-grayText);
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 2.4rem;
    }

    &__primary-color {
      color: var(--palette-primary);
    }

    &__h4 {
      font-weight: 300;
      font-size: 1.4rem;
      line-height: 2.4rem;
    }
  }
`;

export default SummaryStyled;

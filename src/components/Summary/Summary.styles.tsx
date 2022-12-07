import CONSTANTS from "config/constants";
import styled from "styled-components";

import { SummaryStyledProps as Props } from "./Summary.types";

const { BREAKPOINTS } = CONSTANTS;

const SummaryStyled = styled.div<Props>`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--palette-white);
  border-radius: 0.8rem;
  padding: 1rem 2.4rem;
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
      text-align: center;

      @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
        text-align: left;
      }
    }

    &__cardsContainer {
      display: flex;
      flex-flow: column wrap;
      justify-content: center;

      @media screen and (min-width: ${BREAKPOINTS.mobile}px) {
        gap: 2.4rem;
        flex-flow: row wrap;
      }

      @media screen and (min-width: ${BREAKPOINTS.tablet}px) {
        gap: 4.8rem;
      }

      @media screen and (min-width: ${BREAKPOINTS.wide}px) {
        gap: 5.6rem;
      }
    }

    &__button {
      background-color: var(--palette-greyBackground);
      padding: 0.4rem 2.4rem;

      &:focus {
        outline: none;
      }
    }

    &__text {
      color: var(--palette-blueText);
      font-weight: 700;
      font-size: 1rem;
      line-height: 1.6rem;
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

    &__icon {
      color: var(--palette-blueText);
      font-size: 1.4rem;
    }

    &__image {
      display: none;

      @media screen and (min-width: 500px) {
        display: block;
      }
    }

    &__container {
      &--content {
        display: flex;
        justify-content: center;
        width: 100%;
        gap: 1.6rem;
        flex-flow: column wrap;

        @media screen and (min-width: ${BREAKPOINTS.mobile}px) {
          flex-flow: row wrap;
        }

        @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
          justify-content: space-between;
        }
      }

      &--button {
        margin: auto;

        @media screen and (min-width: ${BREAKPOINTS.mobile}px) {
          margin: 0;
        }
      }
    }
    &__section2 {
      display: flex;
      flex-direction: column;
      padding-top: 1.6rem;
      padding-bottom: 1.6rem;
      gap: 1.6rem;
    }

    &__p1 {
      font-weight: 600;
      color: var(--palette-blueText);
      line-height: 1.6rem;
    }

    &__span1 {
      font-size: 1rem;
      font-weight: 400;
      color: var(--palette-grayText);
    }
  }
`;

export default SummaryStyled;

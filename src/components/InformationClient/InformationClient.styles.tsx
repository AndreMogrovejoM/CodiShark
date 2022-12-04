import CONSTANTS from "config/constants";
import styled from "styled-components";

import { InformationClientStyledProps as Props } from "./InformationClient.types";

const { BREAKPOINTS } = CONSTANTS;

const InformationClientStyled = styled.div<Props>`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--palette-white);
  border-radius: 0.8rem;
  padding: 2.4rem;
  margin: 3.2rem auto;
  gap: 2rem;

  @media screen and (min-width: ${BREAKPOINTS.tablet}px) {
    padding: 1.6rem 2.4rem;
  }

  @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
    flex-direction: row;
    gap: 4rem;
  }

  .InformationClient {
    &__section1 {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__section2 {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    &__title {
      color: var(--palette-primary);
      font-weight: 800;
      font-size: 1.6rem;
      line-height: 2.4rem;
      margin-top: 1rem;
    }

    &__title2 {
      color: var(--palette-primary);
      font-weight: 800;
      font-size: 1.6rem;
      line-height: 2.4rem;
      margin-bottom: 1rem;

      @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
        flex-direction: row;
        gap: 4rem;
      }

      text-align: center;
    }

    &__subtitle {
      color: var(--palette-grayText);
      font-weight: 400;
      font-size: 0.9rem;
      line-height: 1.6rem;
      margin-bottom: 1rem;
    }

    &__subtitle2 {
      color: var(--palette-grayText);
      font-weight: 700;
      font-size: 1rem;
      line-height: 1.6rem;
      margin-top: 1rem;
    }

    &__subtitle3 {
      margin-bottom: 1rem;
      font-weight: 800;
      font-size: 1.6rem;
      line-height: 2.4rem;
    }

    &__subtitle4 {
      margin-bottom: 0.2rem;
      font-weight: 300;
      font-size: 0.9rem;
      line-height: 1.6rem;
    }

    &__subtitle6 {
      margin-top: 1rem;
      margin-bottom: 1rem;
      font-weight: 800;
      font-size: 0.9rem;
      line-height: 1.6rem;
    }

    &__cuenta1 {
      font-weight: 700;
      font-size: 1.3rem;
      line-height: 1.6rem;
    }

    &__paragraph {
      margin-top: 1rem;
      font-weight: 300;
      font-size: 0.9rem;
      line-height: 1.6rem;
    }

    &__button {
      background-color: var(--palette-limeGreen);
      width: 12rem;
      margin-top: 2.6rem;
    }

    &__text1 {
      font-weight: 800;
      font-size: 1rem;
      line-height: 1.6rem;
    }

    &__button2 {
      display: flex;
      background-color: var(--palette-primary);
      width: 24rem;
    }

    &__container {
      &--button {
        display: flex;
        justify-content: center;

        @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
          justify-content: left;
        }
      }

      &--content {
        padding: 0;

        @media screen and (min-width: ${BREAKPOINTS.mobile}px) {
          padding-left: 3.6rem;
          padding-right: 3.6rem;
        }

        @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
          padding: 0;
        }
      }
    }

    &__text2 {
      color: var(--palette-white);
      font-weight: 700;
      font-size: 1rem;
      line-height: 1.6rem;
    }

    &__image1 {
      width: 30rem;
      height: 6.5rem;
    }

    &__imageSection {
      gap: 4rem;
      display: flex;
      margin-top: 2rem;
    }

    &__line {
      display: none;

      @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
        display: block;
      }
    }
  }
`;

export default InformationClientStyled;

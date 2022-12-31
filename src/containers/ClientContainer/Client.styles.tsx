import CONSTANTS from "config/constants";
import styled from "styled-components";

import { ClientContainerStyledProps as Props } from "./Client.types";

const { BREAKPOINTS } = CONSTANTS;

const ClientContainerStyled = styled.div<Props>`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  display: flex;
  gap: 2%;
  background-color: var(--palette-white);

  @media screen and (min-width: ${BREAKPOINTS.mobile}px) {
    background-color: var(--palette-greyBackground);
  }

  @media screen and (min-width: ${BREAKPOINTS.tablet}px) {
    min-height: 90vh;
  }

  .ClientContainer {
    &__section1 {
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
      width: 100%;
    }

    &__title {
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.6rem;
      color: var(--palette-blue);
      text-align: center;

      @media screen and (min-width: ${BREAKPOINTS.mobile}px) {
        text-align: left;
        color: var(--palette-darkText);
      }
    }

    &__section2 {
      display: none;

      @media screen and (min-width: ${BREAKPOINTS.mobile}px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 1.6rem;
      }

      @media screen and (min-width: ${BREAKPOINTS.tablet}px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        gap: 1.6rem;
        align-items: unset;
      }
    }

    &__section3 {
      justify-content: space-between;
      display: flex;
      width: 100%;
      flex-direction: column;
      gap: 0.4rem;

      @media screen and (min-width: ${BREAKPOINTS.mobile}px) {
        gap: 0.8rem;
      }

      @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
        width: 70%;
      }
    }

    &__section4 {
      display: none;

      @media screen and (min-width: ${BREAKPOINTS.mobile}px) {
        width: 28%;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        flex-wrap: wrap;
      }

      @media screen and (min-width: ${BREAKPOINTS.wide}px) {
        display: block;
      }
    }

    &__container {
      &--banner {
        display: none;

        @media screen and (min-width: ${BREAKPOINTS.tablet}px) {
          display: block;
        }
      }

      &--carrousel {
        display: block;

        @media screen and (min-width: ${BREAKPOINTS.tablet}px) {
          display: none;
        }

        &-indicators {
          display: block;

          @media screen and (min-width: ${BREAKPOINTS.mobile}px) {
            display: none;
          }
        }
      }

      &--debts {
        display: flex;
        flex-direction: column;
        gap: 3.2rem;

        @media screen and (min-width: ${BREAKPOINTS.tablet}px) {
          display: none;
        }
      }
    }
  }
`;

export default ClientContainerStyled;

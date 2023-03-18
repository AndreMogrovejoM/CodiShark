import CONSTANTS from "config/constants";
import styled from "styled-components";

import { CardImageTwoStyledProps as Props } from "./CardImageTwo.types";

const { BREAKPOINTS } = CONSTANTS;

const CardImageTwoStyled = styled.div<Props>`
  position: relative;
  width: 100%;
  height: 45rem;
  margin-bottom: 3.2rem;
  border-radius: 1.6rem;
  overflow: hidden;

  @media screen and (min-width: ${BREAKPOINTS.wide}px) {
    max-width: 32rem;
    height: 40;
  }

  @media screen and (max-width: ${BREAKPOINTS.wide}px) {
    height: 40rem;
  }

  @media screen and (max-width: 1200px) {
    height: 36rem;
  }

  @media screen and (max-width: 1100px) {
    height: 32rem;
  }

  @media screen and (max-width: ${BREAKPOINTS.desktop}px) {
    height: 22rem;
    width: 38%;
  }

  .CardImageTwo {
    &__sectionContainer {
      background-color: var(--palette-darkShadow);
      position: absolute;
      width: 88%;
      height: 14rem;
      transform: translateX(6%);
      bottom: 2.4rem;
      padding: 0.8rem;
    }

    &__section {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      justify-content: center;
      bottom: 2.4rem;
      left: 1.6rem;
      background-color: var(--palette-darkShadow);
      gap: 1.2rem;
      padding: 0 2.6rem;

      @media screen and (min-width: ${BREAKPOINTS.wide}px) {
        left: 4rem;
      }
    }

    &__subtitle1 {
      color: var(--palette-white);
      font-weight: 400;
      font-size: 2rem;
      line-height: 2.4rem;
      font-weight: bold;

      @media screen and (max-width: 1200px) {
        font-size: 1.6rem;
      }
    }

    &__subtitle2 {
      color: var(--palette-white);
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 1.6rem;
      padding: 0 1.8rem;

      @media screen and (max-width: 1200px) {
        font-size: 1.2rem;
      }
    }

    &__subtitle3 {
      color: var(--palette-white);
      font-weight: 400;
      font-size: 1.3rem;
      line-height: 2.2rem;
    }

    &__image {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`;

export default CardImageTwoStyled;

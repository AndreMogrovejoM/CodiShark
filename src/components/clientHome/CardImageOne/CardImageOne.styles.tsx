import CONSTANTS from "config/constants";
import styled from "styled-components";

import { CardImageOneStyledProps as Props } from "./CardImageOne.types";

const { BREAKPOINTS } = CONSTANTS;

const CardImageOneStyled = styled.div<Props>`
  position: relative;
  width: 100%;
  height: 30rem;
  max-height: 30rem;
  margin-bottom: 3.2rem;
  border-radius: 1.6rem;
  overflow: hidden;

  @media screen and (min-width: ${BREAKPOINTS.wide}px) {
    max-width: 32rem;
  }

  @media screen and (max-width: ${BREAKPOINTS.wide}px) {
    height: 28rem;
  }

  @media screen and (max-width: 1200px) {
    height: 24rem;
  }

  @media screen and (max-width: 1100px) {
    height: 22rem;
  }

  @media screen and (max-width: ${BREAKPOINTS.desktop}px) {
    height: 22rem;
    width: 38%;
  }

  .CardImageOne {
    &__textContainer {
      position: absolute;
      background-color: var(--palette-greyBackgroundSecond);
      width: 88%;
      height: 88%;
      transform: translate(6%, 6%);
      z-index: 99;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1.2rem;
      text-align: center;
    }

    &__title {
      color: var(--palette-deepBlue);
      font-weight: 800;
      font-size: 4.8rem;
      line-height: 2.4rem;
      opacity: 1;
      font-weight: bold;

      @media screen and (max-width: 1100px) {
        font-size: 3.2rem;
      }
    }

    &__subtitle {
      color: var(--palette-deepBlue);
      font-weight: 300;
      font-size: 2.4rem;
      line-height: 2.4rem;
      opacity: 1;
      margin-bottom: 2.4rem;
      font-weight: bold;

      @media screen and (max-width: 1100px) {
        font-size: 1.8rem;
      }
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

export default CardImageOneStyled;

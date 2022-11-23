import styled from "styled-components";

import { CardImageTwoStyledProps as Props } from "./CardImageTwo.types";

const CardImageTwoStyled = styled.div<Props>`
  max-width: 32rem;
  width: 100%;
  height: 100%;
  background-color: var(--palette-white);
  border-radius: 1.6rem;
  position: relative;

  .CardImageTwo {
    &__section {
      position: absolute;
      display: flex;
      flex-direction: column;
      top: 36rem;
      left: 4rem;
      @media screen and (max-width: 1515px) {
        top: 34rem;
      }
      @media screen and (max-width: 1470px) {
        top: 32rem;
        left: 3.6rem;
      }
      @media screen and (max-width: 1410px) {
        left: 3.2rem;
        top: 30rem;
      }
    }

    &__subtitle1 {
      color: var(--palette-white);
      font-weight: 400;
      font-size: 1.3rem;
      line-height: 2.4rem;
    }

    &__subtitle2 {
      color: var(--palette-white);
      font-weight: 400;
      font-size: 1.3rem;
      line-height: 2.4rem;
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
    }
  }
`;

export default CardImageTwoStyled;

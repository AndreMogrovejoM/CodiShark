import CONSTANTS from "config/constants";
import styled from "styled-components";

import { CardImageTwoStyledProps as Props } from "./CardImageTwo.types";

const { BREAKPOINTS } = CONSTANTS;

const CardImageTwoStyled = styled.div<Props>`
  position: relative;
  width: 100%;
  background-color: var(--palette-white);
  margin-bottom: 3.2rem;
  border-radius: 1.6rem;

  @media screen and (min-width: ${BREAKPOINTS.wide}px) {
    max-width: 32rem;
  }

  .CardImageTwo {
    &__section {
      position: absolute;
      display: flex;
      flex-direction: column;
      bottom: 2.4rem;
      left: 1.6rem;

      @media screen and (min-width: ${BREAKPOINTS.wide}px) {
        left: 4rem;
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

import CONSTANTS from "config/constants";
import styled from "styled-components";

import { CardImageOneStyledProps as Props } from "./CardImageOne.types";

const { BREAKPOINTS } = CONSTANTS;

const CardImageOneStyled = styled.div<Props>`
  position: relative;
  width: 100%;
  max-height: 30rem;
  background-color: var(--palette-white);
  margin-bottom: 3.2rem;
  border-radius: 0.8rem;

  @media screen and (min-width: ${BREAKPOINTS.wide}px) {
    max-width: 32rem;
  }

  .CardImageOne {
    &__title {
      position: absolute;
      font-weight: 800;
      font-size: 1.4rem;
      line-height: 2.4rem;
      top: 3.2rem;
      left: 3.2rem;
    }

    &__subtitle {
      color: var(--palette-grayText);
      position: absolute;
      font-weight: 300;
      font-size: 1rem;
      line-height: 2.4rem;
      top: 1rem;
      left: 3.2rem;
    }

    &__image {
      width: 100%;
      height: 100%;
    }
  }
`;

export default CardImageOneStyled;

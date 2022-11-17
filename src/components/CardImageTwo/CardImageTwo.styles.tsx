import styled from "styled-components";

import { CardImageTwoStyledProps as Props } from "./CardImageTwo.types";

const CardImageTwoStyled = styled.div<Props>`
  max-width: 33rem;
  width: 100%;
  max-height: 37rem;
  height: 100%;
  background-color: var(--palette-white);
  margin-bottom: 3.2rem;
  border-radius: 1.6rem;
  margin-top: 3rem;

  .CardImageTwo {
    &__section {
      display: flex;
      flex-direction: column;
    }

    &__subtitle1 {
      color: var(--palette-white);
      position: absolute;
      font-weight: 400;
      font-size: 1.3rem;
      line-height: 2.2rem;
      top: 86rem;
      left: 5rem;
    }
    &__subtitle2 {
      color: var(--palette-white);
      position: absolute;
      font-weight: 400;
      font-size: 1.3rem;
      line-height: 2.2rem;
      top: 88rem;
      left: 5.6rem;
    }
    &__subtitle3 {
      color: var(--palette-white);
      position: absolute;
      font-weight: 400;
      font-size: 1.3rem;
      line-height: 2.2rem;
      top: 90rem;
      left: 5.6rem;
    }

    &__container {
      position: relative;
      width: 100%;
      height: 100%;
    }
  }
`;

export default CardImageTwoStyled;

import styled from "styled-components";

import { CardImageOneStyledProps as Props } from "./CardImageOne.types";

const CardImageOneStyled = styled.div<Props>`
  max-width: 33rem;
  width: 100%;
  background-color: var(--palette-white);
  margin-bottom: 3.2rem;
  border-radius: 0.8rem;
  margin-top: 3rem;

  .CardImageOne {
    &__title {
      position: absolute;
      font-weight: 800;
      font-size: 1.4rem;
      line-height: 2.4rem;
      top: 20rem;
      left: 4rem;
    }

    &__subtitle {
      color: var(--palette-grayText);
      position: absolute;
      font-weight: 300;
      font-size: 1rem;
      line-height: 2.4rem;
      top: 18rem;
      left: 4rem;
    }

    &__container {
      position: relative;
      width: 100%;
      height: 100%;
    }
  }
`;

export default CardImageOneStyled;

import CONSTANTS from "config/constants";
import styled from "styled-components";

import { CarrouselStyledProps as Props } from "./Carrousel.types";

const { BREAKPOINTS } = CONSTANTS;

const CarrouselStyled = styled.div<Props>`
  .Carrousel {
    @media screen and (min-width: ${BREAKPOINTS.mobile}px) {
      display: none;
    }

    &__image {
      width: 30rem;
      height: 18rem;
      border-radius: 1.6rem;
      object-fit: cover;
      object-position: center;
    }
  }
`;

export default CarrouselStyled;

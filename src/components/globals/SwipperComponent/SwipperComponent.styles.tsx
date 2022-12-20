import styled from "styled-components";

import { SwipperComponentStyledProps as Props } from "./SwipperComponent.types";
import "swiper/css";
import "swiper/css/pagination";

const SwipperComponentStyled = styled.div<Props>`
  .swiper-slide {
    width: auto;
  }

  .swiper-pagination {
    margin-top: 0.8rem;
    position: unset;
    z-index: auto;
  }

  .swiper-pagination-bullet-active {
    background: var(--palette-primary);
  }
`;

export default SwipperComponentStyled;

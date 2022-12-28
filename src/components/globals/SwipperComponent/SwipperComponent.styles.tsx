import styled from "styled-components";

import { SwipperComponentStyledProps as Props } from "./SwipperComponent.types";
import "swiper/css";
import "swiper/css/pagination";

const SwipperComponentStyled = styled.div<Props>`
  .swiper-slide {
    width: ${props => (props.widthFull ? "100%" : "auto")};
    height: auto;
  }

  .swiper-pagination {
    margin-top: 0.8rem;
    position: unset;
    z-index: auto;
  }

  .swiper-pagination-bullet {
    height: 0.64rem;
    width: 0.64rem;
  }

  .swiper-pagination-bullet-active {
    background: var(--palette-blue);
  }
`;

export default SwipperComponentStyled;

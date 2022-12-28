import React from "react";
import { Swiper } from "swiper/react";

import Styles from "./SwipperComponent.styles";
import { SwipperComponentProps as Props } from "./SwipperComponent.types";

const SwipperComponent: React.FC<Props> = props => {
  const { children, slidesPerView, pagination, autoPlay } = props;
  const { centeredSlides, spaceBetween, modules, widthFull } = props;

  return (
    <Styles className={`SwipperComponent`} widthFull={widthFull}>
      <Swiper
        slidesPerView={slidesPerView}
        pagination={pagination}
        autoplay={autoPlay}
        centeredSlides={centeredSlides}
        spaceBetween={spaceBetween}
        modules={modules}
      >
        {children}
      </Swiper>
    </Styles>
  );
};

SwipperComponent.defaultProps = {};

export default SwipperComponent;

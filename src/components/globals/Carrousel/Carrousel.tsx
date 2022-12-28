import React from "react";
import { Pagination, Autoplay } from "swiper";
import { SwiperSlide } from "swiper/react";

import SwipperComponent from "../SwipperComponent/SwipperComponent";
import Styles from "./Carrousel.styles";
import { CarrouselProps as Props } from "./Carrousel.types";

const Carrousel: React.FC<Props> = props => {
  const { images } = props;

  return (
    <Styles className={`Carrousel`}>
      <SwipperComponent
        slidesPerView={"auto"}
        pagination={{
          clickable: true
        }}
        autoPlay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        centeredSlides={true}
        spaceBetween={8}
        modules={[Pagination, Autoplay]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={image} className="Carrousel__image" />
          </SwiperSlide>
        ))}
      </SwipperComponent>
    </Styles>
  );
};

Carrousel.defaultProps = {};

export default Carrousel;

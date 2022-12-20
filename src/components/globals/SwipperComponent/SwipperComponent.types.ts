import { ReactI18NextChild } from "react-i18next";
import { AutoplayOptions, PaginationOptions, SwiperModule } from "swiper/types";

// Component Props
export interface SwipperComponentProps {
  children: ReactI18NextChild | Iterable<ReactI18NextChild> | undefined;
  slidesPerView?: number | "auto";
  pagination?: boolean | PaginationOptions;
  autoPlay?: boolean | AutoplayOptions;
  centeredSlides?: boolean;
  spaceBetween?: number;
  modules?: SwiperModule[];
}

// Styled Component Props
export interface SwipperComponentStyledProps {
  className: string;
}

import { ReactI18NextChild } from "react-i18next";
import { AutoplayOptions, PaginationOptions, SwiperModule } from "swiper/types";

// Component Props
export interface SwipperComponentProps {
  children?: ReactI18NextChild | Iterable<ReactI18NextChild>;
  slidesPerView?: number | "auto" | undefined;
  pagination?: boolean | PaginationOptions | undefined;
  autoPlay?: boolean | AutoplayOptions | undefined;
  centeredSlides?: boolean | undefined;
  spaceBetween?: number | undefined;
  modules?: SwiperModule[] | undefined;
}

// Styled Component Props
export interface SwipperComponentStyledProps {
  className: string;
}

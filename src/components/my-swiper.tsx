import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

type MySwiperProps = {
  spaceBetween: number;
  slidesPerView: number;
  onSlideChange?: () => void;
  onSwiper?: (swiper: any) => void;
  children: Array<React.ReactNode>;
  width: number;
  height: number;
};

export default (props: MySwiperProps) => {
  const { spaceBetween, slidesPerView, onSlideChange, onSwiper, children, width, height } = props;
  const content = children.filter((child) => !!child);
  return (
    <Swiper
      spaceBetween={spaceBetween}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={slidesPerView}
      onSlideChange={onSlideChange}
      onSwiper={onSwiper}
      width={width}
      height={height}
    >
      {content.map((child) => {
        return <SwiperSlide>{child}</SwiperSlide>;
      })}
    </Swiper>
  );
};

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { SwiperOptions } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

type MySwiperProps = {
  children: Array<React.ReactNode>;
  width: number;
  height: number;
} & SwiperOptions;

export default (props: MySwiperProps) => {
  const { children, width, height, ...rest } = props;
  const content = children.filter((child) => !!child);
  return (
    <Swiper
      style={{ width: `${width}px`, height: `${height}px` }}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      {...rest}
    >
      {/* <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
      {content.map((child) => {
        return <SwiperSlide key={child + "key"}>{child}</SwiperSlide>;
      })}
      ...
    </Swiper>
  );
};

// export default () => {
//   return (
//     <Swiper
//       // install Swiper modules
//       modules={[Navigation, Pagination, Scrollbar, A11y]}
//       // spaceBetween={50}
//       // slidesPerView={3}
//       style={{ width: "100%", height: "100" }}
//       navigation
//       pagination={{ clickable: true }}
//       // scrollbar={{ draggable: true }}
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log("slide change")}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       ...
//     </Swiper>
//   );
// };

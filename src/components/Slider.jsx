import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Slider = ({
  slides,
  autoplayDelay = 3000,
  speed = 1000,
  loop = true,
  slideClass = ""
}) => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
        loop={loop}
        speed={speed}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div>
              <img
                src={slide.src}
                alt={slide.alt}
                className={slideClass}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;

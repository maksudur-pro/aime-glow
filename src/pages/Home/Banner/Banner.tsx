import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import slides from "../../../assets/data/slides.json";

const Banner = () => {
  return (
    <Swiper
      slidesPerView={1}
      loop
      effect="fade"
      fadeEffect={{ crossFade: true }}
      speed={800}
      modules={[Autoplay, EffectFade]}
      autoplay={{ delay: 3000 }}>
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className={`banner-section ${slide.bgClass}`}>
            <div className="px-[8%]">
              <h5 className="mb-2 tracking-wide text-[#7e7e7e]">
                {slide.title}
              </h5>
              <h1
                className="text-[2.8rem] lg:text-[4rem] font-semibold leading-[50px] lg:leading-[70px]"
                dangerouslySetInnerHTML={{ __html: slide.heading }}
              />
              <p className="my-4 text-[10px] lg:text-[16px] lg:w-[70%] text-[#7e7e7e]">
                {slide.description}
              </p>
              <button className="btn bg-black text-white py-3 px-6 lg:px-10 text-[16px]">
                {slide.btnText}
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import slides from "../../../assets/slides.json";

const Banner = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 3000,
        }}>
        {slides.map((data, i) => (
          <SwiperSlide key={i}>
            <div
              className={`banner-section flex items-center ${data.className}`}>
              <div className="banner-details px-[8%] ">
                <h5 className="mb-2 tracking-wide">{data.title}</h5>
                <h1
                  className="text-[2.8rem] lg:text-[4rem] font-semibold leading-[50px] lg:leading-[70px]"
                  dangerouslySetInnerHTML={{ __html: data.heading }}></h1>
                <p className="my-4 text-[10px] lg:text-[16px] lg:w-[70%]">
                  {data.description}
                </p>
                <button className="btn  banner-btn">{data.btnText}</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Banner;

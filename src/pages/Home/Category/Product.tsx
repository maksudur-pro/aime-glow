import products from "../../../assets/data/products.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";

const Product = () => {
  return (
    <div className="py-5 my-5">
      <div className="text-center">
        <h1 className="font-semibold text-3xl">Our Featured Products</h1>
        <p className="text-gray-500 mt-2">Get the skin you want to feel</p>
      </div>
      <div className="p-5">
        <Swiper
          slidesPerView={1.5}
          spaceBetween={20}
          modules={[Navigation]}
          navigation={{
            nextEl: "product-swiper-next",
            prevEl: "product-swiper-prev",
          }}
          breakpoints={{
            320: { slidesPerView: 1.5, spaceBetween: 10 }, // Small mobile
            480: { slidesPerView: 1.5, spaceBetween: 10 }, // Large mobile
            640: { slidesPerView: 1.5, spaceBetween: 15 }, // Small tablet
            768: { slidesPerView: 2, spaceBetween: 15 }, // Tablet
            900: { slidesPerView: 3, spaceBetween: 20 }, // Small laptop
            1024: { slidesPerView: 3.5, spaceBetween: 20 }, // Laptop
            1200: { slidesPerView: 4, spaceBetween: 25 }, // Large desktop
            1400: { slidesPerView: 4, spaceBetween: 30 }, // Extra large desktop
          }}
          className="mt-4 relative swiper ">
          {products
            .filter((product) => product.id >= 5 && product.id <= 10)
            .map((product) => (
              <SwiperSlide key={product.id}>
                <div className="relative">
                  <div className="w-full relative overflow-hidden">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-full"
                      loading="lazy"
                    />
                    <button
                      aria-label="Favorites"
                      className="absolute top-2 right-2 cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-gray-700 hover:text-black">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.362 5.636a5.25 5.25 0 00-7.424 0L12 
                 7.574l-1.938-1.938a5.25 5.25 0 10-7.424 
                 7.424L12 21.75l9.362-9.362a5.25 5.25 
                 0 000-7.424z"
                        />
                      </svg>
                    </button>
                    <div className="min-w-12 absolute top-2 left-1.5 bg-[#899f87] text-white py-1.5 px-2 uppercase text-center text-[10px]">
                      {product?.tag}
                    </div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                      <button className="text-[14px] md:text-[16px] lg:text-[16px] h-10 md:h-12 lg:h-12 w-[200px] md:w-[260px] lg:w-[260px] bg-white text-[#808080] font-semibold uppercase hover:bg-[#899f87] hover:text-white cursor-pointer">
                        Add to cart
                      </button>
                    </div>
                  </div>
                  <div className="pt-3.5">
                    <h1 className="uppercase">{product.name}</h1>
                    <div className="rating rating-xs">
                      {Array.from({ length: 5 }, (_, i) => (
                        <input
                          key={i}
                          type="radio"
                          name={`rating-${product.id}`}
                          className={`mask mask-star-2 ${
                            i < product.rating ? "bg-orange-400" : "bg-gray-300"
                          }`}
                          aria-label={`${i + 1} star`}
                          checked={i < product.rating}
                          readOnly
                        />
                      ))}
                    </div>

                    <h2 className="text-[#899f87]">${product.price}</h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Product;
//59.43

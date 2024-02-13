import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import bannerOne from "../assets/banner/bannerImgOne.webp";
import bannerTwo from "../assets/banner/bannerImgTwo.webp";
import bannerThree from "../assets/banner/bannerImgThree.webp";

function SaleProducts() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2750,
        disableOnInteraction: false,
      }}
      pagination={false}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={bannerOne} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={bannerTwo} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={bannerThree} />
      </SwiperSlide>
    </Swiper>
  );
}

export default SaleProducts;

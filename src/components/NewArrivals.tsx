import { TbGitCompare } from "react-icons/tb";
import { FaCartShopping } from "react-icons/fa6";
import { IoArrowRedoSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import { Item } from '../types'

// export type Item = {
//   name: string;
//   price: number;
// }

// interface Item {
//   img: string;
//   name: string;
//   color: string;
//   id: number;
// }

type Item = {
  title: string;
  price: number;
  description: string;
  category: string;
  id: number;
  image: string;
  rating: object;
};

function newArrivals({ fetchedData }: { fetchedData: Item[] }) {
  if (!fetchedData) {
    return <p>no new arrivals</p>;
  }
  const newArrivalsData = fetchedData.slice(14, 19);
  return (
    <Swiper
      slidesPerView={1}
      navigation={true}
      spaceBetween={10}
      pagination={true}
      breakpoints={{
        540: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {newArrivalsData.map((item) => {
        const { image, title, id, price } = item;
        return (
          <SwiperSlide key={id}>
            <div className="flex flex-col justify-evenly items-center mt-1 bg-white relative mb-8 p-4 h-[300px] text-center">
              <img
                src={image}
                className="max-h-[200px] w-8/12 mb-4
                rounded-xl"
              />
              <p className=" mb-1 text-xs md:text-sm">{title}</p>
              <p className=" mb-1 text-xs md:text-sm">Price: €{price}</p>
              <div className="w-full h-4/12 flex flex-col justify-between items-end  absolute top-30 right-1 bg-white opacity-0  hover:opacity-100 hover:text-gray-800">
                <div className="w-full flex justify-end items-center  gap-3 border border-b-[1px] text-gray-500 hover:text-black hover:font-medium">
                  <p>Compare</p>
                  <TbGitCompare />
                </div>
                <div className="w-full flex justify-end items-center gap-3 border border-b-[1px] text-gray-500 hover:text-black hover:font-medium">
                  <p>Add to Cart</p>
                  <FaCartShopping />
                </div>
                <div className="w-full flex justify-end items-center gap-3 border border-b-[1px] text-gray-500 hover:text-black hover:font-medium">
                  <p>View Details</p>
                  <IoArrowRedoSharp />
                </div>
                <div className=" w-full flex justify-end items-center gap-3 border border-b-[1px] text-gray-500 hover:text-black hover:font-medium">
                  <p>Add to Wish List</p>
                  <FaHeart />
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default newArrivals;

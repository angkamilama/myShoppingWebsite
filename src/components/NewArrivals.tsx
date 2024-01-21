import newArrOne from "../assets/newArrival/newArrOne.webp";
import newArrTwo from "../assets/newArrival/newArrTwo.webp";
import newArrThree from "../assets/newArrival/newArrThree.webp";
import newArrFour from "../assets/newArrival/newArrFour.webp";
import newArrFive from "../assets/newArrival/newArrFive.jpg";
import newArrSix from "../assets/newArrival/newArrSix.jpg";
import { TbGitCompare } from "react-icons/tb";
import { FaCartShopping } from "react-icons/fa6";
import { IoArrowRedoSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function newArrivals() {
  const newArrivals = [
    {
      name: "Round Table Clock",
      price: "$40.00",
      color: "Black",
      img: newArrOne,
      id: 1,
    },
    {
      name: "Smart Watch",
      price: "$250.00",
      color: "Black",
      img: newArrTwo,
      id: 2,
    },
    {
      name: "Cloth Basket",
      price: "$80.00",
      color: "Mixed",
      img: newArrThree,
      id: 3,
    },
    {
      name: "Funny toys for babies",
      price: "$60.00",
      color: "Mixed",
      img: newArrFour,
      id: 4,
    },
    {
      name: "Jacket for boys",
      price: "$50.00",
      color: "Brown",
      img: newArrFive,
      id: 5,
    },
    {
      name: "Mountain Jacket",
      price: "$155.00",
      color: "Red",
      img: newArrSix,
      id: 6,
    },
  ];

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
      modules={[Pagination]}
      className="mySwiper"
    >
      {newArrivals.map((item) => {
        return (
          <SwiperSlide>
            <div
              key={item.id}
              className="flex flex-col justify-center items-center  mt-1 bg-gray-100 relative mb-8 p-0"
            >
              <img
                src={item.img}
                className="max-h-[250px] w-10/12 mb-4
                rounded-xl"
              />
              <p className=" mb-1">{item.name}</p>
              <p className=" mb-1">{item.price}</p>
              <p className=" mb-7">{item.color}</p>
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

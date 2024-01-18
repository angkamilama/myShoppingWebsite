import { useEffect, useState, useRef } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { FaCaretDown } from "react-icons/fa";
import bannerOne from "../assets/banner/bannerImgOne.webp";
import bannerTwo from "../assets/banner/bannerImgTwo.webp";
import bannerThree from "../assets/banner/bannerImgThree.webp";
import saleImgOne from "../assets/sale/saleImgOne.webp";
import saleImgTwo from "../assets/sale/saleImgTwo.webp";
import saleImgThree from "../assets/sale/saleImgThree.webp";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import NewArrivals from "./NewArrivals";
import { FaTruck } from "react-icons/fa";
import { TbReload } from "react-icons/tb";

register();

function Home() {
  const [searchItem, setSearchItem] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      if (counter < 2) {
        setCounter((counter) => counter + 1);
      } else {
        setCounter(0);
      }
      console.log(counter);
    }, 2000);
    return () => clearTimeout(id);
  }, [counter]);

  return (
    <div className="box-border m-0 p-0 font-myFont">
      <div className="w-full h-[100px] flex flex-col justify-evenly items-center bg-slate-200/50  ">
        <div className="flex justify-evenly items-center bg-white w-10/12 rounded-lg mt-6">
          <input
            type="text"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            className="w-11/12 p-3 ml-2 outline-none font-myFont font-thin"
            placeholder=" Search your products here"
          />
          <FaMagnifyingGlass className="mr-4" />
        </div>
      </div>
      <div className="flex justify-start items-start w-full bg-slate-200/50 p-3">
        <IoPersonSharp className="mx-2 " />
        <FaCaretDown className="mr-2" />
        <RiShoppingCart2Fill className="mx-4" />
      </div>

      {/* <div
        className={`${
          counter === 0 ? "bg-bannerOne bg-center bg-[12] " : "bg - slate - 400"
        } ${
          counter === 1
            ? "bg-bannerTwo  bg-cover bg-center "
            : "bg - slate - 400"
        } 
          ${
            counter === 2
              ? "bg-bannerThree bg-cover bg-center"
              : "bg - slate - 400"
          } w-full h-52 flex flex-col justify-center items-start  border border-red-500 `}
      >
        <div className="h-8 flex justify-between  w-[35px] ">
          <div
            className={`${counter === 0 ? "visible" : "invisible"} self-center`}
          >
            {counter + 1}
          </div>
          <div
            className={`${
              counter === 0 ? "bg-slate-500" : "bg-white"
            }  border border-white  w-1.5`}
          ></div>
        </div>
        <div className="h-8 flex justify-between  w-[35px]">
          <div
            className={`${counter === 1 ? "visible" : "invisible"} self-center`}
          >
            {counter + 1}
          </div>
          <div
            className={`${
              counter === 1 ? "bg-slate-500" : "bg-white"
            }  border border-white  w-1.5`}
          ></div>
        </div>
        <div className="h-8 flex justify-between w-[35px] ">
          <div
            className={`${counter === 2 ? "visible" : "invisible"} self-center`}
          >
            {counter + 1}
          </div>
          <div
            className={`${
              counter === 2 ? "bg-slate-500" : "bg-white"
            }  border border-white  w-1.5`}
          ></div>
        </div>
      </div> */}
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
      <div className=" md:border-b-2 my-3">
        <div className=" flex flex-col justify-center items-center md:flex-row justify-evenly items-center md:p-4 md:mb-4 ">
          <div className="w-2/4  p-1 flex gap-3 border-b-[2px] hover:shadow-md duration-300 items-center md:w-1/4">
            <span className="font-bold">2</span>
            <p>Two year warranty</p>
          </div>
          <div className="w-2/4  p-1 flex gap-3 border-b-[2px] hover:shadow-md duration-300 items-center md:w-1/4">
            <span>
              <FaTruck />
            </span>
            <p>Free Shipping</p>
          </div>
          <div className="w-2/4  p-1 flex gap-3 border-b-[2px] hover:shadow-md duration-300 items-center md:w-1/4">
            <span>
              <TbReload />
            </span>
            <p>Return poicy in 30 days</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mb-9">
        <div className="w-full h-full   p-3">
          <img src={saleImgOne} />
        </div>
        <div className="flex flex-col justify-evenly items-center w-full ">
          <div className="w-full h-1/2  p-3">
            <img src={saleImgTwo} />
          </div>
          <div className="w-full h-1/2 p-3">
            <img src={saleImgThree} />
          </div>
        </div>
      </div>
      <div className="p-2">
        <h1>NEW Arrivals</h1>
        <div className="w-full h-[500px] flex justify-evenly items-center ">
          <NewArrivals />
        </div>
      </div>
    </div>
  );
}

export default Home;

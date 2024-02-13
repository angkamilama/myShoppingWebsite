import { Item, Product } from "../types/Types";
import { useAppDispatch } from "../redux/store/hook";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { addProduct } from "../redux/Slices/ProductsSlice";

function newArrivals({ fetchedData }: { fetchedData: Item[] }) {
  const dispatch = useAppDispatch();
  if (!fetchedData) {
    return <p>no new arrivals</p>;
  }
  const newArrivalsProduct = fetchedData.slice(12, 19);
  const handleClick = (value: Product) => {
    dispatch(addProduct(value));
  };

  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={10}
      navigation={true}
      pagination={true}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {newArrivalsProduct.map((item) => {
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
              <button
                className="border border-gray-400 p-1 rounded-lg text-xs hover:bg-gray-200 hover:border-gray-800 outline-none"
                onClick={() =>
                  handleClick({ title, image, price, id, count: 1 })
                }
              >
                Add to Cart
              </button>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default newArrivals;

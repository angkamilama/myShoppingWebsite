import { Item, Product } from "../types/Types";
import { useAppDispatch, useAppSelector } from "../redux/store/hook";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { addProduct } from "../redux/Slices/ProductsSlice";
import { AiOutlineCheck } from "react-icons/ai";

function newArrivals({ fetchedData }: { fetchedData: Item[] }) {
  const addedProducts = useAppSelector((state) => state.products);
  const myProducts = addedProducts.products;
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
                rounded-xl hover:scale-105 p-1"
              />
              <p className=" mb-1 text-xs md:text-sm">{title}</p>
              <p className=" mb-1 text-xs md:text-sm">Price: €{price}</p>
              <button
                onClick={() =>
                  handleClick({ title, image, price, id, count: 1 })
                }
              >
                {myProducts.some((product) => product.id === id) ? (
                  <div className="flex items-center justify-between gap-2 p-1">
                    <span>
                      <AiOutlineCheck />
                    </span>
                    <p className="border border-gray-400 p-1 rounded-lg text-xs text-slate-200 bg-lime-700  outline-none">
                      Added
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center justify-between gap-2 p-1">
                    <p className="border border-gray-400 p-1 rounded-lg text-xs hover:bg-gray-500 hover:text-slate-200 outline-none">
                      Add to Cart
                    </p>
                  </div>
                )}
              </button>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default newArrivals;

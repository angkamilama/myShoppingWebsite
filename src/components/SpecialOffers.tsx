import { Product, Item } from "../types/Types";
import { useAppDispatch, useAppSelector } from "../redux/store/hook";
import { addProduct } from "../redux/Slices/ProductsSlice";
import { AiOutlineCheck } from "react-icons/ai";

function SpecialOffers({ fetchedData }: { fetchedData: Item[] }) {
  const addedProducts = useAppSelector((state) => state.products);
  const myProducts = addedProducts.products;
  const dispatch = useAppDispatch();

  const specialOfferProducts = fetchedData.slice(9, 13);

  const handleClick = (value: Product) => {
    dispatch(addProduct(value));
  };

  return (
    <div className=" flex flex-col justify-evenly items-center text-center md:flex-row p-2 mb-2">
      {specialOfferProducts.map((item) => {
        const { title, price, image, id } = item;
        return (
          <div
            key={id}
            className="border border-grey-600 flex flex-col justify-evenly items-center md:w-[200px] md:border-none md:flex md:flex-wrap md:justify-evenly mb-5  p-3"
          >
            <img
              src={image}
              className="w-[150px] h-[125px] mx-auto hover:scale-105 p-1"
            />
            <div className="p-5">
              <p>€{price}</p>
              <p>{title}</p>
            </div>
            <button
              onClick={() => handleClick({ title, image, price, id, count: 1 })}
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
        );
      })}
    </div>
  );
}

export default SpecialOffers;

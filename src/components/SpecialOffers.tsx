import { Product, Item } from "../types/Types";
import { useAppDispatch } from "../redux/store/hook";
import { addProduct } from "../redux/Slices/ProductsSlice";
import { useState } from "react";

function SpecialOffers({ fetchedData }: { fetchedData: Item[] }) {
  const [productIsAdded, setProductIsAdded] = useState<number[]>([]);
  const dispatch = useAppDispatch();

  const specialOfferProducts = fetchedData.slice(9, 13);

  const handleClick = (value: Product) => {
    dispatch(addProduct(value));
    setProductIsAdded([...productIsAdded, value.id]);
  };

  return (
    <div className=" flex flex-col justify-evenly items-center text-center md:flex-row p-2 mb-2">
      {specialOfferProducts.map((item) => {
        const { title, price, image, id } = item;
        return (
          <div
            key={id}
            className="border border-grey-600 flex flex-col justify-evenly items-center md:w-[200px] md:border-none md:flex md:flex-wrap md:justify-evenly mb-5 rounded-2xl"
          >
            <img src={image} className="w-1/2 mx-auto" />
            <div className="p-5">
              <p>€{price}</p>
              <p>{title}</p>
            </div>
            <button
              onClick={() => handleClick({ title, image, price, id, count: 1 })}
            >
              {productIsAdded.includes(id) ? (
                <div className="flex items-center justify-between gap-2 p-1">
                  <p className="border border-gray-400 p-1 rounded-lg text-xs text-slate-200 bg-lime-700  outline-none">
                    Added
                  </p>
                </div>
              ) : (
                <div className="flex items-center justify-between gap-2 p-1">
                  <p className="border border-gray-400 p-1 rounded-lg text-xs hover:bg-gray-300 hover:border-gray-800 outline-none">
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

import { Product, Item } from "../types/Types";
import { useAppDispatch } from "../redux/store/hook";
import { addProduct } from "../redux/Slices/ProductsSlice";
import { useState } from "react";

function Bestseller({ fetchedData }: { fetchedData: Item[] }) {
  const [productIsAdded, setProductIsAdded] = useState<number[]>([]);
  const dispatch = useAppDispatch();
  const bestSellersProducts = fetchedData.slice(0, 6);

  const handleClick = (value: Product) => {
    dispatch(addProduct(value));
    setProductIsAdded([...productIsAdded, value.id]);
  };
  return (
    <div className="flex flex-col  md:flex-row  justify-evenly items-center md:flex-wrap gap-3">
      {bestSellersProducts.map((item) => {
        const { title, price, image, id } = item;
        return (
          <div
            key={id}
            className=" border border-grey-600 flex flex-col  md:basis-1/4 justify-evenly items-center gap-4 my- p-2 w-full"
          >
            <img src={image} className="w-[200px] h-[200px]" />
            <p>{title}</p>
            <p>€{price}</p>
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

export default Bestseller;

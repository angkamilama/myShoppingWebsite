import { addProduct } from "../redux/Slices/ProductsSlice";
import { useAppDispatch, useAppSelector } from "../redux/store/hook";
import { Item, Product } from "../types/Types";
import { AiOutlineCheck } from "react-icons/ai";

function SaleProductTwo({ fetchedData }: { fetchedData: Item[] }) {
  const addedProducts = useAppSelector((state) => state.products);
  const myProducts = addedProducts.products;
  const dispatch = useAppDispatch();
  const saleProductTwoArray = fetchedData.slice(4, 9);

  const products = saleProductTwoArray.map(({ image, price, title, id }) => {
    return { price, image, title, id };
  });

  const handleClick = (value: Product) => {
    dispatch(addProduct(value));
  };

  return (
    <div className="flex flex-col  md:flex-row  justify-evenly items-center md:flex-wrap gap-3">
      {products.map((item) => {
        const { title, price, image, id } = item;
        return (
          <div
            key={id}
            className=" border border-grey-600 flex flex-col  md:basis-1/4 justify-evenly items-center gap-4 my- p-2 w-full"
          >
            <img src={image} className="w-[200px] h-[150px]" />
            <p>{title}</p>
            <p>€{price}</p>
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

export default SaleProductTwo;

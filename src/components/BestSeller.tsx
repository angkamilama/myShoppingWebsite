import { Product, Item } from "../types/Types";
import { useAppDispatch } from "../redux/store/hook";
import { addProduct } from "../redux/Slices/ProductsSlice";

function Bestseller({ fetchedData }: { fetchedData: Item[] }) {
  const dispatch = useAppDispatch();
  const bestSellersProducts = fetchedData.slice(0, 6);
  const handleClick = (value: Product) => {
    dispatch(addProduct(value));
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
              className="border border-gray-400 p-1 rounded-lg text-xs hover:bg-gray-200 hover:border-gray-800 outline-none"
              onClick={() => handleClick({ title, image, price, id, count: 1 })}
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Bestseller;

import { addProduct } from "../redux/Slices/ProductsSlice";
import { useAppDispatch } from "../redux/store/hook";
import { Item, Product } from "../types/Types";

function SaleProductTwo({ fetchedData }: { fetchedData: Item[] }) {
  const dispatch = useAppDispatch();

  const saleProductTwoArray = fetchedData.slice(4, 9);

  const products = saleProductTwoArray.map(({ image, price, title, id }) => {
    return { price, image, title, id };
  });

  const handleClick = (value: Product) => {
    dispatch(addProduct(value));
  };

  return (
    <ul className="flex flex-col justify-evenly items-center mx-auto md:flex-row md:w-full gap-4">
      {products.map(({ image, title, price, id }) => {
        return (
          <li
            key={id}
            className=" border border-gray-200 p-2 flex flex-col justify-evenly items-center h-[200px] w-full mb-3 rounded-2xl md:max-w-[300px]"
          >
            <img src={image} className="h-1/2 w-2/6 mx-auto" />
            <p className="text-xs md:text-sm">Price: €{price}</p>
            <p className="text-xs md:text-xs">{title}</p>
            <button
              className="border border-gray-400 p-1 rounded-lg text-xs hover:bg-gray-200 hover:border-gray-800 outline-none"
              onClick={() => handleClick({ title, image, price, id, count: 1 })}
            >
              Add to Cart
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default SaleProductTwo;

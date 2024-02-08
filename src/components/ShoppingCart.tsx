import { useAppSelector, useAppDispatch } from "../redux/store/hook";
import {
  increment,
  decrement,
  deleteProduct,
} from "../redux/Slices/ProductsSlice";

function ShoppingCart() {
  const addedProducts = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const handleIncrement = (value: string) => {
    dispatch(increment(value));
  };
  const handleDecrement = (value: string) => {
    dispatch(decrement(value));
  };

  const removeProduct = (value: string) => {
    dispatch(deleteProduct(value));
  };

  console.log(addedProducts.products);

  return (
    <div className="w-5/6 mx-auto mt-5 flex flex-col md:w-3/6">
      {addedProducts.products.map((item) => {
        const { image, price, title, id, count } = item;
        return (
          <div key={id} className="flex justify-around items-center mb-5">
            <div
              className=" border border-2 border-gray-200 text-red-700 font-bold text-xl px-1"
              onClick={() => removeProduct(id)}
            >
              X
            </div>
            <div className=" border border-gray-200 p-2 flex flex-col justify-evenly items-center w-3/4 mb-3 rounded-2xl md:max-w-[300px] h-[250px]">
              <div className="flex justify-evenly items-center gap-4 ">
                <img
                  src={image}
                  className=" h-[125px] w-2/6 mx-auto basis-1/2"
                />
                <div className="flex flex-col justify-evenly items-center w-full h-full">
                  <div className="text-xs md:text-xs basis-1/2">{title}</div>
                  <p className="text-xs md:text-sm">price: €{price}</p>
                </div>
              </div>
              <div className="flex justify-evenly items-center w-full ">
                <button
                  className="bg-gray-100/20 border border-gray-400  w-[30px] h-[25px]"
                  onClick={() => handleDecrement(id)}
                >
                  -
                </button>
                <div>{count}</div>
                <button
                  className="bg-gray-100/20 border border-gray-400  w-[30px] h-[25px]"
                  onClick={() => handleIncrement(id)}
                >
                  +
                </button>
                <p className="text-xs md:text-sm">
                  Total: {count * parseFloat(price)}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ShoppingCart;

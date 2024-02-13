import { useAppSelector, useAppDispatch } from "../redux/store/hook";
import {
  increment,
  decrement,
  deleteProduct,
} from "../redux/Slices/ProductsSlice";
import emptyCart from "../assets/emptyCart.png";
import { useNavigate } from "react-router-dom";

function ShoppingCart() {
  const navigate = useNavigate();
  const addedProducts = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  let grossCost = 0;
  console.log(addedProducts.products);

  const productCost = () => {
    const productsArray = addedProducts.products;
    grossCost = productsArray.reduce(
      (acc, item) => acc + item.count * item.price,
      0
    );
    return grossCost;
  };

  const handleIncrement = (id: number) => {
    dispatch(increment(id));
    productCost();
    console.log(addedProducts.products.some((product) => product.count === 0));
  };
  const handleDecrement = (id: number) => {
    if (addedProducts.products.some((product) => product.count === 0)) {
      removeProduct(id);
    } else {
      dispatch(decrement(id));
    }
  };

  const removeProduct = (id: number) => {
    dispatch(deleteProduct(id));
  };

  const handleNavigate = () => {
    navigate("/");
  };

  return addedProducts.products.length === 0 ? (
    <div className="w-5/6 mx-auto mt-8 md:w-3/6 mb-7 flex flex-col justify-center items-center">
      <img src={emptyCart} />
      <div className="flex flex-col justify-center items-center gap-4 w-2/3 border border-gray-200 p-2 rounded-md shadow-xl">
        <p className="text-xl font-bold">YOUR CART FEELS LONELY</p>
        <p className="text-center">
          Your Shopping cart lives to serve. Give it a purpose-fill it with our
          products and make it happy.
        </p>
        <button
          className="bg-gray-800 text-slate-300 rounded-md p-2 mb-5 shadow-md"
          onClick={handleNavigate}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  ) : (
    <div className="w-5/6 mx-auto mt-8 flex flex-col justify-center items-end md:w-3/6 gap-5">
      <h1 className="text-3xl font-semibold place-self-start">Shopping Cart</h1>
      <div>
        {addedProducts.products.map((item) => {
          const { image, price, title, id, count } = item;
          return (
            <div key={id} className="flex justify-around items-center mb-5">
              <div
                className=" border border-2 border-gray-100  hover:text-red-700 font-bold text-xl px-1"
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
                  <p className="text-xs md:text-sm">Total: {count * price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col border border-gray-300 w-3/4 mx-left">
        <div className="flex justify-between items-center p-2">
          <p>Cost</p>
          <p className="font-bold">{productCost()}</p>
        </div>
        <div className="flex justify-between items-center p-2">
          <p>Shipping Charge</p>
          <p className="font-bold">4.99</p>
        </div>
        <div className="flex justify-between items-center p-2">
          <p>Total</p>
          <p className="font-bold">{productCost() + 4.99}</p>
        </div>
      </div>
      <div>
        <p className="bg-gray-950/75 text-slate-100 w-full h-[50px] p-3 mb-6 hover:bg-gray-800">
          Proceed to Checkout
        </p>
      </div>
    </div>
  );
}

export default ShoppingCart;

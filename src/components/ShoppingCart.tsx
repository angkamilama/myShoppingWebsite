import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../redux/store/hook";

function ShoppingCart() {
  const [itemCount, setItemCount] = useState<number>(0);
  const count = useAppSelector((state) => state.products);

  const handleItem = (value: string) => {
    if (itemCount > 0 && value === "minus") {
      setItemCount((itemCount) => itemCount - 1);
    }
    if (value === "add") {
      setItemCount((itemCount) => itemCount + 1);
    }
    return;
  };
  console.log(count.products);
  console.log(itemCount);

  return (
    <div className="w-full mt-5 flex flex-col">
      {count.products.map((item) => {
        const { image, price, title, id } = item;
        return (
          <div
            key={id}
            className=" border border-gray-200 p-2 flex flex-col justify-evenly items-center w-full mb-3 rounded-2xl md:max-w-[300px] h-[250px]"
          >
            <div className="flex justify-evenly items-center gap-4 ">
              <img src={image} className=" h-[125px] w-2/6 mx-auto basis-1/2" />
              <div className="flex flex-col justify-evenly items-center w-full h-full">
                <div className="text-xs md:text-xs basis-1/2">{title}</div>
                <p className="text-xs md:text-sm">price: €{price}</p>
              </div>
            </div>
            <div className="flex justify-evenly items-center w-full ">
              <button
                className="bg-gray-100/20 border border-gray-400  w-[30px] h-[25px]"
                onClick={() => handleItem("minus")}
              >
                -
              </button>
              <div>{itemCount}</div>
              <button
                className="bg-gray-100/20 border border-gray-400  w-[30px] h-[25px]"
                onClick={() => handleItem("add")}
              >
                +
              </button>
              <p>Total</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ShoppingCart;

import { bestSellers } from "./Utilities";

// pro tip - types outside of the React component
// pro tip - types should be capitalised e.g. User, Todo, ItemType
// pro tip - you dont need to put "type" after a type e.g. User is better than UserType
// interface Item {
//   img: string;
//   name: string;
//   color: string;
// }
type Item = {
  title: string;
  price: number;
  description: string;
  category: string;
  id: number;
  image: string;
  rating: object;
};
function Bestseller({ fetchedData }: { fetchedData: Item[] }) {
  const bestSellersProducts = fetchedData.slice(0, 4);
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
          </div>
        );
      })}
    </div>
  );
}

export default Bestseller;

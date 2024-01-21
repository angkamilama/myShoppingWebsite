import bestSellerOne from "../assets/bestSeller/bestSellerOne.webp";
import bestSellerTwo from "../assets/bestSeller/bestSellerTwo.webp";
import bestSellerThree from "../assets/bestSeller/bestSellerThree.webp";
import bestSellerFour from "../assets/bestSeller/bestSellerFour.webp";
import bestSellerFive from "../assets/bestSeller/bestSellerFive.jpg";
import { v4 as uuidv4 } from "uuid";

function Bestseller() {
  interface itemType {
    img: string;
    name: string;
    color: string;
  }
  const bestSellers = [
    { img: bestSellerOne, name: "Flower Base", color: "Black and White" },
    { img: bestSellerTwo, name: "New Backpack", color: "Gray" },
    { img: bestSellerThree, name: "House Material", color: "Mixed" },
    { img: bestSellerFour, name: "Travel Bag", color: "Black" },
    { img: bestSellerFive, name: "Shoe", color: "Gray" },
  ];

  return (
    <div className="flex flex-col  md:flex-row  justify-evenly items-center md:flex-wrap gap-3">
      {bestSellers.map((item: itemType) => {
        const myuuid = uuidv4();
        return (
          <div
            key={myuuid}
            className=" border border-grey-600 flex flex-col  md:basis-1/4 justify-evenly items-center gap-4 my-5"
          >
            <img src={item.img} className="w-full h-[300px]" />
            <p>{item.name}</p>
            <p className="mb-2">{item.color}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Bestseller;

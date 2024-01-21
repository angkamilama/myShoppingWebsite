import specialOfferOne from "../assets/specialOffer/spfOne.webp";
import specialOfferTwo from "../assets/specialOffer/spfTwo.webp";
import specialOfferThree from "../assets/specialOffer/spfThree.webp";
import specialOfferFour from "../assets/specialOffer/spfFour.webp";
import { v4 as uuidv4 } from "uuid";

function SpecialOffers() {
  const specialOffers = [
    { img: specialOfferOne, name: "Cap for Boys", color: "Black and White" },
    { img: specialOfferTwo, name: "Tea Table", color: "Gray" },
    { img: specialOfferThree, name: "Headphone", color: "Mixed" },
    { img: specialOfferFour, name: "Sun glasses", color: "Black" },
  ];

  return (
    <div className="flex flex-col justify-evenly items-center gap-7 md:flex-row">
      {specialOffers.map((item) => {
        const myUuid = uuidv4();
        return (
          <div key={myUuid} className="border border-gray-300 ">
            <img src={item.img} />
            <div className="p-5">
              <h2 className="text-xl font-bold mb-2">{item.name}</h2>
              <p>{item.color}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SpecialOffers;

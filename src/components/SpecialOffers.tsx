type Item = {
  title: string;
  price: number;
  description: string;
  category: string;
  id: number;
  image: string;
  rating: object;
};
function SpecialOffers({ fetchedData }: { fetchedData: Item[] }) {
  const specialOfferProducts = fetchedData.slice(9, 13);

  return (
    <div className=" flex flex-col justify-evenly items-center text-center md:flex-row p-2">
      {specialOfferProducts.map((item) => {
        const { title, price, image, id } = item;
        return (
          <div
            key={id}
            className="border-dotted border-2 border-gray-300 flex flex-col justify-evenly items-center mb-5 rounded-2xl"
          >
            <img src={image} className="w-1/2 mx-auto" />
            <div className="p-5">
              <p>€{price}</p>
              <p>{title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SpecialOffers;

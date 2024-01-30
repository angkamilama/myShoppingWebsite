type Item = {
  title: string;
  price: number;
  description: string;
  category: string;
  id: number;
  image: string;
  rating: object;
};

function SaleProductTwo({ fetchedData }: { fetchedData: Item[] }) {
  const saleProductTwoArray = fetchedData.slice(4, 9);
  const products = saleProductTwoArray.map(
    ({ image, price, description, title, id }) => {
      return { price, image, title, id };
    }
  );
  //   const products = saleProductTwoArray.map((item) => {
  //     const p = item.price;
  //     const image = item.image;
  //     return { price: p, image: image };
  //   });

  return (
    <div className="flex flex-col justify-evenly items-center mx-auto md:flex-row md:w-full gap-4">
      {products.map(({ image, title, price, id }) => {
        return (
          <div
            key={id}
            className=" border border-gray-200 p-2 flex flex-col justify-evenly items-center h-[200px] w-full mb-3 rounded-2xl md:max-w-[300px]"
          >
            <img src={image} className="h-1/2 w-2/6 mx-auto" />
            <p className="text-xs md:text-sm">Price: €{price}</p>
            <p className="text-xs md:text-xs">{title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default SaleProductTwo;

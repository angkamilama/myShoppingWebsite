import { useEffect, useState } from "react";
import { register } from "swiper/element/bundle";
import productOfTheYear from "../assets/productOfTheYear.jpg";
import NewArrivals from "./NewArrivals";
import BestSeller from "./BestSeller";
import SaleProductOne from "./SaleProductOne";
import SaleProductTwo from "./SaleProductTwo";
import ContactForm from "./ContactForm";
import SpecialOffers from "./SpecialOffers";
import { FaTruck } from "react-icons/fa";
import { TbReload } from "react-icons/tb";
import { Item } from "../types/Types";

register();

function Home() {
  const [fetchedData, setFetchedData] = useState<Item[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setFetchedData(data));
  }, []);

  return (
    <div className="box-border m-0 p-0 font-myFont">
      <div className="p-6" id="main-body">
        <SaleProductOne />
        <div className=" md:border-b-2 my-3">
          <div className=" flex flex-col justify-center  md:flex-row md:justify-evenly items-center mb-7 md:p-4 md:mb-4 ">
            <div className="w-3/4  p-1 flex gap-3 border-b-[2px] hover:shadow-md duration-300 items-center md:w-1/4">
              <span className="font-bold">2</span>
              <p>Two year warranty</p>
            </div>
            <div className="w-3/4  p-1 flex gap-3 border-b-[2px] hover:shadow-md duration-300 items-center md:w-1/4">
              <span>
                <FaTruck />
              </span>
              <p>Free Shipping</p>
            </div>
            <div className="w-3/4  p-1 flex gap-3 border-b-[2px] hover:shadow-md duration-300 items-center md:w-1/4">
              <span>
                <TbReload />
              </span>
              <p>Return poicy in 30 days</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-8 text-center">
          <h2 className="text-2xl mb-3  p-2 font-bold w-fit mx-auto">Sales</h2>
          <SaleProductTwo fetchedData={fetchedData} />
        </div>
        <div className="text-center">
          <h1 className="text-2xl mb-3  p-2 font-bold w-fit mx-auto">
            New Arrivals
          </h1>
          <div className="w-full flex justify-evenly items-center mb-6">
            <NewArrivals fetchedData={fetchedData} />
          </div>
        </div>
        <div className="mb-6 text-center">
          <h1 className="text-2xl mb-3  p-2 font-bold w-fit mx-auto">
            Our BestSellers
          </h1>
          <BestSeller fetchedData={fetchedData} />
        </div>
        <div className="flex justify-evenly items-center w-full h-80  bg-slate-400/25 mb-9 ">
          <img
            src={productOfTheYear}
            className="h-full w-2/6 opacity-90 bg-slate-400/25 hidden md:inline-block"
          />
          <div className="h-80 w-full md:w-4/6 flex flex-col justify-evenly items-start md:ml-20 p-4">
            <h1 className="text-3xl font-bold">Product of the Year</h1>
            <p className="text-pretty">
              This is the most ordered and well known product that has been hand
              chosen by our valued customers for the year 2023.
            </p>
            <button className="bg-slate-700 text-white font-bold px-7 py-2 rounded-lg hover:bg-slate-800">
              Shop Now
            </button>
          </div>
        </div>
        <div className="text-center mb-4">
          <h1 className="text-2xl mb-3  p-2 font-bold w-fit mx-auto">
            Special Offers
          </h1>
          <SpecialOffers fetchedData={fetchedData} />
        </div>
        <div>
          <h1 className="text-xl text-center font-bold mb-3">
            More About Orebi Shop
          </h1>
          <div className=" flex flex-col items-center justify-evenly md:flex-row md:justify-evenly md:items-center">
            <ContactForm />
            <div className=" w-full md:w-5/12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.393136774468!2d7.013883000000008!3d51.450938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8c2ca41f0c789%3A0x9844523fa2292705!2sEssen%20Central%20Station!5e0!3m2!1sen!2sde!4v1706738785254!5m2!1sen!2sde"
                width="600"
                height="570"
                loading="lazy"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

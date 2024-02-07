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
import { BiLogoWhatsappSquare } from "react-icons/bi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import paymentMethod from "../assets/paymentMethod.webp";

register();
type Item = {
  title: string;
  price: number;
  description: string;
  category: string;
  id: number;
  image: string;
  rating: object;
};

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
        <SaleProductOne fetchedData={fetchedData} />
        <div className=" md:border-b-2 my-3">
          <div className=" flex flex-col justify-center items-center md:flex-row justify-evenly items-center mb-7 md:p-4 md:mb-4 ">
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
        <div className="flex flex-col mb-6 text-center">
          <h2 className="text-2xl mb-5">Sales</h2>
          <SaleProductTwo fetchedData={fetchedData} />
        </div>
        <div className="text-center">
          <h1 className="mb-3 text-2xl">New Arrivals</h1>
          <div className="w-full flex justify-evenly items-center mb-6">
            <NewArrivals fetchedData={fetchedData} />
          </div>
        </div>
        <div className="mb-6 text-center">
          <h1 className="mb-6 text-2xl">Our BestSellers</h1>
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
          <h1 className="text-2xl mb-3">Special Offers</h1>
          <SpecialOffers fetchedData={fetchedData} />
        </div>
        <div>
          <h1 className="text-xl text-center font-bold">
            More About Orebi Shop
          </h1>
          <ContactForm />
        </div>
      </div>
      <div className="bg-slate-200/50" id="footer">
        <div className="w-full md:w-1/2 flex justify-between items-center p-6  mb-4 mx-auto">
          <div>
            <h2 className="text-lg font-bold mb-3">Shop</h2>
            <div>
              <p>Accessories</p>
              <p>Clothes</p>
              <p>Electronics</p>
              <p>Home appliances</p>
              <p>New Arrivals</p>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-3">Your Account</h2>
            <div>
              <p>Profile</p>
              <p>Orders</p>
              <p>Address</p>
              <p>Account Details</p>
              <p>Payment Options</p>
            </div>
          </div>
        </div>
        <div className="p-4 text-center ">
          <h2 className="font-bold text-lg mb-4">
            Subscribe to our Newsletter
          </h2>
          <div>
            <input
              className="w-10/12 bg-white border-b-[2px] block outline-none mb-5 w-2/3 md:w-1/3 mx-auto text-center"
              placeholder="Insert your email...."
            />
            <button className="bg-white px-3 py-1 border border-gray-300 hover:bg-gray-100 hover:border-gray-400">
              Subscribe
            </button>
          </div>
        </div>
        <div id="payment-method">
          <img
            src={paymentMethod}
            className="w-8/12 md:w-4/12 h-[80px] mx-auto"
          />
        </div>
        <div className="flex text-center justify-evenly items-center mt-4 w-8/12 md:w-4/12 p-2 mx-auto">
          <h1>Follow us on:</h1>
          <div className="flex  justify-evenly items-center w-1/2 text-xl">
            <BiLogoWhatsappSquare />
            <FaFacebookSquare />
            <FaSquareInstagram />
            <FaTwitterSquare />
            <FaLinkedin />
            <IoLogoTiktok />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

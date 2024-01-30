import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { FaCaretDown } from "react-icons/fa";
import { register } from "swiper/element/bundle";
import productOfTheYear from "../assets/productOfTheYear.jpg";
import NewArrivals from "./NewArrivals";
import BestSeller from "./BestSeller";
import SaleProductOne from "./SaleProductOne";
import SaleProductTwo from "./SaleProductTwo";
import ContactForm from "./ContactForm";
import { FaTruck } from "react-icons/fa";
import { TbReload } from "react-icons/tb";
import SpecialOffers from "./SpecialOffers";

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

interface ContactDetail {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  message: string;
}

function Home() {
  const [searchItem, setSearchItem] = useState("");
  const [fetchedData, setFetchedData] = useState<Item[]>([]);
  const [contactDetail, setContactDetail] = useState<ContactDetail>({
    firstName: "",
    lastName: "",
    email: "",
    phone: 0,
    message: "",
  });

  useEffect(() => {
    function getData() {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => setFetchedData(data));
    }
    return () => getData();
  }, []);

  const handleSubmit = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="box-border m-0 p-0 font-myFont">
      <div className="w-full h-[100px] flex flex-col justify-evenly items-center bg-slate-200/50  ">
        <div className="flex justify-evenly items-center bg-white w-10/12 rounded-lg mt-6">
          <input
            type="text"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            className="w-11/12 p-3 ml-2 outline-none font-myFont font-thin"
            placeholder=" Search your products here"
          />
          <FaMagnifyingGlass className="mr-4" />
        </div>
      </div>
      <div className="flex justify-start items-start w-full bg-slate-200/50 p-3">
        <IoPersonSharp className="mx-2 " />
        <FaCaretDown className="mr-2" />
        <RiShoppingCart2Fill className="mx-4" />
      </div>
      <div className="p-6">
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
        <div className="text-center">
          <h1 className="text-2xl mb-3">Special Offers</h1>
          <SpecialOffers fetchedData={fetchedData} />
        </div>
        <div>
          <h1 className="mb-4">More About Orebi Shop</h1>
          <div>
            <div className=" border border-red-500 p-3">
              <h1 className="text-left  mb-5">
                GET IN TOUCH WITH US AND WE CAN HELP YOU
              </h1>
              <h1 className="text-left mb-5">
                Come to our store or ask a question right now
              </h1>
              <ContactForm />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

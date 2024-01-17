import orebiLogo from "../assets/orebiLogo.jpg";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Header() {
  const [showNavList, setShowNavList] = useState(false);
  const [showBrandList, setShowBrandList] = useState(false);
  const [showCategoryList, setCategoryList] = useState(false);
  const categoryItems = [
    "new Arrivals",
    "Gadgets",
    "Accessories",
    "Electronics",
    "Others",
  ];
  const BrandItems = ["Adidas", "Samsung", "Logitech", "Apple", "Zara"];
  const handleCategory = () => {
    const categoryList = categoryItems.map((item) => {
      return (
        <div>
          <p className="hover:tracking-wider hover:underline">{item}</p>
        </div>
      );
    });

    return <p>{categoryList}</p>;
  };
  const handleBrand = () => {
    const BrandList = BrandItems.map((item) => {
      return (
        <div>
          <p className="hover:underline hover:tracking-wider">{item}</p>
        </div>
      );
    });

    return <p>{BrandList}</p>;
  };

  return (
    <>
      <header className="  flex flex-col justify-between items-center sm:flex-row p-2">
        <div className="flex w-full justify-between items-center mt-1.5">
          <div>
            <img src={orebiLogo} alt="logo" />
          </div>
          <span className="text-2xl sm:hidden">
            <FaBars onClick={() => setShowNavList(!showNavList)} />
          </span>
        </div>
        <nav
          className={`${
            showNavList ? "inline-block animate-navToggleRight " : " hidden "
          }  w-full absolute left-0 top-0 h-full z-10 bg-gray-800/80 flex justify-start items-start opacity-90 sm:hidden`}
        >
          <div
            className=" w-10/12 p-3 h-full text-white bg-gray-800 "
            id="nav-list "
          >
            <div
              className="flex flex-col justify-start items-start px-3 "
              id="navlistToggle"
            >
              <h1 className="text-3xl mb-4 ">OREBI</h1>
              <ul className="flex flex-col justify-start items-start w-full mb-2 ">
                <NavLink
                  to="/"
                  className="hover:font-bold hover:underline hover:tracking-wide mb-3"
                  onClick={() => setShowNavList(!showNavList)}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/Shop"
                  className="hover:font-bold hover:underline hover:tracking-wide mb-3"
                  onClick={() => setShowNavList(!showNavList)}
                >
                  Shop
                </NavLink>
                <NavLink
                  to="/About"
                  className="hover:font-bold hover:underline hover:tracking-wide mb-3"
                  onClick={() => setShowNavList(!showNavList)}
                >
                  About
                </NavLink>
                <NavLink
                  to="/Contact"
                  className="hover:font-bold hover:underline hover:tracking-wide mb-3"
                  onClick={() => setShowNavList(!showNavList)}
                >
                  Contact
                </NavLink>
              </ul>
              <div className="flex flex-col justify-between items-start w-full mb-6">
                <div className="flex justify-between items-center w-full mb-3">
                  <h1>Shop by Category</h1>
                  <span
                    className="text-2xl"
                    onClick={() => setCategoryList(!showCategoryList)}
                  >
                    {showCategoryList ? "-" : "+"}
                  </span>
                </div>
                <div className="flex ">
                  {showCategoryList ? handleCategory() : ""}
                </div>
              </div>
              <div className="flex flex-col justify-between items-start w-full mb-3">
                <div className="flex justify-between items-center w-full mb-3">
                  <h1>Shop by Brand</h1>
                  <span
                    onClick={() => setShowBrandList(!showBrandList)}
                    className="text-2xl"
                  >
                    {showBrandList ? "-" : "+"}
                  </span>
                </div>
                <div className="flex ">
                  {showBrandList ? handleBrand() : ""}
                </div>
              </div>
            </div>
          </div>
          <div className=" relative text-xl mr-2 mt-2 text-white hover:text-red-500 p-1  border border-2 hover:border-red-500">
            <ImCross onClick={() => setShowNavList(false)} />
          </div>
        </nav>
        <div className="hidden sm:inline-block w-full md:w-[1000px]">
          <ul className=" font-myFont text-right text-gray-600 hover:text-gray-800 p-2">
            <div className="w-20 text-center inline-block">
              <NavLink
                to="/"
                className="text-center  hover:font-bold hover:tracking-wide hover:underline"
              >
                Home
              </NavLink>
            </div>
            <div className="w-20 text-center inline-block">
              <NavLink
                to="/Shop"
                className="text-center hover:font-bold hover:tracking-wide hover:underline"
              >
                Shop
              </NavLink>
            </div>
            <div className="w-20 text-center inline-block">
              <NavLink
                to="/About"
                className="text-center hover:font-bold hover:tracking-wide hover:underline"
              >
                About
              </NavLink>
            </div>
            <div className="w-20 text-center inline-block">
              <NavLink
                to="/Contact"
                className="text-center  hover:font-bold hover:tracking-wide hover:underline"
              >
                Contact
              </NavLink>
            </div>
          </ul>
          {/* <ul className=" w-full box-border borderborder-red-700 flex justify-evenly items-center font-myFont text-right text-gray-600 hover:text-gray-800 p-2">
            <NavLink
              to="/"
              className="text-center  hover:font-bold hover:tracking-wide hover:underline"
            >
              Home
            </NavLink>

            <NavLink
              to="/Shop"
              className="text-center hover:font-bold hover:tracking-wide hover:underline"
            >
              Shop
            </NavLink>

            <NavLink
              to="/About"
              className="text-center hover:font-bold hover:tracking-wide hover:underline"
            >
              About
            </NavLink>

            <NavLink
              to="/Contact"
              className="text-center  hover:font-bold hover:tracking-wide hover:underline"
            >
              Contact
            </NavLink>
          </ul> */}
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Header;

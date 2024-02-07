import orebiLogo from "../assets/orebiLogo.jpg";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { FaCaretDown } from "react-icons/fa";

const Categories = () => {
  const categoryItems = [
    "new Arrivals",
    "Gadgets",
    "Accessories",
    "Electronics",
    "Others",
  ];

  const categoryList = categoryItems.map((item) => {
    return <li className="hover:tracking-wider hover:underline">{item}</li>;
  });

  return <ul>{categoryList}</ul>;
};

function Header() {
  const [showNavList, setShowNavList] = useState(false);
  const [showCategoryList, setCategoryList] = useState(false);
  const [searchItem, setSearchItem] = useState("");

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
                  to="/Cart"
                  className="hover:font-bold hover:underline hover:tracking-wide mb-3"
                  onClick={() => setShowNavList(!showNavList)}
                >
                  Cart
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
                  {showCategoryList ? <Categories /> : ""}
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
                to="/Cart"
                className="text-center hover:font-bold hover:tracking-wide hover:underline"
              >
                Cart
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
        </div>
      </header>
      <div>
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
      </div>
      <Outlet />
    </>
  );
}

export default Header;

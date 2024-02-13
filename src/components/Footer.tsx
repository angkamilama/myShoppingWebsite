import { BiLogoWhatsappSquare } from "react-icons/bi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import paymentMethod from "../assets/paymentMethod.webp";
function Footer() {
  return (
    <div className="bg-slate-200/50" id="footer">
      <div className="w-2/3 md:w-1/2 flex justify-between items-center p-6  mb-4 mx-auto">
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
        <h2 className="font-bold text-lg mb-4">Subscribe to our Newsletter</h2>
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
  );
}

export default Footer;

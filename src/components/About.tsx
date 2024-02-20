import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <div className="mt-7 p-3 mx-auto w-11/12">
      <div>
        <p className="font-bold text-3xl md:text-4xl mb-3">About</p>
        <div className="flex justify-between items-center w-[120px] mb-7">
          <p>Home</p>
          <span>{"\u003E"}</span>
          <p className="font-bold">About</p>
        </div>
      </div>
      <div>
        <p className="text-gray-700/80 w-full mb-3">
          <span className="text-xl font-bold text-slate-700 mb-3">Orebi</span>{" "}
          is one of the world's leading ecommerce brands and is internationally
          recognized for celebrating the essence of classic Worldwide cool
          looking style.
        </p>
        <button
          className="bg-gray-800/90 text-slate-100 max-w-2/6 h-[50px]  text-sm md:text-base text-center p-2 md:p-3 rounded-lg mb-6 hover:bg-gray-800"
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default About;

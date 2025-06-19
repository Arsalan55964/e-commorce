

import React from "react";
import { useNavigate } from "react-router-dom";

function Brands() {
  const navigate = useNavigate();

  const GoFirst = () => {
    navigate("./Next")
  }
  return (
    <div className="w-[80%] mx-auto mt-8 bg-[#F0F0F0] rounded-2xl p-6">
      <h1 className="text-center text-5xl font-bold mb-6">BROWSE BY DRESS STYLE</h1>

      
      <section className="flex flex-col md:flex-row gap-4 mb-6 relative">
        <div className="relative w-full md:w-[40%]">
          <img
            className="h-60 w-full object-cover rounded-xl transition duration-300 hover:scale-105"
            src="first.png"
            alt="Casual"
onClick={() => GoFirst()}
          />
          <h1 className="absolute top-4 left-4 text-2xl font-bold  bg-opacity-50  px-3 py-1 rounded">
            Casual
          </h1>
        </div>

        <div className="relative w-full md:w-[57%]">
          <img
            className="h-60 w-full object-cover rounded-xl transition duration-300 hover:scale-105"
            src="second.png"
            alt="Formal"
          />
          <h1 className="absolute top-4 left-4 text-2xl font-bold  bg-opacity-50  px-3 py-1 rounded">
            Formal
          </h1>
        </div>
      </section>

      {/* Second Row */}
      <section className="flex flex-col md:flex-row gap-4 relative">
        <div className="relative w-full md:w-[57%]">
          <img
            className="h-60 w-full object-cover rounded-xl transition duration-300 hover:scale-105"
            src="third.png"
            alt="Gym"
          />
          <h1 className="absolute top-4 left-4 text-2xl font-bold  bg-opacity-50  px-3 py-1 rounded">
            Party
          </h1>
        </div>

        <div className="relative w-full md:w-[40%]">
          <img
            className="h-60 w-full object-cover rounded-xl transition duration-300 hover:scale-105"
            src="four.png"
            alt="Party"
          />
          <h1 className="absolute top-4 left-4 text-2xl font-bold text-black-400 bg-opacity-50  px-3 py-1 rounded">
            Gym
          </h1>
        </div>
      </section>
    </div>
  );
}

export default Brands;



import React from 'react';
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const GFirst = () => {
    navigate("./Next");
  };

  return (
    <>
      <div className="bg-white py-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-10">
          
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
            </h1>
            <p className="text-base sm:text-lg mb-6">
              Browse through a diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your style.
            </p>
            <button
              onClick={GFirst}
              className="cursor-pointer mt-4 sm:mt-6 h-14 w-full sm:w-48 border-2 bg-black border-gray-300 rounded-full text-white hover:bg-white hover:text-black transition-colors duration-300"
            >
              Shop Now
            </button>

            <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-gray-300 mt-8">
              <div className="text-center sm:text-left sm:pr-8 pb-4 sm:pb-0">
                <h1 className="text-3xl font-bold">200+</h1>
                <span className="text-sm">International Brands</span>
              </div>
              <div className="text-center sm:text-left sm:px-8 pb-4 sm:pb-0">
                <h1 className="text-3xl font-bold">2,000+</h1>
                <span className="text-sm">High Quality Products</span>
              </div>
              <div className="text-center sm:text-left sm:pl-8">
                <h1 className="text-3xl font-bold">30,000+</h1>
                <span className="text-sm">Happy Customers</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <img
              src="https://chop-co.netlify.app/assets/Main-DjG-FNVr.svg"
              alt="main"
              className="w-full h-auto max-h-[30rem] sm:max-h-[35rem] mx-auto object-contain"
            />
            <img
              src="/Vector.png"
              alt="decor1"
              className="absolute top-2 right-4 h-16 w-20"
            />
            <img
              src="/Vector (1).png"
              alt="decor2"
              className="absolute top-1/2 left-2 transform -translate-y-1/2 h-8 sm:h-10"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;


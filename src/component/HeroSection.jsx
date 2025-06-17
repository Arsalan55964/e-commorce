import React from 'react';

const HeroSection = () => (
  <div className="flex flex-col-reverse lg:flex-row items-center">
    <div className="lg:w-1/2 text-center lg:text-left px-4 lg:pl-10">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
        FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
      </h1>
      <p className="mt-6 text-sm sm:text-base">
        Browse through a diverse range of meticulously crafted garments,
        <br className="hidden sm:block" />
        designed to bring out your individuality and cater to your style.
      </p>
      <button    className="mt-10 h-12 w-48 border-2 bg-black border-gray-300 rounded-full text-white hover:bg-white hover:text-black transition-colors duration-300" onClick={()=>alert("shop now")}>
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
    <div className="lg:w-1/2 relative px-4">
      <img
        src="Rectangle 2 (1).png"
        alt="main"
        className="w-full h-auto mt-6 lg:mt-0 ml-12 lg:ml-0 rounded-lg shadow-lg"
      />
      <img
        src="Vector.png"
        alt="decor1"
        className="absolute top-2 right-2 h-12"
      />
      <img
        src="Vector (1).png"
        alt="decor2"
        className="absolute top-1/2 left-0 transform -translate-y-1/2 h-12"
      />
    </div>
  </div>
);

export default HeroSection;
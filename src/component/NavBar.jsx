import React from "react";

const Navbar = () => (
  <nav className="flex flex-wrap items-center justify-between px-4 py-4 gap-4">
    <h1 className="font-extrabold text-3xl sm:text-4xl pl-2 sm:pl-8">
      SHOP.CO
    </h1>
    <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 w-full sm:w-auto">
      <p className="flex items-center gap-2">
        <a href="#" className="flex">
          {" "}
          SHOP <img src="Frame.png" alt="shop" className="h-5" />
        </a>
      </p>
      <a href="#">On Sale</a>
      <a href="#">New Arrival</a>
      <a href="#">Brands</a>
    </div>
    <div className="flex items-center w-full sm:w-auto max-w-md bg-gray-100 border border-gray-300 shadow-md rounded-full px-4 py-2">
      <img src="Frame (1).png" alt="search icon" className="h-5" />
      <input
        type="text"
        placeholder="Search for product..."
        className="bg-transparent pl-2 outline-none w-96"
      />
    </div>
    <div className="flex items-center gap-3">
      <img src="Frame (2).png" alt="icon1" className="h-6" />
      <img src="Frame (3).png" alt="icon2" className="h-6" />
    </div>
  </nav>
);

export default Navbar;

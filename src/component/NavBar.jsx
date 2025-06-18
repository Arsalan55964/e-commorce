
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => (
  <nav className="flex flex-wrap items-center justify-between px-4 py-4 max-w-screen-xl mx-auto gap-4">
    {/* Logo */}
    <h1 className="font-extrabold text-3xl sm:text-4xl pl-2 sm:pl-8">
      <a href="#">SHOP.CO</a>
    </h1>

    {/* Menu Links */}
    <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-3 w-full sm:w-auto">
      <p className="flex items-center gap-2">
        <a href="#" className="flex items-center">
          SHOP <img src="Frame.png" alt="shop" className="h-5" />
        </a>
      </p>
      <a href="#" className="text-sm sm:text-base">On Sale</a>
      <a href="#" className="text-sm sm:text-base">New Arrival</a>
      <a href="#" className="text-sm sm:text-base">Brands</a>
    </div>

    {/* Search Box */}
    <div className="flex items-center w-full sm:w-auto max-w-xs sm:max-w-md bg-gray-100 border border-gray-300 shadow-md rounded-full px-4 py-2">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-500" />
      <input
        type="text"
        placeholder="Search for product..."
        className="bg-transparent pl-2 outline-none w-full"
      />
    </div>

    {/* Cart & User Icons */}
    <div className="flex items-center gap-5">
      <FontAwesomeIcon icon={faCartShopping} className="text-gray-700 text-2xl cursor-pointer" />
      <FontAwesomeIcon icon={faUser} className="text-gray-700 text-2xl cursor-pointer" />
    </div>
  </nav>
);

export default Navbar;

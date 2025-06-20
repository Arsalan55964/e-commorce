
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AuthModal from "../SignLogin/AuthModel";

import {
  faBars,
  faMagnifyingGlass,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {

  const [showAuthModal, setShowAuthModal] = useState(false);
  const toggleAuthModal = () => setShowAuthModal(!showAuthModal);

  return (
    <>
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md px-4 py-4">
      {/* Flex Container */}
      <div className="flex items-center justify-between">
        {/* Left: Menu + Logo */}
        <div className="flex items-center gap-3">
          <div className="block lg:hidden">
            <FontAwesomeIcon icon={faBars} className="text-2xl" />
          </div>

          <h1 className="font-extrabold text-2xl sm:text-3xl">
            <Link to="/">SHOP.CO</Link>
          </h1>
        </div>

        {/* Middle: Links */}
        <div className="hidden lg:flex gap-6">
          <Link to="/" className="flex items-center gap-1 font-medium">
            SHOP <img src="Frame.png" alt="shop" className="h-5" />

          </Link>
          <Link to="/new-arrivals" className="font-medium">
            New Arrival
          </Link>
          <Link to="/top-selling" className="font-medium">
            Top Selling
          </Link>
          <Link to="/brands" className="font-medium">
            Brands
          </Link>
        </div>

        {/* Right: Search + Icons */}
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-gray-100 border border-gray-300 shadow-md rounded-full px-3 py-2">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-gray-600"
            />
            <input
              type="text"
              placeholder="Search for product..."
              className="hidden lg:block bg-transparent pl-2 outline-none w-72"
            />
          </div>

          <FontAwesomeIcon
            icon={faCartShopping}
            className="text-2xl text-gray-700"
          />
          <FontAwesomeIcon icon={faUser} className="text-2xl text-gray-700" 
           onClick={toggleAuthModal}
          />
        </div>
      </div>
    </nav>
    <AuthModal open={showAuthModal} onClose={toggleAuthModal} />
    </>
  );
};



export default Navbar;

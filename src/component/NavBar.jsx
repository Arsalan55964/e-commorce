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
  const [showMenu, setShowMenu] = useState(false);

  const toggleAuthModal = () => setShowAuthModal(!showAuthModal);
  const toggleMenu = () => setShowMenu((prev) => !prev);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: Logo & Hamburger */}
          <div className="flex items-center gap-3">
            <button
              className="block lg:hidden text-gray-700"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon icon={faBars} className="text-2xl" />
            </button>
            <h1 className="font-extrabold text-2xl sm:text-3xl">
              <Link to="/">SHOP.CO</Link>
            </h1>
          </div>

          <div className="hidden lg:flex items-center gap-6 whitespace-nowrap">
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

          {/* Right: Icons + Search for lg and up */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center bg-gray-100 border border-gray-300 rounded-full px-3 py-2 shadow-md">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-gray-600"
              />
              <input
                type="text"
                placeholder="Search for product..."
                className="bg-transparent pl-2 outline-none w-40 lg:w-60"
              />
            </div>

            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-2xl text-gray-700"
            />

            <button onClick={toggleAuthModal} aria-label="User account">
              <FontAwesomeIcon icon={faUser} className="text-2xl text-gray-700" />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {showMenu && (
          <div className="lg:hidden mt-2 px-4 flex flex-col gap-2 bg-white shadow-md pb-4">
            {/* Mobile-only Search bar */}
            <div className="flex items-center bg-gray-100 border border-gray-300 rounded-full px-3 py-2 shadow-md">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-600" />
              <input
                type="text"
                placeholder="Search for product..."
                className="bg-transparent pl-2 outline-none w-full"
              />
            </div>

            <Link to="/" className="font-medium">
              SHOP
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
        )}
      </nav>

      {/* Auth Modal */}
      <AuthModal open={showAuthModal} onClose={toggleAuthModal} />
    </>
  );
};

export default Navbar;

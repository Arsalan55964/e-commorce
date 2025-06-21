
// import React, { useState, useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import AuthModal from "../SignLogin/AuthModel";
// import { CartContext } from "./context/CartContext";

// import {
//   faBars,
//   faMagnifyingGlass,
//   faCartShopping,
//   faUser,
// } from "@fortawesome/free-solid-svg-icons";

// const Navbar = () => {
//   const [showAuthModal, setShowAuthModal] = useState(false);
//   const toggleAuthModal = () => setShowAuthModal(!showAuthModal);

//   const { cartItems } = useContext(CartContext);

//   const [clickCount, setClickCount] = useState(0);
//   const [searchQuery, setSearchQuery] = useState("");

//   const navigate = useNavigate();

//   const handleCartClick = () => {
//     setClickCount(clickCount + 1);
//     console.log("Navigating to cart... Click count:", clickCount + 1);

//     navigate("/cart");
//   };

//   const handleSearch = (e) => {
//     if (e.key === "Enter") {
//       navigate("/search", { state: { query: searchQuery } });
//     }
//   };

//   return (
//     <>
//       <nav className=" top-0 left-0 w-full z-50 bg-white shadow-md px-4 py-4">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <div className="block lg:hidden">
//               <FontAwesomeIcon icon={faBars} className="text-2xl" />
//             </div>

//             <h1 className="font-extrabold text-2xl sm:text-3xl ml-[4rem]">
//               <Link to="/">SHOP.CO</Link>
//             </h1>
//           </div>

//           <div className=" lg:flex gap-6">
//             <Link to="/" className="flex items-center gap-1 font-medium">
//               <li className="list-[none] font-light hover:underline">Shop</li>
//             </Link>
//             <Link to="/new-arrivals" className="font-medium">
//                             <li className="list-[none] font-light hover:underline">New Arrivals</li>

//             </Link>
//             <Link to="/top-selling" className="font-medium">              
//             <li className="list-[none] font-light hover:underline">Top Selling</li> 

//             </Link>
//             <Link to="/brands" className="font-medium">
//                           <li className="list-[none] font-light hover:underline">Brand's</li>

//             </Link>
//           </div>

//           <div className="flex items-center gap-4">
//             <div className="flex items-center bg-gray-100  border-none border-gray-300 rounded-full w-[30rem] px-3 py-2 mr-[5rem]">
//               <FontAwesomeIcon
//                 icon={faMagnifyingGlass}
//                 className="text-gray-600"
//               />
//               <input
//                 type="text"
//                 placeholder="Search for product..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 onKeyDown={handleSearch}
//                 className="hidden lg:block bg-transparent pl-2 outline-none w-72"
//               />
//             </div>

//             <div className=" cursor-pointer" onClick={handleCartClick}>
//               <FontAwesomeIcon
//                 icon={faCartShopping}
//                 className="text-2xl text-gray-700 mr-[1rem]"
//               />
//               {cartItems.length > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                   {cartItems.length}
//                 </span>
//               )}
//             </div>

//             <FontAwesomeIcon
//               icon={faUser}
//               className="text-2xl text-gray-700"
//               onClick={toggleAuthModal}
//             />
//           </div>
//         </div>
//       </nav>

//       <AuthModal open={showAuthModal} onClose={toggleAuthModal} />
//     </>
//   );
// };

// export default Navbar;
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AuthModal from "../SignLogin/AuthModel";
import { CartContext } from "./context/CartContext";

import {
  faBars,
  faMagnifyingGlass,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const toggleAuthModal = () => setShowAuthModal(!showAuthModal);

  const { cartItems } = useContext(CartContext);

  const [clickCount, setClickCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const handleCartClick = () => {
    setClickCount(clickCount + 1);
    console.log("Navigating to cart... Click count:", clickCount + 1);
    navigate("/cart");
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      navigate("/search", { state: { query: searchQuery } });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left Side */}
          <div className="flex items-center gap-3">
            <div className="block lg:hidden">
              <FontAwesomeIcon icon={faBars} className="text-2xl" />
            </div>

            <h1 className="font-extrabold text-xl sm:text-2xl md:text-3xl ml-[2rem]">
              <Link to="/">SHOP.CO</Link>
            </h1>
          </div>

          {/* Middle Nav Links */}
          <div className="hidden lg:flex gap-6 mr-[6rem]">
            <Link to="/" className="flex items-center gap-1 font-medium">
              <li className="list-none font-light hover:underline">Shop</li>
            </Link>
            <Link to="/new-arrivals" className="flex items-center gap-1 font-medium">
              <li className="list-none font-light hover:underline">New Arrivals</li>
            </Link>
            <Link to="/top-selling" className="flex items-center gap-1 font-medium">
              <li className="list-none font-light hover:underline">Top Selling</li>
            </Link>
            <Link to="/brands" className="flex items-center gap-1 font-medium">
              <li className="list-none font-light hover:underline">Brand's</li>
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4 ">
            {/* Search Box */}
            <div className="hidden sm:flex items-center bg-gray-100 border-none rounded-full w-[14rem] md:w-[20rem] px-3 py-2 ">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-gray-600"
              />
              <input
                type="text"
                placeholder="Search for product..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
                className="bg-transparent pl-2 outline-none w-full"
              />
            </div>

            
            <div className="relative cursor-pointer" onClick={handleCartClick}>
              <FontAwesomeIcon
                icon={faCartShopping}
                className="text-2xl text-gray-700"
              />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </div>

            <FontAwesomeIcon
              icon={faUser}
              className="text-2xl text-gray-700 cursor-pointer"
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

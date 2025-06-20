import React from "react";
import { useNavigate } from "react-router-dom";
import products from "../data/products"; 

const AllProducts = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 py-8">
      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-center pb-8">
        ALL PRODUCTS
      </h1>

      {/* Product Grid */}
      <div className="flex flex-wrap justify-center gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="text-center max-w-[200px] hover:scale-105 transition-transform duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="mb-2 w-full object-cover rounded-lg shadow-md"
            />
            <p className="font-semibold mt-2">{product.name}</p>
            <img
              src={product.image1}
              alt="rating"
              className="my-2 mx-auto w-24"
            />
            <p className="font-bold text-xl text-gray-800">${product.price}</p>
          </div>
        ))}
      </div>

      {/* Back to Home Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => navigate("/")}
          className="h-12 w-48 border-2 border-black rounded-full hover:bg-black hover:text-white transition duration-300"
        >
          BACK TO HOME
        </button>
      </div>
    </div>
  );
};

export default AllProducts;

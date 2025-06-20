import React from "react";
import { useNavigate } from "react-router-dom";
import products from "../data/products";

const NewArrivals = () => {
  const navigate = useNavigate();
const GoFirst = () => {
    navigate("./DetailPage")
  }

  const featuredProducts = products.slice(0, 4);

  return (
    <div className="px-4 py-8">
      <h1 className="text-4xl md:text-6xl font-extrabold text-center pb-8">
        NEW ARRIVALS
      </h1>

      <div className="flex flex-wrap justify-center gap-10">
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="text-center max-w-[200px] hover:scale-105 transition-transform duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="mb-2 w-full object-cover rounded-lg shadow-md"
              onClick={() => GoFirst()}
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

      <div className="flex justify-center">
        <button
          className="mt-10 h-12 w-48 border-2 border-gray-300 rounded-full text-black hover:bg-black hover:text-white transition duration-300"
        >
          VIEW ALL
        </button>
      </div>
    </div>
  );
};

export default NewArrivals;

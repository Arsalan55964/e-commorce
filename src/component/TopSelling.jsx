
import React, { useState } from "react";
import topSellingProducts from "../data/topsellingproducts";
import { useNavigate } from "react-router-dom";

const TopSelling = () => {
  const [showAll, setShowAll] = useState(false);

  const featured = showAll ? topSellingProducts : topSellingProducts.slice(0, 4);

  const navigate = useNavigate();

  const GFirst = (product) => {
    navigate("./View", { state: { product } });
  };

  return (
    <div className="px-4 py-8">
      <h1 className="text-4xl md:text-6xl font-extrabold text-center pb-8">
        TOP SELLING
      </h1>

      <div className="flex flex-wrap justify-center gap-10">
        {featured.map((product) => (
          <div
            key={product.id}
            className="text-center max-w-[200px] hover:scale-105 transition-transform duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="mb-2 w-full object-cover rounded-lg shadow-md cursor-pointer"
              onClick={() => GFirst(product)}  
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

      {!showAll && (
        <div className="flex justify-center">
          <button
            onClick={() => setShowAll(true)}
            className="cursor-pointer  mt-10 h-12 w-48 border-2 border-gray-300 rounded-full text-black hover:bg-black hover:text-white transition duration-300"
          >
            VIEW ALL
          </button>
        </div>
      )}
    </div>
  );
};

export default TopSelling;

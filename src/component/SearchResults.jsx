import React from "react";
import { useLocation } from "react-router-dom";
import products from "../data/products";

const SearchResults = () => {
  const location = useLocation();
  const query = location.state?.query || "";

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="px-4 py-8">
      <h1 className="text-4xl font-extrabold text-center mb-8">
        Search Results for "{query}"
      </h1>

      {filteredProducts.length === 0 ? (
        <p className="text-center text-xl text-gray-600 ">No products found.</p>
      ) : (
        <div className="flex flex-wrap justify-center  gap-6">
          {filteredProducts.map((product) => (
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
              <p className="font-bold text-xl text-gray-800">${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;

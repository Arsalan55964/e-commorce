import React from "react";

const NewArrivals = () => {
  const products = [
    {
      id: 1,
      image: "Frame 32.svg",
      name: "T-shirt with Tape Details",
      image1: "Frame 35.svg",
      price: 120,
      description: "A stylish t-shirt with unique tape details.",
    },
    {
      id: 2,
      image: "Frame 33.svg",
      name: "Skinny Fit Jeans",
      image1: "Frame 39.svg",
      price: 80,
      description: "Comfortable skinny fit jeans for everyday wear.",
    },
    {
      id: 3,
      image: "Frame 34.svg",
      name: "Chekerd Shirt",
      image1: "Frame 35.svg",
      price: 180,
      description: "A trendy chekerd shirt for casual outings.",
    },
    {
      id: 4,
      image: "Frame 38.svg",
      name: "Sleeve Striped T-shirt",
      image1: "Frame 44.svg",
      price: 100,
      description: "A stylish sleeve striped t-shirt for a modern look.",
    },
  ];

  return (
    <div className="px-4 py-8">
      <h1 className="flex justify-center text-4xl md:text-6xl font-extrabold pb-8">
        NEW ARRIVALS
      </h1>

      <div className="flex flex-wrap justify-center gap-25">
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

      <div className="flex justify-center">
        <button
          className="mt-10 h-12 w-48 border-2 border-gray-300 rounded-full text-black hover:bg-black hover:text-white transition-colors duration-300"
          onClick={() => alert("View all")}
        >
          VIEW ALL
        </button>
      </div>
    </div>
  );
};

export default NewArrivals;

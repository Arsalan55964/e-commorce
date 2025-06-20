import React from "react";

const products = [
  { id: 1, name: "Gradient Graphic T-shirt",
 image1: "Frame 39.svg",

     price: "$10", image: "one.png" },
  { id: 2, name: "Product 2",image1: "Frame 39.svg",
     price: "$20", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Product 3",image1: "Frame 39.svg", price: "$30", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Product 4",image1: "Frame 39.svg", price: "$40", image: "https://via.placeholder.com/150" },
  { id: 5, name: "Product 5",image1: "Frame 39.svg", price: "$50", image: "https://via.placeholder.com/150" },
  { id: 6, name: "Product 6",image1: "Frame 39.svg", price: "$60", image: "https://via.placeholder.com/150" },
  { id: 7, name: "Product 7",image1: "Frame 39.svg", price: "$70", image: "https://via.placeholder.com/150" },
  { id: 8, name: "Product 8",image1: "Frame 39.svg", price: "$80", image: "https://via.placeholder.com/150" },
  { id: 9, name: "Product 9",image1: "Frame 39.svg", price: "$90", image: "https://via.placeholder.com/150" },
];

function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 mt-[3rem]">
      {products.map((product) => (
        <div key={product.id} className="mt-[3rem] h-[40rem] w-[100%]  rounded-xl p-4 shadow hover:scale-105 transition-transform duration-300">
          <img src={product.image} alt={product.name} className="w-full h-100 object-cover rounded mb-4" />
     <h2 className="text-lg font-semibold  ml-[2rem]">{product.name}</h2>
             <img className="mt-[0.5rem] ml-[2rem]" src={product.image1}/>

          <h3 className="text-gray-700 mb-2 font-bold  mt-[0.5rem] ml-[2rem]">{product.price}</h3>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;

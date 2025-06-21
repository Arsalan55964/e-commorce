// src/component/Cart.jsx
import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="px-4 py-8">
      <h1 className="text-4xl font-extrabold text-center mb-8">Your Cart 🛒</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-xl text-gray-600">Your cart is empty!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h2 className="text-xl font-bold">{item.name}</h2>
              <p className="text-gray-700 mt-2">${item.price}</p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-10 text-center">
        <Link
          to="/"
          className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Cart;

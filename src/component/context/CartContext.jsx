// src/context/CartContext.jsx
import React, { createContext, useState } from "react";

// Context banaya
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add to cart function
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  // Optionally: remove from cart, clear cart (future ke liye)
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

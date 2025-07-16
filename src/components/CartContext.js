import React, { createContext, useState } from "react";

export const cartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <cartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;

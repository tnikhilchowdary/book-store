import React, { useContext } from "react";
import { cartContext } from "../components/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import "./CartPage.css";

const CartPage = () => {
  const { cartItems } = useContext(cartContext);

  return (
    <div className="cart-page">
      <h2 className="cart-title">
        <FaShoppingCart className="cart-icon" /> Cart Page
      </h2>

      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p className="empty-cart-msg">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img
                src={item.image}
                alt={item.title}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h3 className="cart-item-title">{item.title}</h3>
                <p className="cart-item-price">Price: ${item.price}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CartPage;

import React, { useState, useEffect } from "react";
import Picture from "./Picture";
const Cart = ({ user, cart, deleteFromCart }) => {
  const handleRemove = (productId) => {
    deleteFromCart(productId);
  };

  return (
    <div>
      <h1>Cart</h1>
      <div className="products">
        <ul>
          {cart.map((item) => {
            return (
              <li className="shadow">
                <Picture pic={item.url} />
                <h4>{item.name}</h4>
                <h5>${item.price}</h5>
                <h4>quantity:{item.quantity}</h4>
                <button
                  onClick={() => {
                    handleRemove(item.id);
                  }}
                >
                  Remove from cart
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Cart;

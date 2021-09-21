import React, { useState, useEffect } from "react";
import Picture from "./Picture";
import CartItem from "./CartItem";
const Cart = ({ user, cart, deleteFromCart }) => {
  console.log(user);
  const [tot, setTot] = useState(0);
  const handleRemove = (productId) => {
    deleteFromCart(productId);
  };
  const fetchUrl = () => {
    fetch(`http://localhost:9292/total/${user.id}`)
      .then((resp) => resp.json())
      .then((data) => setTot(data));
  };

  useEffect(() => {
    fetchUrl();
  }, [handleRemove]);
  return (
    <div>
      <h1>Cart</h1>
      <div className="products">
        <ul>
          {cart.map((item) => {
            return (
              <CartItem item={item} key={item.id} handleRemove={handleRemove} />
            );
          })}
        </ul>
        <h2>Total=${tot}</h2>
      </div>
    </div>
  );
};

export default Cart;

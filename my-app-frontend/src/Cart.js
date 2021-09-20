import React, { useState, useEffect } from "react";
import Picture from "./Picture";
const Cart = ({ user, cart, deleteFromCart }) => {
  const handleRemove = (productId) => {
    deleteFromCart(productId);
  };
  // const [data, setData] = useState([]);
  // const fetchUrl = () => {
  //   if (user.user_name) {
  //     fetch(`http://localhost:9292/user/${user.user_name}/cart`)
  //       .then((resp) => resp.json())
  //       .then((data) => setData(data.items));
  //   }
  // };
  // useEffect(() => {
  //   fetchUrl();
  // }, []);
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

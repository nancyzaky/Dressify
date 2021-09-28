import React, { useState, useEffect } from "react";
import Picture from "./Picture";
const CartItem = ({ item, handleRemove, user, changeTotal }) => {
  const [quantity, setQuantity] = useState(1);

  const fetchUrl = () => {
    fetch(`http://localhost:9292/user/${user.id}/cart/${item.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity: quantity }),
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data));
    changeTotal();
  };
  useEffect(() => {
    fetchUrl();
  }, [quantity]);
  return (
    <li className="shadow">
      <Picture pic={item.url} />
      <h4>{item.name}</h4>
      <h5>${item.price * quantity} </h5>
      <h4>quantity:{quantity}</h4>
      <form>
        <input
          type="number"
          value={quantity}
          onChange={(e) => {
            setQuantity((val) => {
              return e.target.value;
            });
          }}
        ></input>
      </form>
      <br></br>
      <button
        className="btn"
        onClick={() => {
          handleRemove(item.id);
        }}
      >
        Remove from cart
      </button>
    </li>
  );
};

export default CartItem;

import React, { useState } from "react";
import Picture from "./Picture";
const CartItem = ({ item, handleRemove }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  return (
    <li className="shadow">
      <Picture pic={item.url} />
      <h4>{item.name}</h4>
      <h5>${item.price}</h5>
      <h4>quantity:{quantity}</h4>
      <form>
        <input
          type="number"
          value={quantity}
          onChange={(e) => {
            setQuantity(e.target.value);
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

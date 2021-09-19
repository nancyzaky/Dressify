import React from "react";
import Picture from "./Picture";
import { AiFillHeart } from "react-icons/ai";
const Product = ({ item, showModal, user, addToCart }) => {
  const handleFav = () => {
    fetch("http://localhost:9292/fav", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: user.user_name,
        name: item.name,
        price: item.price.value,
      }),
    });
  };
  const handleClick = () => {
    addToCart(item);
    console.log(user.user_name);
    fetch("http://localhost:9292/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: user.user_name, name: item.name }),
    });
  };
  // #   t.string :name
  //     # t.string :url
  //     # t.string :price
  //     # t.integer :user_id
  return (
    <li className="shadow">
      <Picture pic={item.images[0].url} id={new Date().getTime()} />
      <h4>{item.name}</h4>
      <h5>${item.price.value}</h5>
      {/* <ul style={{ display: "grid" }}>
        {item.rgbColors.map((color) => {
          return (
            <li style={{ display: "inline" }}>
              <span>{color}</span>
            </li>
          );
        })}
      </ul> */}
      <button onClick={showModal}>Drag And Drop</button>
      <button onClick={handleClick}> Add To Cart</button>
      <button onClick={handleFav}>
        <AiFillHeart />
      </button>
    </li>
  );
};

export default Product;

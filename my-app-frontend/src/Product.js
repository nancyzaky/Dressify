import React, { useState } from "react";
import Picture from "./Picture";
import { AiFillHeart } from "react-icons/ai";
const Product = ({ item, showModal, user, addToCart, addFav, deleteFav }) => {
  const handleFav = () => {
    let allItems = {
      name: item.name,
      price: item.price.value,
      url: item.images[0].url,
    };
    fetch("http://localhost:9292/fav", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: user.user_name,
        name: item.name,
        price: item.price.value,
        url: item.images[0].url,
      }),
    });
    addFav(allItems);
  };
  const handleRemove = (id) => {
    deleteFav(id);
    fetch(`http://localhost:9292/user/${user.user_name}/fav/${id}`, {
      method: "DELETE",
    });
  };
  const handleClick = () => {
    addToCart(item);
    fetch("http://localhost:9292/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: user.user_name, name: item.name }),
    });
  };

  return (
    <li className="shadow">
      <Picture
        pic={item.images ? item.images[0].url : item.url}
        id={new Date().getTime()}
      />
      <h4>{item.name}</h4>
      <h5>${item.price.value || item.price}</h5>
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
      <button onClick={() => handleRemove(item.id)}>Remove from fav</button>
    </li>
  );
};

export default Product;

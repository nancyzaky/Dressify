import React, { useState } from "react";
import Picture from "./Picture";
import { AiFillHeart } from "react-icons/ai";
const Product = ({ item, showModal, user, addToCart, addFav, fav }) => {
  const handleFav = () => {
    let result = fav.filter((product) => {
      return product.name === item.name;
    });
    if (result.length == 0) {
      fetch(`http://localhost:9292/fav`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user: user.user_name,
          name: item.name,
          price: item.price.value,
          url: item.images[0].url,
        }),
      })
        .then((resp) => resp.json())
        .then((data) => {
          addFav(data);
        });
    }
  };

  const handleClick = () => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      url: item.url,
      quantity: 1,
    });
  };

  return (
    <li className="shadow">
      <Picture
        // pic={item.images ? item.images[0].url : item.url}
        pic={item.url}
        id={new Date().getTime()}
      />
      <h4>{item.name}</h4>
      <h5>${item.price}</h5>
      {/* <ul style={{ display: "grid" }}>
        {item.rgbColors.map((color) => {
          return (
            <li style={{ display: "inline" }}>
              <span>{color}</span>
            </li>
          );
        })}
      </ul> */}
      <button className="btn" onClick={showModal}>
        Drag And Drop
      </button>
      <button className="btn" onClick={handleClick}>
        {" "}
        Add To Cart
      </button>
      <button className="btn" onClick={handleFav}>
        <AiFillHeart />
      </button>
    </li>
  );
};

export default Product;

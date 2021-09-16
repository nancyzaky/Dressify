import React from "react";
import Picture from "./Picture";
const Product = ({ item, showModal }) => {
  return (
    <li className="shadow">
      <Picture pic={item.images[0].url} id={new Date().getTime()} />
      <h4>{item.name}</h4>
      <h5>${item.price.value}</h5>
      {/* {item.articleColorNames.map((color) => {
        return <h4>{color}</h4>;
      })} */}
      <button onClick={showModal}>Drag And Drop</button>
    </li>
  );
};

export default Product;

import React, { useState, useEffect, useContext } from "react";
import Product from "./Product";
import { useParams } from "react-router-dom";
import { NavContext } from "./Context";

const Category = ({
  showModal,
  woman,
  switchWoman,
  user,
  addToCart,
  addFav,
  deleteFav,
  fav,
  search,
}) => {
  const { closeSubMenu } = useContext(NavContext);
  const [products, setProducts] = useState([]);
  let { word } = useParams();
  const fetchUrl = () => {
    fetch(`http://localhost:9292/items`)
      .then((resp) => resp.json())
      .then((data) => {
        if (word === "Clothing-all") {
          setProducts(data);
        } else if (word === "Clothing-tops") {
          setProducts(data.slice(30, 61));
        } else if (word === "Clothing-shirtblouses") {
          setProducts(data.slice(61, 91));
        } else if (word === "Clothing-trousers") {
          setProducts(data.slice(91, 116));
        } else if (word === "Clothing-dresses") {
          setProducts(data.slice(116, 151));
        } else if (word === "Shoes-highheels") {
          setProducts(data.slice(151, 181));
        } else if (word === "Shoes-flats") {
          setProducts(data.slice(181, 211));
        } else if (word === "Shoes-sandals") {
          setProducts(data.slice(211, 241));
        } else if (word === "Shoes-sneakers") {
          setProducts(data.slice(241, 265));
        } else if (word === "Shoes-boots") {
          setProducts(data.slice(265, 295));
        } else if (word === "Shoes-slipon") {
          setProducts(data.slice(295, 310));
        } else if (word === "Shoes-all") {
          setProducts(data.slice(151, 310));
        } else if (word === "Accessories-bags") {
          setProducts(data.slice(311, 341));
        } else if (word === "Accessories-belts") {
          setProducts(data.slice(341, 368));
        } else if (word === "Accessories-jewellery") {
          setProducts(data.slice(368, 422));
        } else if (word === "Accessories-sunglasses") {
          setProducts(data.slice(422, 450));
        } else if (word === "Accessories-hats") {
          setProducts(data.slice(450, 483));
        } else if (word === "Accessories-all") {
          setProducts(data.slice(311, 483));
        }
      });
  };
  useEffect(() => {
    fetchUrl();
  }, [word]);
  return (
    <>
      <div onMouseOver={closeSubMenu}>
        {products.map((item) => {
          return (
            <Product
              item={item}
              key={item.id}
              showModal={showModal}
              user={user}
              addToCart={addToCart}
              addFav={addFav}
              deleteFav={deleteFav}
              fav={fav}
            />
          );
        })}
      </div>
    </>
  );
};

export default Category;

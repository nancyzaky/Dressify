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
  filterSearch,
}) => {
  const { closeSubMenu } = useContext(NavContext);
  const [products, setProducts] = useState([]);
  let { word } = useParams();
  const fetchUrl = () => {
    fetch(`http://localhost:9292/cat/${word}`)
      .then((resp) => resp.json())
      .then((data) => {
        setProducts(data);
      });
  };
  useEffect(() => {
    fetchUrl();
  }, [word, switchWoman]);
  useEffect(() => {
    filterSearch();
  }, [search]);
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

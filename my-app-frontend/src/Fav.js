import React, { useEffect, useState } from "react";
import Product from "./Product";
import Modal from "./Modal";
const Fav = ({ user, deleteFav, showModal, addToCart }) => {
  const [currentFav, setCurrentFav] = useState([]);

  const fetchUrl = () => {
    fetch(`http://localhost:9292/user/${user.user_name}`)
      .then((resp) => resp.json())
      .then((data) => {
        if (data) {
          setCurrentFav(data.favorites);
          console.log(data);
        }
      });
  };

  useEffect(() => {
    fetchUrl();
  }, [deleteFav]);
  return (
    <>
      <h1>Favorite items</h1>
      <div className="products">
        <ul>
          {currentFav.map((item) => {
            return (
              // <li className="shadow" key={item.id}>
              //   <Picture pic={item.url} />
              //   <h4>{item.name}</h4>
              //   <h5>${item.price}</h5>
              //   <button onClick={() => handleRemove(item.id)}>
              //     Remove from Fav
              //   </button>
              // </li>
              <Product
                item={item}
                deleteFav={deleteFav}
                user={user}
                addToCart={addToCart}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Fav;

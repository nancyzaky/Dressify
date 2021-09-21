import React, { useEffect, useState } from "react";
import Picture from "./Picture";
import Modal from "./Modal";
const Fav = ({ user, fav, deleteFav }) => {
  const handleRemove = (id) => {
    deleteFav(id);
    fetch(`http://localhost:9292/user/${user.user_name}/fav/${id}`, {
      method: "DELETE",
    });
  };
  // useEffect(() => {
  //   fetchUrl();
  // }, [deleteFav]);
  return (
    <>
      <h1>Favorite items</h1>
      <div className="products">
        <ul>
          {fav.map((item) => {
            return (
              <li className="shadow" key={item.id}>
                <Picture pic={item.url} />
                <h4>{item.name}</h4>
                <h5>${item.price}</h5>
                <button className="btn" onClick={() => handleRemove(item.id)}>
                  Remove from Fav
                </button>
              </li>
              // <Product
              //   item={item}
              //   deleteFav={deleteFav}
              //   user={user}
              //   addToCart={addToCart}
              // />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Fav;

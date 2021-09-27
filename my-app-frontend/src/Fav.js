import React, { useEffect, useState } from "react";
import Picture from "./Picture";
import Modal from "./Modal";
const Fav = ({ user, fav, deleteFav }) => {
  const handleRemove = (id) => {
    deleteFav(id);
    fetch(`http://localhost:9292/user/${user.id}/favorite/${id}`, {
      method: "DELETE",
    });
  };

  return (
    <>
      <h3 style={{ color: "white", textAlign: "center" }}>Favorite items</h3>
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
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Fav;

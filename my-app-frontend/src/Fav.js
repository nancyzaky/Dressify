import React, { useEffect, useState } from "react";
import Picture from "./Picture";
const Fav = ({ user }) => {
  const [fav, setFav] = useState([]);
  const fetchUrl = () => {
    fetch(`http://localhost:9292/user/${user.user_name}`)
      .then((resp) => resp.json())
      .then((data) => {
        if (data) {
          setFav(data.favorites);
          console.log(data);
        }
      });
  };
  useEffect(() => {
    fetchUrl();
  }, []);
  return (
    <>
      <h1>Favorite items</h1>
      <div className="products">
        <ul>
          {fav.map((item) => {
            return (
              <li className="shadow">
                <Picture pic={item.url} />
                <h4>{item.name}</h4>
                <h5>${item.price}</h5>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Fav;

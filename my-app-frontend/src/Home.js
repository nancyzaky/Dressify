import React, { useState, useEffect } from "react";
import Product from "./Product";
import Loading from "./Loading";
const Home = ({ showModal, woman, man, switchWoman }) => {
  const [products, setProducts] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const fetchUrl = () => {
    fetch(
      `https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=asia2&lang=en&currentpage=0&pagesize=60&categories=${
        woman ? "ladies" : "men"
      }_newarrivals_all`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "036db7d1abmsh7d62560990e81f3p1b6c0djsnf0406b51760c",
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        setProducts(data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    fetchUrl();
    setIsLoading(true);
  }, [switchWoman]);
  return (
    <>
      <div className="home_bg"></div>
      {isloading && <Loading />}

      <div className="products">
        <h3 style={{ textAlign: "center" }}>New Arrival</h3>
        <ul>
          {products.map((item) => {
            return (
              <Product key={item.code} item={item} showModal={showModal} />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Home;

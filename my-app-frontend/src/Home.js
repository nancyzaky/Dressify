import React, { useState, useEffect } from "react";
import Product from "./Product";
import Loading from "./Loading";
import MostFav from "./MostFav";
const Home = ({
  showModal,
  woman,
  switchWoman,
  user,
  addToCart,
  addFav,
  deleteFav,
  fav,
}) => {
  const [products, setProducts] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const fetchUrl = () => {
    fetch(
      `https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=asia2&lang=en&currentpage=0&pagesize=30&categories=${
        woman ? "ladies" : "men"
      }_newarrivals_shoesacc`,
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
      <div className="home_bg">
        <h1
          style={{
            paddingTop: "10rem",
            paddingLeft: "38rem",
            color: "white",
            fontWeight: "bolder",
            fontFamily: "Anton, sans-serif",
          }}
        >
          Get 10% off when you apply code "sinatra" on Check out!!
        </h1>
      </div>
      {isloading && <Loading />}

      <div className="products">
        <h3 style={{ textAlign: "center" }}>New Arrival</h3>
        <ul>
          {products.map((item) => {
            return (
              <Product
                key={item.articleCodes[0]}
                item={item}
                showModal={showModal}
                user={user}
                addToCart={addToCart}
                addFav={addFav}
                deleteFav={deleteFav}
                fav={fav}
              />
            );
          })}
        </ul>
      </div>
      <MostFav />
    </>
  );
};

export default Home;

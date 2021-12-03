import React, { useState, useEffect, useContext } from "react";
import Product from "./Product";
import Loading from "./Loading";
import MostFav from "./MostFav";
import { NavContext } from "./Context";
const Home = ({
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
  const [products, setProducts] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [allitems, setAllItems] = useState([]);
  const { closeSubMenu } = useContext(NavContext);
  let menArr = [
    "men_essentials_linen",
    "men_newarrivals_clothes",
    "men_newarrivals_shoesaccessories",
    "men_premium_selection_trousers",
    "men_premium_selection_shoes",
    "men_premium_selection_shirts",
    "men_premium_selection_jacketscoats",
    "men_premium_selection_cardigansjumpers",
    "men_premium_selection_accessories",
    "men_basics",
    "men_tshirtstanks",
    "men_shirts",
    "men_trousers",
    "men_shorts",
    "men_hoodiessweatshirts",
    "men_nightwearloungewear",
    "men_sport",
    "men_jeans",
    "cardigans-and-jumpers",
    "men_blazerssuits",
    "men_jacketscoats",
    "men_swimweear",
    "men_socks",
    "men_shoes_sneakers",
    "men_shoes_sandals_espandrillos",
    "men_shoes_boots",
    "men_shoes_dressed",
    "men_shoes_loafers",
    "men_accessories_ties_bowties_handkerchiefs",
    "men_accessories_beltsandbraces",
    "men_accessories_bags",
    "men_accessories_sunglasses",
    "men_accessories_jewellery",
    "men_accessories_sportsaccessories",
    "men_accessories_hatscaps",
    "men_accessories_gloves",
  ];

  const getdata = () => {
    menArr.forEach((word) => {
      fetch(
        `https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=asia2&lang=en&currentpage=0&pagesize=150&categories=${word}`,
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
          data.results.forEach((item) => {
            console.log(word);
            let newObj = {
              name: item.name,
              url: item.images[0].url,
              price: item.price.value,
              category: word,
            };
            console.log(newObj);
            fetch(`http://localhost:9292/items`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(newObj),
            });
          });
        });
    });
  };
  const fetchUrl = () => {
    fetch(`http://localhost:9292/items`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        setProducts(data.slice(120, 170));
        setAllItems(data);
      });
  };
  useEffect(() => {
    let wordLen = search.length;
    let newProductsArr = allitems.filter((item) => {
      return item.name.slice(0, wordLen).toLowerCase() === search;
    });
    console.log(newProductsArr);
    setProducts(newProductsArr);
  }, [search]);
  useEffect(() => {
    fetchUrl();
    setIsLoading(true);
  }, []);
  return (
    <>
      <div className="home_bg" onMouseOver={closeSubMenu}>
        <h1
          style={{
            paddingTop: "6rem",
            paddingLeft: "38rem",
            color: "white",
            fontWeight: "bolder",
            fontFamily: "Anton, sans-serif",
          }}
        >
          {user.user_name && (
            <>
              <em style={{ color: "grey", paddingLeft: "18rem" }}>
                {" "}
                Welcome back {`${user.user_name} `}!
              </em>
              <br></br>
            </>
          )}
          Get 10% off when you apply code "sinatra"on Check out!!
        </h1>
      </div>
      {isloading && <Loading />}

      <div className="products">
        <h3
          style={{
            textAlign: "center",
            color: "black",
            paddingTop: "3rem",
            fontFamily: "Snell Roundhand, cursive",
            fontSize: "27px",
          }}
        >
          New Arrival
        </h3>

        <ul>
          {products.map((item) => {
            return (
              <Product
                key={item.id}
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
      <MostFav product={products} />
    </>
  );
};

export default Home;

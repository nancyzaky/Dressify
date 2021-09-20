import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SubMenu from "./SubMenu";
import Modal from "./Modal";
import Cart from "./Cart";
import Home from "./Home";
import Footer from "./Footer";
import LogIn from "./LogIn";
import Fav from "./Fav";

function App() {
  const [modal, setShowModal] = useState(false);
  const [woman, setWoman] = useState(true);
  const [man, setMan] = useState(false);
  const [user, setUser] = useState({});
  const [fav, setFav] = useState([]);
  const [cart, setCart] = useState([]);

  const deleteFav = (itemId) => {
    let newFavSet = fav.filter((fav) => {
      return fav.id !== itemId;
    });
    setFav(newFavSet);
  };
  const addFav = (obj) => {
    setFav([...fav, obj]);
  };
  const changeUser = (obj) => {
    setUser(obj);
  };
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const deleteFromCart = (productId) => {
    let newCart = cart.filter((item) => {
      return item.id !== productId;
    });
    setCart(newCart);
  };
  const switchWoman = () => {
    setWoman(true);
    setMan(false);
  };
  const switchMan = () => {
    setWoman(false);
    setMan(true);
  };
  const showModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const fetchUrl = () => {
    if (user.user_name) {
      fetch(`http://localhost:9292/user/${user.user_name}/cart`)
        .then((resp) => resp.json())
        .then((data) => setCart(data.items));

      fetch(`http://localhost:9292/user/${user.user_name}/fav`)
        .then((resp) => resp.json())
        .then((data) => {
          if (data) {
            setFav(data);
          }
        });
    }
  };
  useEffect(() => {
    fetchUrl();
  }, [user]);
  return (
    <>
      <Router>
        <Nav
          switchWoman={switchWoman}
          switchMan={switchMan}
          woman={woman}
          man={man}
        />
        <SubMenu />
        {modal && <Modal closeModal={closeModal} />}

        <Switch>
          <Route exact path="/">
            <Home
              woman={woman}
              man={man}
              showModal={showModal}
              woman={woman}
              switchWoman={switchWoman}
              user={user}
              addToCart={addToCart}
              addFav={addFav}
              deleteFav={deleteFav}
            />
          </Route>
          <Route path="/cart">
            <Cart cart={cart} user={user} deleteFromCart={deleteFromCart} />
          </Route>
          <Route path="/account">
            <LogIn changeUser={changeUser} />
          </Route>
          <Route path="/fav">
            <Fav user={user} fav={fav} deleteFav={deleteFav} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

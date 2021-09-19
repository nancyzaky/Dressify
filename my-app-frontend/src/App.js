import React, { useState } from "react";
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
  const [cart, setCart] = useState([]);
  const changeUser = (obj) => {
    setUser(obj);
  };
  const addToCart = (product) => {
    setCart([...cart, product]);
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
            />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/account">
            <LogIn changeUser={changeUser} />
          </Route>
          <Route path="/fav">
            <Fav user={user} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

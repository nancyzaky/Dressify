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
import ExistModal from "./ExistModal";
import SignUp from "./SignUp";
import CheckOut from "./CheckOut";
import Category from "./Category";

function App() {
  const [discount, setDiscount] = useState("sinatra");
  const [modal, setShowModal] = useState(false);
  const [woman, setWoman] = useState(true);
  const [man, setMan] = useState(false);
  const [user, setUser] = useState({});
  const [fav, setFav] = useState([]);
  const [cart, setCart] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [itemExistModal, setItemExistModal] = useState(false);
  const [search, setSearch] = useState("");

  const filterSearch = (word) => {
    setSearch(word);
  };
  const addUser = (obj) => {
    setAllUsers([...allUsers, obj]);
  };
  const changeUser = (obj) => {
    setUser(obj);
  };
  const emptyCart = () => {
    fetch(`http://localhost:9292/user/${user.id}/checkout`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: 2 }),
    });
    setCart([]);
    setFav([]);
  };
  const deleteFav = (itemId) => {
    let newFavSet = fav.filter((fav) => {
      return fav.id !== itemId;
    });
    setFav(newFavSet);
  };
  const addFav = (obj) => {
    setFav([...fav, obj]);
  };

  const addToCart = (item) => {
    let result = cart.filter((product) => {
      return product.id === item.id;
    });
    if (result.length > 0) {
      setItemExistModal(true);
      return;
    } else {
      fetch(`http://localhost:9292/user/${user.id}/cart`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      })
        .then((resp) => resp.json())
        .then((data) => {
          setCart([...cart, data]);
        });
    }
  };
  const deleteFromCart = (productId) => {
    console.log(productId);
    let newCart = cart.filter((item) => {
      return item.id !== productId;
    });
    setCart(newCart);
    fetch(`http://localhost:9292/user/${user.id}/cart/${productId}`, {
      method: "DELETE",
    });
  };
  const switchWoman = () => {
    setWoman(true);
    setMan(false);
  };

  const showModal = () => {
    setShowModal(true);
  };
  const switchMan = () => {
    setWoman(false);
    setMan(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const fetchUrl = () => {
    console.log(user);
    if (user.name) {
      fetch(`http://localhost:9292/user/${user.id}/cart`)
        .then((resp) => resp.json())
        .then((data) => {
          if (data) {
            console.log(data);
            setCart(data.items);
          } else {
            setCart([]);
          }
        });
      fetch(`http://localhost:9292/user/${user.id}/favorite`)
        .then((resp) => resp.json())
        .then((data) => {
          if (data) {
            setFav(data);
          }
        });

      fetch(`http://localhost:9292/user/${user.id}/outfit`)
        .then((resp) => resp.json())
        .then((data) => console.log(data));
    } else {
      console.log("none");
      setFav([]);
      setCart([]);
    }
  };

  useEffect(() => {
    fetchUrl();
  }, [user]);
  useEffect(() => {
    fetch("http://localhost:9292/user")
      .then((resp) => resp.json())
      .then((data) => setAllUsers(data));
  }, []);
  useEffect(() => {
    const displayAlert = setTimeout(() => {
      setItemExistModal(false);
    }, 2000);
  }, [itemExistModal]);
  return (
    <>
      <Router>
        <Nav
          switchWoman={switchWoman}
          switchMan={switchMan}
          woman={woman}
          man={man}
          changeUser={changeUser}
          emptyCart={emptyCart}
          filterSearch={filterSearch}
          user={user}
          setUser={setUser}
        />
        <SubMenu woman={woman} />
        {itemExistModal && <ExistModal />}
        {modal && <Modal closeModal={closeModal} user={user} />}
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
              fav={fav}
              search={search}
            />
          </Route>

          <Route path="/cart">
            <Cart
              cart={cart}
              user={user}
              deleteFromCart={deleteFromCart}
              discount={discount}
              emptyCart={emptyCart}
            />
          </Route>
          <Route path="/checkout">
            <CheckOut user={user} />
          </Route>
          <Route path="/account">
            <LogIn
              changeUser={changeUser}
              allUsers={allUsers}
              addUser={addUser}
            />
          </Route>
          <Route path="/signup">
            <SignUp changeUser={changeUser} addUser={addUser} />
          </Route>
          <Route path="/fav">
            <Fav user={user} fav={fav} deleteFav={deleteFav} />
          </Route>
          <Route path="/:word">
            <Category
              woman={woman}
              man={man}
              showModal={showModal}
              woman={woman}
              switchWoman={switchWoman}
              user={user}
              addToCart={addToCart}
              addFav={addFav}
              deleteFav={deleteFav}
              fav={fav}
              search={search}
              filterSearch={filterSearch}
            />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

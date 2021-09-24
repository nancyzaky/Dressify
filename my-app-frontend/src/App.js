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

  // const addToCart = (item) => {
  //   let result = cart.filter((product) => {
  //     return product.name === item.name;
  //   });
  //   if (result.length > 0) {
  //     setItemExistModal(true);
  //   } else {
  //     fetch(`http://localhost:9292/user/${user.user_name}/cart`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         user: user.user_name,
  //         name: item.name,
  //         price: item.price,
  //         url: item.url,
  //         quantity: 1,
  //       }),
  //     })
  //       .then((resp) => resp.json())
  //       .then((data) => {
  //         console.log(data);
  //         setCart([...cart, data]);
  //       });
  //   }
  // };
  const addToCart = (item) => {
    let result = cart.filter((product) => {
      return product.url === item.url;
    });
    if (result.length > 0) {
      setItemExistModal(true);
    } else {
      fetch(`http://localhost:9292/user/${user.id}/cart`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: item.name,
          price: item.price,
          url: item.url,
          quantity: 1,
        }),
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
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
    fetch(`http://localhost:9292/user/${user.user_name}/cart/${productId}`, {
      method: "DELETE",
    });
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
    if (user) {
      fetch(`http://localhost:9292/user/${user.user_name}/cart`)
        .then((resp) => resp.json())
        .then((data) => {
          if (data) {
            setCart(data.items);
          } else {
            setCart([]);
          }
        });
      fetch(`http://localhost:9292/user/${user.user_name}/fav`)
        .then((resp) => resp.json())
        .then((data) => {
          if (data) {
            console.log(data);
            setFav(data);
          }
        });
    } else {
      console.log("none");
      setFav([]);
      setCart([]);
    }
  };

  useEffect(() => {
    console.log(user);
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
        />
        <SubMenu />
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
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

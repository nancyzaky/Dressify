import React, { useState } from "react";
import Nav from "./Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SubMenu from "./SubMenu";
import Modal from "./Modal";

import Home from "./Home";

function App() {
  const [modal, setShowModal] = useState(false);
  const [woman, setWoman] = useState(true);
  const [man, setMan] = useState(false);
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
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

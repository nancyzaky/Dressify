import React, { useState, useContext } from "react";
import { pageslinks } from "./Data";

const NavContext = React.createContext();

const NavProvider = ({ children }) => {
  const [location, setLocation] = useState({});
  const [links, setLinks] = useState({ page: "", allpages: [] });
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const openSubMenu = (obj, cont) => {
    const result = pageslinks.find((item) => item.name === "Shoes");
    setLocation(obj);
    setLinks({ page: cont, allpages: result });
    setSubMenuOpen(true);
  };

  const closeSubMenu = () => {
    setSubMenuOpen(false);
  };
  return (
    <NavContext.Provider
      value={{ openSubMenu, closeSubMenu, subMenuOpen, location, links }}
    >
      {children}
    </NavContext.Provider>
  );
};

export { NavContext, NavProvider };

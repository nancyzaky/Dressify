import React, { useState, useContext } from "react";
import { pageslinks, pagesMenlinks } from "./Data";

const NavContext = React.createContext();

const NavProvider = ({ children }) => {
  const [location, setLocation] = useState({});
  const [links, setLinks] = useState({ page: "", allpages: [] });
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const openSubMenu = (obj, cont, woman) => {
    let result;
    if (woman) {
      result = pageslinks.find((item) => item.page === cont);
    } else {
      result = pagesMenlinks.find((item) => item.page === cont);
    }
    // const result = pageslinks.find((item) => item.page === cont);
    setLocation(obj);
    setLinks(result);
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

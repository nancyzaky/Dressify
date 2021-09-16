import React, { useContext, useEffect, useRef } from "react";
import { NavContext } from "./Context";

const SubMenu = () => {
  const { openSubMenu, closeSubMenu, subMenuOpen, location, links } =
    useContext(NavContext);
  const asideMeasurements = useRef();
  useEffect(() => {
    const { center, bottom } = location;
    asideMeasurements.current.style.left = `${center}px`;
    asideMeasurements.current.style.top = `${bottom}px`;
    // console.log(links.allpages);
  }, [location]);
  return (
    <aside
      className={`${subMenuOpen ? "submenu show" : "submenu"}`}
      ref={asideMeasurements}
    ></aside>
  );
};

export default SubMenu;

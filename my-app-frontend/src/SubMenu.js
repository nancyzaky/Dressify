import React, { useContext, useEffect, useRef } from "react";
import { NavContext } from "./Context";
import { Link } from "react-router-dom";

const SubMenu = () => {
  const { openSubMenu, closeSubMenu, subMenuOpen, location, links } =
    useContext(NavContext);
  const asideMeasurements = useRef();
  useEffect(() => {
    const { center, bottom } = location;
    asideMeasurements.current.style.left = `${center}px`;
    asideMeasurements.current.style.top = `${bottom}px`;
  }, [location]);
  return (
    <>
      <aside
        className={`${subMenuOpen ? "submenu show" : "submenu"}`}
        ref={asideMeasurements}
      >
        <div className="arrow-up"></div>

        <ul>
          {links.allpages.length > 0 &&
            links.allpages.map((link) => {
              return (
                <li className="cats">
                  <Link
                    to={`/${links.page}-${link}`}
                    style={{ color: "black" }}
                  >
                    {link}
                  </Link>
                </li>
              );
            })}
        </ul>
      </aside>
    </>
  );
};

export default SubMenu;

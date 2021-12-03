import React, { useContext, useEffect, useRef } from "react";
import { NavContext } from "./Context";
import { Link } from "react-router-dom";
import { pagesMenlinks } from "./Data";

const SubMenu = ({ woman }) => {
  const { openSubMenu, closeSubMenu, subMenuOpen, location, links } =
    useContext(NavContext);
  const asideMeasurements = useRef();
  const arrow = useRef();
  useEffect(() => {
    const { center, bottom } = location;
    asideMeasurements.current.style.left = `${center}px`;
    asideMeasurements.current.style.top = `${bottom + 16}px`;
    let arrowLoc = arrow.current.getBoundingClientRect();
    let arrowCenter = arrowLoc.left + arrowLoc.righ / 2;
    arrow.current.style.top = `${arrowCenter + 10}px`;
  }, [location]);
  return (
    <>
      <aside
        className={`${subMenuOpen ? "submenu show" : "submenu"}`}
        ref={asideMeasurements}
      >
        <div className="arrow-up" ref={arrow}></div>

        <ul style={{ width: "100%" }}>
          {links.allpages.map((link) => {
            return (
              <li className="cats">
                <Link to={`/${link}`} style={{ color: "black" }}>
                  {link.split.length > 1
                    ? link.split("_").splice(1, 2).join(" ")
                    : link.split("_").slice(1).join(" ")}
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

// let namesArr = [
//   "ladies_newarrivals_clothes",
//   "ladies_newarrivals_shoesacc",
//   "ladies_newarrivals_swimwear",
//   "ladies_trendconcept",
//   "ladies_linen",
//   "ladies_trousers_wideleg",
//   "ladies_modernclassic_shirtsblouse",
//   "ladies_modernclassic_blazers",
//   "ladies_premium_selection",
//   "ladies_tops",
//   "ladies_shirtsblouses",
//   "ladies_trousers",
//   "ladies_dresses",
//   "ladies_loungewear",
//   "ladies_basics",
//   "ladies_jeans",
//   "ladies_shorts",
//   "ladies_skirts",
//   "ladies_nightwear",
//   "ladies_lingerie",
//   "ladies_jacketscoats",
//   "ladies_blazerswaistcoats",
//   "ladies_shoes_pumps_highheels",
//   "ladies_shoes_ballerinas_flats",
//   "ladies_shoes_sandals_espandrillos",
//   "ladies_shoes_sneakers",
//   "ladies_shoes_boots",
//   "Ladies_shoes_slipon",
//   "ladies_accessories_bags",
//   "ladies_accessories_belts",
//   "ladies_accessories_jewellery",
//   "ladies_accessories_hairaccessories",
//   "ladies_accessories_sunglasses",

//   "ladies_accessories_gloves",
//   "ladies_accessories_hats",
// ];

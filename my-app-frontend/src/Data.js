import React from "react";
import { RiHandbagFill, RiHeartLine } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  GiShirt,
  GiConverseShoe,
  GiPearlNecklace,
  GiLips,
} from "react-icons/gi";
import { BiTrendingUp } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
export const Data = [
  { id: 1, icon: <RiHeartLine className="icon" />, url: "./fav" },
  { id: 2, icon: <BsPerson className="icon" />, url: "./account" },
];

export const Links = [
  {
    id: 2,
    // icon: <GiShirt className="icon" style={{ color: "#7eb1b3" }} />,
    url: "/clothes",
    text: "Clothing",
  },
  {
    id: 3,
    // icon: <GiConverseShoe className="icon" style={{ color: "#7eb1b3" }} />,
    url: "/shoes",
    text: "Shoes",
  },
  {
    id: 4,
    // icon: <GiPearlNecklace className="icon" style={{ color: "#7eb1b3" }} />,
    url: "/",
    text: "Accessories",
  },
  {
    id: 5,
    // icon: <BiTrendingUp className="icon" style={{ color: "#7eb1b3" }} />,
    url: "/",
    text: "Trending Now",
  },
  {
    id: 6,
    // icon: <GiLips className="icon" style={{ color: "#7eb1b3" }} />,
    url: "/body",
    text: "Face + Body",
  },
  {
    id: 7,
    // icon: <GiLips className="icon" style={{ color: "#7eb1b3" }} />,
    url: "/decoration",
    text: "Decoration&furniture",
  },
];

export const pageslinks = [
  {
    id: 1,
    page: "Clothing",
    allpages: ["all", "tops", "shirtblouses", "trousers", "dresses", "jeans"],
  },
  {
    id: 2,
    page: "Accessories",
    allpages: [
      "all",
      "bags",
      "belts",
      "jewellery",
      "hairaccessories",
      "sunglasses",
      "gloves",
      "hats",
    ],
  },
  {
    id: 3,
    page: "Shoes",
    allpages: [
      "all",
      "highheels",
      "flats",
      "sandals",
      "sneakers",
      "boots",
      "slipon",
    ],
  },
  {
    id: 4,
    page: "Home",
    allpages: ["all", "tops", "shirtblouses", "trousers", "dresses"],
  },
  {
    id: 5,
    page: "Trending Now",
    allpages: ["all", "tops", "shirtblouses", "trousers", "dresses"],
  },
  {
    id: 6,
    page: "Face + Body",
    allpages: ["all", "skincare", "bodywash", "scrubs", "haircare"],
  },
  {
    id: 7,
    page: "Decoration&furniture",
    allpages: ["all", "", "", "", ""],
  },
];

// ladies_newarrivals_all
// ladies_newarrivals
// ladies_newarrivals_clothes
// ladies_newarrivals_shoesacc;
// ladies_newarrivals_swimwear

// ladies_all;
// ladies_trendconcept;
// ladies_linen;
// ladies_trousers_wideleg;
// ladies_modernclassic_shirtsblouse;
// ladies_modernclassic_blazers;
// ladies_premium_selection;
// ladies_tops;
// ladies_shirtsblouses;
// ladies_trousers;
// ladies_dresses;
// ladies_loungewear;
// ladies_basics;
// ladies_jeans;
// ladies_shorts;
// ladies_skirts;
// ladies_nightwear;
// ladies_lingerie;
// ladies_jacketscoats;
// ladies_blazerswaistcoats;

// ladies_shoes_pumps_highheels;
// ladies_shoes_ballerinas_flats
// ladies_shoes_sandals_espandrillos;
// ladies_shoes_sneakers;
// ladies_shoes_boots;
// Ladies_shoes_slipon;

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
  {
    id: 1,
    icon: <AiOutlineShoppingCart className="icon" />,
    url: "/cart",
  },
  { id: 2, icon: <RiHeartLine className="icon" />, url: "./fav" },
  { id: 3, icon: <BsPerson className="icon" />, url: "./account" },
];

export const Links = [
  {
    id: 1,
    // icon: <FaHome className="icon" style={{ color: "#7eb1b3" }} />,
    url: "/",
    text: "Home",
  },
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
    name: "Clothing",
    pages: ["all", "tops", "shirtblouses", "trousers", "dresses"],
  },
  {
    id: 2,
    name: "Accessories",
    pages: ["all", "trousers", "dresses"],
  },
  {
    id: 3,
    name: "Shoes",
    pages: ["all", "tops", "shirtblouses", "trousers", "dresses"],
  },
];

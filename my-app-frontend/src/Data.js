import React from "react";
import { RiHandbagFill, RiHeartLine } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";

import { BiTrendingUp } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
export const Data = [
  { id: 1, icon: <RiHeartLine className="icon" />, url: "./fav" },
  { id: 2, icon: <BsPerson className="icon" />, url: "./account" },
];

export const Links = [
  {
    id: 1,
    url: "/clothes",
    text: "Clothing",
  },
  {
    id: 2,
    url: "/",
    text: "Night Wear",
  },
  {
    id: 3,
    url: "/",
    text: "Accessories",
  },
  {
    id: 4,
    url: "/",
    text: "Trending",
  },
  {
    id: 5,
    url: "/",
    text: "Leather",
  },

  {
    id: 6,
    url: "/shoes",
    text: "Shoes",
  },
];

export const pageslinks = [
  {
    id: 1,
    page: "Clothing",
    allpages: [
      "ladies_tops",
      "ladies_shirtsblouses",
      "ladies_trousers",
      "ladies_dresses",
      "ladies_loungewear",
      "ladies_basics",
      "ladies_jeans",
      "ladies_shorts",
      "ladies_skirts",
      "ladies_nightwear",
      "ladies_jacketscoats",
      "ladies_blazerswaistcoats",
    ],
  },
  {
    id: 2,
    page: "Accessories",
    allpages: [
      "ladies_accessories_jewellery",
      "ladies_accessories_hairaccessories",
      "ladies_accessories_sunglasses",
      "ladies_accessories_hats",
    ],
  },
  {
    id: 3,
    page: "Shoes",
    allpages: [
      "ladies_shoes_pumps_highheels",
      "ladies_shoes_ballerinas_flats",
      "ladies_shoes_sandals_espandrillos",
      "ladies_shoes_sneakers",
      "ladies_shoes_boots",
      "Ladies_shoes_slipon",
    ],
  },
  {
    id: 4,
    page: "Home",
    allpages: ["all"],
  },
  {
    id: 5,
    page: "Trending",
    allpages: [
      "ladies_newarrivals_clothes",
      "ladies_newarrivals_shoesacc",
      "ladies_newarrivals_swimwear",
    ],
  },
  {
    id: 6,
    page: "Night Wear",
    allpages: ["ladies_lingerie", "ladies_loungewear", "ladies_nightwear"],
  },
  {
    id: 7,
    page: "Leather",
    allpages: [
      "ladies_accessories_bags",
      "ladies_accessories_gloves",
      "ladies_accessories_belts",
    ],
  },
];

export const pagesMenlinks = [
  {
    id: 1,
    page: "Clothing",
    allpages: [
      "men_basics",
      "men_tshirtstanks",
      "men_shirts",
      "men_trousers",
      "men_shorts",
      "men_hoodiessweatshirts",
      "men_nightwearloungewear",
      "men_sport",
      "men_jeans",
      "cardigans-and-jumpers",
      "men_blazerssuits",
      "men_jacketscoats",
    ],
  },
  {
    id: 2,
    page: "Accessories",
    allpages: [
      "men_accessories_ties_bowties_handkerchiefs",
      "men_accessories_sunglasses",
      "men_accessories_jewellery",
      "men_accessories_sportsaccessories",
      "men_accessories_hatscaps",
    ],
  },
  {
    id: 3,
    page: "Shoes",
    allpages: [
      "men_shoes_sneakers",
      "men_shoes_sandals_espandrillos",
      "men_shoes_boots",
      "men_shoes_dressed",
      "men_shoes_loafers",
      ,
    ],
  },
  {
    id: 4,
    page: "Home",
    allpages: ["all"],
  },
  {
    id: 5,
    page: "Trending",
    allpages: [
      "men_newarrivals_clothes",
      "men_newarrivals_shoesaccessories",
      "men_premium_selection_trousers",
      "men_premium_selection_shoes",
      "men_premium_selection_shirts",
      "men_premium_selection_jacketscoats",
      "men_premium_selection_cardigansjumpers",
      "men_premium_selection_accessories",
    ],
  },
  {
    id: 6,
    page: "Night Wear",
    allpages: ["men_nightwearloungewear", "men_swimweear", "men_socks"],
  },
  {
    id: 7,
    page: "Leather",
    allpages: [
      "men_accessories_bags",
      "men_accessories_gloves",
      "men_accessories_beltsandbraces",
    ],
  },
];

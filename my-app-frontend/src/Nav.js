import React, { useState, useRef, useContext } from "react";
import { Data, Links } from "./Data";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { NavContext } from "./Context.js";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";

const Nav = ({
  switchWoman,
  switchMan,
  woman,
  man,
  changeUser,
  emptyCart,
  filterSearch,
  user,
}) => {
  const { openSubMenu, closeSubMenu, subMenuOpen } = useContext(NavContext);
  const handleHover = (e) => {
    let text = e.target.textContent;
    let loc = e.target.getBoundingClientRect();
    let center = (loc.left + loc.right) / 2;
    let bottom = loc.bottom - 16;
    openSubMenu({ center, bottom }, text);
  };
  const handleMouseOut = (e) => {
    if (!e.target.classList.contains("cat-links-list")) {
      closeSubMenu();
    }
  };
  return (
    <>
      <nav className="navbar" onMouseOver={handleMouseOut}>
        <div className="profile-icons-main">
          <ul className="profile-icons-ul">
            <li className="profile-icons-list">
              <h1>SHOP</h1>
            </li>
            <li
              className={`${
                woman
                  ? "profile-icons-list gender"
                  : "profile-icons-list gender set"
              }`}
              style={{
                paddingRight: "3rem",
                paddingLeft: "3rem",
                paddingBottom: "0.9rem",
                paddingTop: "0.4rem",
              }}
              onClick={switchWoman}
            >
              <span>
                <h3>Women</h3>
              </span>
            </li>
            <li
              className={`${
                woman
                  ? "profile-icons-list gender"
                  : "profile-icons-list gender set"
              }`}
              style={{
                paddingRight: "3rem",
                paddingLeft: "3rem",
                paddingBottom: "0.9rem",
                paddingTop: "0.4rem",
              }}
              onClick={switchMan}
            >
              <span>
                <h3>Men</h3>
              </span>
            </li>
            <li className="profile-icons-list" style={{ paddingLeft: "8rem" }}>
              <input
                className="search-bar"
                type="text"
                placeholder="Search For Items and Brands"
                onChange={(e) => {
                  filterSearch(e.target.value);
                }}
              ></input>
            </li>
            {Data.map((item) => {
              return (
                <li
                  key={item.id}
                  className="profile-icons-list"
                  style={{ padding: "1rem" }}
                >
                  <Link to={item.url}>{item.icon}</Link>
                </li>
              );
            })}
            <Link to="/cart" style={{ paddingLeft: "0.4rem" }}>
              <AiOutlineShoppingCart className="icon" />
            </Link>

            <Link
              to="/"
              style={{
                marginLeft: "6rem",
                fontFamily: "Snell Roundhand, cursive",
                color: "pink",
                fontWeight: "bold",
                fontSize: "32px",
              }}
            >
              {/* <FiLogOut className="icon" style={{ marginLeft: "6rem" }} />{" "} */}
              {/* <span> {user.user_name ? `Hi ${user.user_name}!` : "hi"} </span> */}
              Log out
            </Link>
          </ul>
        </div>

        <div className="category-links-container">
          <ul className="category-links">
            <Link
              to="/"
              style={{
                paddingLeft: "1rem",
                paddingRight: "2.5rem",
                color: "pink",
              }}
            >
              Home
            </Link>
            {Links.map((link) => {
              return (
                <Link
                  to={link.url}
                  key={link.id}
                  className="cat-links-list"
                  onMouseOver={handleHover}
                  style={{
                    height: "3rem",
                  }}
                >
                  {link.text}
                </Link>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;

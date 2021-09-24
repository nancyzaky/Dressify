import React, { useState, useRef, useContext } from "react";
import { Data, Links } from "./Data";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { NavContext } from "./Context.js";
const Nav = ({
  switchWoman,
  switchMan,
  woman,
  man,
  changeUser,
  emptyCart,
  filterSearch,
}) => {
  const { openSubMenu, closeSubMenu, subMenuOpen } = useContext(NavContext);
  const handleHover = (e) => {
    let text = e.target.textContent;
    let loc = e.target.getBoundingClientRect();
    let center = (loc.left + loc.right) / 2;
    let bottom = loc.bottom + 14;
    openSubMenu({ center, bottom }, text);
  };
  const handleMouseLeave = (e) => {
    console.log(e.target.classList);
    if (
      // e.target.classList !== "cat-links-list" ||
      // e.target.classList !== "submenu" ||
      // e.target.classList !== "category-links" ||
      e.target.classList !== "navbar"
    ) {
      // closeSubMenu();
      console.log(e.target.classList);
    }
  };
  return (
    <>
      <nav className="navbar" onMouseOut={handleMouseLeave}>
        <div className="profile-icons-main">
          <ul className="profile-icons-ul">
            <li className="profile-icons-list">
              <h1>ASOS</h1>
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

            <Link
              to="/"
              onClick={() => {
                changeUser({});
                emptyCart();
              }}
            >
              LogOut
            </Link>
          </ul>
        </div>
        <div className="category-links-container">
          <ul className="category-links">
            {Links.map((link) => {
              return (
                <Link
                  to={link.url}
                  key={link.id}
                  className="cat-links-list"
                  onMouseOver={handleHover}
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

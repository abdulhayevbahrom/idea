import React, { useState } from "react";
import "./Header.css";
import Headertop from "./Headertop";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { LiaBalanceScaleSolid } from "react-icons/lia";
import { LuShoppingBag } from "react-icons/lu";
import { LuUser2 } from "react-icons/lu";
import { useSelector } from "react-redux";

function Header() {
  const heartData = useSelector((s) => s.heart);
  return (
    <header>
      <Headertop />
      <nav>
        <Link to="/">
          <img
            src="https://premier.uz/files/global/partners/idea_logo.png"
            alt="logo"
            className="logo"
          />
        </Link>
        <button className="catalogBtn">
          Mahsulotlar katalogi <FaBars />
        </button>
        <div className="searchbar">
          <input type="text" placeholder="Qidiruv" />
          <div className="glass">
            <FiSearch />
          </div>
        </div>
        <div className="navLinks">
          <Link to={"/heart"}>
            <FaRegHeart />
            <span>{heartData.length}</span>
            <p>Tanlanganlar</p>
          </Link>
          <Link to={"/heart"}>
            <LuShoppingBag />
            <span>0</span>
            <p>Savatcha</p>
          </Link>
          <Link to={"/heart"}>
            <LiaBalanceScaleSolid />
            <span>0</span>
            <p>Taqqoslash</p>
          </Link>
          <Link to={"/heart"}>
            <LuUser2 />
            <p>Kirish</p>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;

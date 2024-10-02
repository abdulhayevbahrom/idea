import React, { useState } from "react";
import "./Header.css";
import Headertop from "./Headertop";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { LiaBalanceScaleSolid } from "react-icons/lia";
import { LuShoppingBag } from "react-icons/lu";
import { LuUser2 } from "react-icons/lu";
import { useSelector } from "react-redux";
import Login from "../../routes/login/Login";
import Katalog from "../../routes/katalog/Katalog";

function Header() {
  const navigate = useNavigate();
  const heartData = useSelector((s) => s.heart);
  const cartData = useSelector((s) => s.card);
  const compareData = useSelector((s) => s.compare);

  const [openLogin, setOpenLogin] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [katalogState, setKatalogState] = useState(false);

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

        <button
          onClick={() => setKatalogState(!katalogState)}
          className="catalogBtn"
        >
          Mahsulotlar katalogi <FaBars />
          {katalogState && <Katalog />}
        </button>

        <div className="searchbar">
          <input
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
            placeholder="Qidiruv"
          />
          <button
            onClick={() => navigate(`/search/${searchValue}`)}
            className="glass"
          >
            <FiSearch />
          </button>
        </div>
        <div className="navLinks">
          <Link to={"/heart"}>
            <FaRegHeart />
            <span>{heartData.length}</span>
            <p>Tanlanganlar</p>
          </Link>
          <Link to={"/card"}>
            <LuShoppingBag />
            <span>{cartData.length}</span>
            <p>Savatcha</p>
          </Link>
          <Link to={"/compare"}>
            <LiaBalanceScaleSolid />
            <span>{compareData.length}</span>
            <p>Taqqoslash</p>
          </Link>
          <Link onClick={() => setOpenLogin(true)}>
            <LuUser2 />
            <p>Kirish</p>
          </Link>
        </div>
      </nav>
      {openLogin && <Login setOpenLogin={setOpenLogin} />}
    </header>
  );
}

export default Header;

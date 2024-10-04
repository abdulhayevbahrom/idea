import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiPercent } from "react-icons/fi";
import { FaChevronUp, FaLocationDot } from "react-icons/fa6";
import { FaChevronDown, FaPhoneAlt } from "react-icons/fa";
import rusFlag from "../../assets/russia.png";
import uzbFlag from "../../assets/uzbekistan.png";
import Action from "../../routes/action/Action";
import Shops from "../../routes/shops/Shops" 

function Headertop() {
  const [langState, setLangState] = useState(false);
  const [currentLang, setCurrentLang] = useState(localStorage.getItem("lang"));
  const changeLanguage = (lang) => {
    localStorage.setItem("lang", lang);
    setCurrentLang(lang);
    setLangState(!langState);
  };

  return (
    <div className="header_top">
      <div className="left">
        <Link to={"/action"}>
          <FiPercent /> Aksiya va chegirmalar
        </Link>
        <Link to={"/shops"}>
          <FaLocationDot /> Do'konlar
        </Link>
      </div>
      <div className="right">
        <a href="tel:+998939119572">
          <FaPhoneAlt /> 93 911 95 72
        </a>
        <div className="lang" onClick={() => setLangState(!langState)}>
          <img
            src={currentLang === "uz" ? uzbFlag : rusFlag}
            alt=""
            className="langImg"
          />
          <span> {currentLang === "uz" ? "O'zbekcha" : "Русский"}</span>
          {langState ? <FaChevronUp /> : <FaChevronDown />}
        </div>

        {langState && (
          <div className="languages">
            <h3>Tilni tanlang</h3>
            <div
              onClick={() => changeLanguage("rus")}
              className="languages_item"
            >
              <input
                defaultChecked={currentLang === "rus"}
                name="lang"
                id="lang1"
                type="radio"
                value="rus"
              />
              <label htmlFor="lang1">
                <img src={rusFlag} alt="" /> Русский
              </label>
            </div>
            <div
              onClick={() => changeLanguage("uz")}
              className="languages_item"
            >
              <input
                defaultChecked={currentLang === "uz"}
                name="lang"
                id="lang2"
                type="radio"
                value="rus"
              />
              <label htmlFor="lang2">
                <img src={uzbFlag} alt="" /> O'zbekcha
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Headertop;

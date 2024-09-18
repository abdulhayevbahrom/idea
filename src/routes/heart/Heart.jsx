import React from "react";
import "./Heart.css";
import { FaAngleRight } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { GoTrash } from "react-icons/go";
import { LuShoppingBag } from "react-icons/lu";
import { LiaBalanceScaleSolid } from "react-icons/lia";

function Heart() {
  const navigate = useNavigate();

  let heartData = [2];

  return (
    <div className="heart">
      <p>
        Bosh sahifa
        <span>
          <FaAngleRight /> Tanlanganlar
        </span>
      </p>
      {!heartData.length ? (
        <div className="div">
          <img
            src="https://idea.uz/_next/image?url=%2Fimg%2Fothers%2Fheart-empty.png&w=1920&q=75"
            alt=""
          />
          <h1>Tanlanganlarda hozircha hech narsa yoʻq</h1>
          <p>
            Mahsulot kartochkasida joylashgan yurakchani bosib, mahsulotlarni
            qoʻshishingiz mumkin
          </p>
          <button onClick={() => navigate("/")}>Bosh sahifaga o'tish</button>
        </div>
      ) : (
        <div className="heart_content">
          <div className="tanlanganlar">
            <div className="tanlangan">
              <img src="https://idea.uz/_next/image?url=https%3A%2F%2Fapi.idea.uz%2Fstorage%2Fproducts%2FDecember2021%2FpThb4rqQNdNZF1AyE9Fa.jpg&w=128&q=75" alt="" />
              <div className="lorem">
                <div className="som">
                  <h2>1 165 000 soʻm</h2>
                  <span> х 6 oy</span>
                </div>
                <Link to={"/"} className="link">LG F2M5HS6S kir yuvish mashinasi</Link>
                <span>Mahsulot kodi: 4688</span>
              </div>
              <GoTrash />
              <LuShoppingBag />
              <LiaBalanceScaleSolid />
            </div>
          </div>
          <div className="sizning_istaklaringiz">
            <h3>Sizning istaklaringiz roʻyxati</h3>
            <div className="soni">
              <span>Mahsulotlar soni</span>
              <span>0</span>
            </div>
            <button className="btn1">Hammasini o'chirish</button>
            <button className="btn2">Savatga o'tish</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Heart;

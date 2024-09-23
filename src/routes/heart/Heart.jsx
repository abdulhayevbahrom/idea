import React from "react";
import "./Heart.css";
import { FaAngleRight } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { GoTrash } from "react-icons/go";
import { LuShoppingBag } from "react-icons/lu";
import { LiaBalanceScaleSolid } from "react-icons/lia";
import { useSelector, useDispatch } from "react-redux";
import { clearHeat, removefromHeart } from "../../context/heartSlice";

function Heart() {
  const dispatch = useDispatch();
  const heartData = useSelector((ombor) => ombor.heart);
  const navigate = useNavigate();

  let clearHeartData = () => {
    dispatch(clearHeat());
  };

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
            {heartData.map((item, index) => (
              <div key={index} className="tanlangan">
                <div className="left">
                  <img src={item.images[0]} alt="" />

                  <div className="lorem">
                    <div className="som">
                      <h2>{Math.round(item.price / 6)} soʻm</h2>
                      <span> x 6 oy</span>
                    </div>
                    <Link to={`singlepage/${item.id}`} className="link">
                      {item.name}
                    </Link>
                    <span>Mahsulot kodi: 4688</span>
                  </div>
                </div>
                <div>
                  <GoTrash onClick={() => dispatch(removefromHeart(item.id))} />
                  <LuShoppingBag />
                  <LiaBalanceScaleSolid />
                </div>
              </div>
            ))}
          </div>
          <div className="sizning_istaklaringiz">
            <h3>Sizning istaklaringiz roʻyxati</h3>
            <div className="soni">
              <span>Mahsulotlar soni</span>
              <span>{heartData.length}</span>
            </div>
            <button onClick={() => clearHeartData()} className="btn1">
              Hammasini o'chirish
            </button>
            <button className="btn2">Savatga o'tish</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Heart;

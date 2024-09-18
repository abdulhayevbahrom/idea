import React from "react";
import "./Heart.css";
import { FaAngleRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

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
          <h1>malumotlar</h1>
        </div>
      )}
    </div>
  );
}

export default Heart;

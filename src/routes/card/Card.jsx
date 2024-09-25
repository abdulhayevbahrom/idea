import React from 'react';
import './Card.css';
import { FaAngleRight } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { GoTrash } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { LiaBalanceScaleSolid } from "react-icons/lia";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { removefromCard } from "../../context/cardSlise";

function Card() {
  const cardData = useSelector((s) => s.card)
  console.log(cardData);
  // const navigate = useNavigate();
  return (
    <div className='card'>
      <p>
        Bosh sahifa
        <span>
          <FaAngleRight /> Savatcha
        </span>
      </p>
      {/* <div className="savatcha">
        <img
          src="https://idea.uz/_next/image?url=%2Fimg%2Fothers%2Fbasket-empty.png&w=1920&q=75"
          alt=""
        />
        <h1>Savatchada hozircha hech narsa yoʻq</h1>
        <p>Siz xaridni asosiy sahifadan boshlashingiz yoki qidiruvdan foydalanishingiz mumkin</p>
        <button onClick={() => navigate("/")}>Bosh sahifaga o'tish</button>
      </div> */}
      <div className="basket">
        <div className="left">
          {
            cardData?.map((item, index) =>
              <div key={index} className="cart_item">
                <div className="iphone">
                  <img src={item.images[0]} alt="" />
                  <div className='tolov'>
                    <div className='som'>
                      <h3>{item.price}</h3>
                      <span>To'liq to'lov</span>
                    </div>
                    <Link className='link' to={"/"}>{item.name}</Link>
                    <span>Mahsulot kodi: 4034</span>
                  </div>
                </div>
                <div className='icon'>
                  <div className='icons'>
                    <GoTrash onClick={() => dispatch(removefromCard(item.id))} />
                    <CiHeart />
                    <LiaBalanceScaleSolid />
                  </div>
                  <div className='nol'>
                    <FaMinus className='minus' />
                    <span>1</span>
                    <FaPlus className='plus' />
                  </div>
                </div>
              </div>
            )
          }

        </div>
        <div className="right">
          <h2>Sizning savatchangiz</h2>
          <h3>IPHONE 11 BLACK 128GB (1 dona)</h3>
          <div><span>Narx</span><span>9 588 000 soʻm</span></div>
          <h3>BCD275 (1 dona)</h3>
          <div><span>Narx</span><span>2 999 000 soʻm</span></div>
          <h3>43PRM720 S VOICE (1 dona)</h3>
          <div><span>Narx</span><span>2 690 000 soʻm</span></div>
          <div><h3>Sizning</h3><span>15 277 000 soʻm x 1</span></div>
          <div><h3>toʻlovingiz:</h3><span>раз</span></div>
          <h3>= 15 277 000 soʻm</h3>
          <button>Rasmiylashtirish</button>
        </div>
      </div>
    </div>
  )
}

export default Card;
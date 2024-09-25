import React from "react";
import "./Card.css";
import { FaAngleRight } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { GoTrash } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { LiaBalanceScaleSolid } from "react-icons/lia";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
  removefromCard,
  decrementQuantity,
  incrementQuantity,
} from "../../context/cardSlice";

function Card() {
  const dispatch = useDispatch();
  const cardData = useSelector((s) => s.card);
  const navigate = useNavigate();
  document.title = "Savatcha";

  let totalPrice = cardData.reduce((a, b) => a + b.quantity * b.price, 0);

  return (
    <div className="card">
      <p>
        Bosh sahifa
        <span>
          <FaAngleRight /> Savatcha
        </span>
      </p>
      {!cardData.length ? (
        <div className="emptyCart">
          <img
            src="https://idea.uz/_next/image?url=%2Fimg%2Fothers%2Fbasket-empty.png&w=1920&q=75"
            alt=""
          />
          <h1>Savatchada hozircha hech narsa yoʻq</h1>
          <p>
            Siz xaridni asosiy sahifadan boshlashingiz yoki qidiruvdan
            foydalanishingiz mumkin
          </p>
          <button onClick={() => navigate("/")}>Bosh sahifaga o'tish</button>
        </div>
      ) : (
        <div className="basket">
          <div className="basket_left">
            {cardData?.map((item, index) => (
              <div key={index} className="cart_item">
                <div className="cart_item_info">
                  <img src={item.images[0]} alt="" />
                  <div className="cart_item_info_name">
                    <h3>{item.price} so'm</h3>
                    <Link to={"/singlepage/" + item.id}>{item.name}</Link>
                    <span>Mahsulot kodi: 4034</span>
                  </div>
                </div>
                <div className="cart_item_actions">
                  <GoTrash onClick={() => dispatch(removefromCard(item.id))} />
                  <CiHeart />
                  <LiaBalanceScaleSolid />
                  <div className="cart_item_count">
                    <FaMinus
                      onClick={() => dispatch(decrementQuantity(item.id))}
                    />
                    <span>{item.quantity}</span>
                    <FaPlus
                      onClick={() => dispatch(incrementQuantity(item.id))}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="basket_right">
            <h3>Sizning savatchangiz</h3>
            {cardData.map((item, index) => (
              <div key={index} className="basket_right_item">
                <p>
                  {item.name} ({item.quantity})
                </p>
                <div className="basket_right_item_price">
                  <span>Narx</span>{" "}
                  <span>{item.price * item.quantity} so'm</span>
                </div>
              </div>
            ))}
            <div className="basket_right_totalInfo">
              <div>
                <span>Sizning</span> <p>{totalPrice} x 1 marta</p>
              </div>
              <div>
                <span>to'lovingiz:</span> <p>={totalPrice}</p>
              </div>
              <button>Rasmiylashtirish</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;

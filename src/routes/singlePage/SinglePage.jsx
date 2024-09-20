import React from 'react';
import './SinglePage.css';
import { FaAngleRight } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { LiaBalanceScaleSolid } from "react-icons/lia";

function SinglePage() {
    return (
        <div className='singalePage'>
            <div className="sahifalar">
                <p>Bosh sahifa </p>
                <FaAngleRight />
                <p>Katta maishiy texnika </p>
                <FaAngleRight />
                <p>Kir yuvish mashinalari </p>
                <FaAngleRight />
                <p>Kir yuvish mashinalari </p>
                <FaAngleRight />
                <p>Kir yuvish mashinalari LG</p>
                <FaAngleRight className='svg' />
                <span> LG F2M5HS6S kir yuvish mashinasi</span>
            </div>
            <div className="rasmiy_kafolat">
                <div className="kafolat">
                    <div className="img1"></div>
                    <div>
                        <p>Rasmiy kafolat</p>
                        <span>barcha mahsulotlar uchun</span>
                    </div>
                </div>
                <div className="kafolat">
                    <div className="img2"></div>
                    <div>
                        <p>O'zbekiston bo'ylab</p>
                        <span>yetkazib berish</span>
                    </div>
                </div>
                <div className="kafolat">
                    <div className="img3"></div>
                    <div>
                        <p>Eng yaqin do'kondan</p>
                        <span>olib ketish</span>
                    </div>
                </div>
                <div className="kafolat">
                    <div className="img4"></div>
                    <div>
                        <p>Qulay muddatli to'lov</p>
                        <span>boshlang’ich to'lovsiz</span>
                    </div>
                </div>
            </div>
            <div className="left">
                <h1>Стиральная машина Premier PRM70F1201LIN/DG</h1>
                <div className="tanlanganlarda" style={{ display: "flex", gap: "20px" }}>
                    <div style={{ display: "flex", paddingTop: "10px", cursor: "pointer" }}>
                        <FaHeart className='heat' /><p>Tanlanganlarda</p>
                    </div>
                    <div style={{ display: "flex", paddingTop: "10px", cursor: "pointer" }}>
                        <LiaBalanceScaleSolid className='taqqos' /><p>Taqqoslash</p>
                    </div>
                </div>
                <div style={{display: "flex"}}>
                    <div className="imgs">
                        <img className='mashina' src="https://idea.uz/_next/image?url=https%3A%2F%2Fapi.idea.uz%2Fstorage%2Fproducts%2FSeptember2024%2F7x1sf5HkyD0y11q4PMQz.png&w=96&q=75" alt="" />
                        <img src="https://idea.uz/_next/image?url=https%3A%2F%2Fapi.idea.uz%2Fstorage%2Fproducts%2FSeptember2024%2FvkFcE9XRpQ4LpTUL6L9F.png&w=96&q=75" alt="" />
                        <img src="https://idea.uz/_next/image?url=https%3A%2F%2Fapi.idea.uz%2Fstorage%2Fproducts%2FSeptember2024%2FqVXF41nlWf0mS4lMVwDz.png&w=96&q=75" alt="" />
                    </div>
                    <img className='kirmashina' src="https://idea.uz/_next/image?url=https%3A%2F%2Fapi.idea.uz%2Fstorage%2Fproducts%2FSeptember2024%2F7x1sf5HkyD0y11q4PMQz.png&w=1920&q=75" alt="" />
                </div>
            </div>
        </div>
    )
}

export default SinglePage
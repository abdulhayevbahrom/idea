import React from 'react';
import "./Compare.css"
import { FaAngleRight } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import { removefromCompare } from "../../context/compare";
import { useDispatch, useSelector } from 'react-redux';

function Compare() {
    const dispatch = useDispatch()
    const compareData = useSelector((ombor) => ombor.compare)
    const navigate = useNavigate();
    console.log(compareData);

    let removefromCompareData = () => {
        dispatch(removefromCompare());
    }
   
   
    return (
        
        <div className='compare'>
            <p>
                Bosh sahifa
                <span>
                    <FaAngleRight /> Tanlanganlar
                </span>
            </p>

            {!compareData.length ? (
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
                <div className="cards">
                    {compareData.map((item, index) =>
                        <div key={index} className="card">
                            <FaRegTrashAlt onClick={() => dispatch(removefromCompare(item.id))} className='trash' />
                            <Link className='card_img'>
                                <img src={item.images[0]} alt="" />
                            </Link>
                            <b>{item.price} so'm x 6 oy</b>
                            <p>{item.name}</p>
                        </div>
                    )}
                        
                    <a href=""><GoPlus />Taqqoslash uchun qo'shish</a>
                    <p>Umumiy xususiyatlar</p>
                </div>
            )}
        </div>
    );
}

export default Compare;
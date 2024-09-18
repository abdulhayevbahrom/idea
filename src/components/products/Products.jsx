import React from "react";
import "./Products.css";
import { Link } from "react-router-dom";
import { FaArrowRight, FaRegHeart } from "react-icons/fa6";
import { LiaBalanceScaleSolid } from "react-icons/lia";
import { LuShoppingBag } from "react-icons/lu";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Products({ title, data }) {
  return (
    <div className="products">
      <div className="products_navigation">
        <h2 className="products_title">{title}</h2>
        <Link to={"/"}>
          Hammasini ko'rish <FaArrowRight />
        </Link>
      </div>
      <Swiper
        slidesPerView={5}
        spaceBetween={7}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index} className="product_slide_item">
            <div className="product_actions">
              <LiaBalanceScaleSolid />
              <FaRegHeart />
            </div>
            <Link to={"/"} className="product_img">
              <img src={item.images[0]} alt="" />
            </Link>
            <b>{item.price} so'm</b>
            <span>{Math.floor(item.price / 6)} so'mdan </span>
            <p>{item.name}</p>
            <div className="product_brend">
              <p>Brend:</p> <Link to={"/"}>{item.brend}</Link>
            </div>
            <div className="buy_product">
              <button>
                Hozirni o'zidayoq <br /> xarid qilish
              </button>
              <button>
                <LuShoppingBag />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Products;

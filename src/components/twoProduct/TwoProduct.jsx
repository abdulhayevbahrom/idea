import React from "react";
import "./Products.css";
import { Link } from "react-router-dom";
import { maishiyTexnika } from "../../data/products";
import { FaRegHeart } from "react-icons/fa6";
import { LiaBalanceScaleSolid } from "react-icons/lia";
import { LuShoppingBag } from "react-icons/lu";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Products() {
  return (
    <div className="products">
      <div className="products_navigation">
        <h2 className="products_title">Xit savdo</h2>
        <Link to={"/"}>Hammasini ko'rish > </Link>
      </div>
      <div className="products_content">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        > 
          {maishiyTexnika?.map((item, index) => (
            <SwiperSlide>
              <div key={index}>
                <div className="product_actions">
                  <LiaBalanceScaleSolid />
                  <FaRegHeart />
                </div>
                <img src={item.images[0]} alt="" />
                <b>{item.price} so'm</b>
                <span>{Math.floor(item.price / 6)} so'mdan </span>
                <p>{item.name}</p>
                <div className="brend">
                  {" "}
                  <p className="p">Brend:</p> <Link to={"/"}>{item.brend}</Link>
                </div>
                <div className="buy_product">
                  <button>Hozirni o'zidayoq xarid qilish</button>
                  <button>
                    <LuShoppingBag />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Products;

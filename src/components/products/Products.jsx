import React from "react";
import "./Products.css";
import { Link } from "react-router-dom";
import { FaArrowRight, FaHeart, FaRegHeart } from "react-icons/fa6";
import { LiaBalanceScaleSolid } from "react-icons/lia";
import { LuShoppingBag } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useDispatch, useSelector } from "react-redux";
import { addToHeart, removefromHeart } from "../../context/heartSlice";
import { addToCompare, removefromCompare } from "../../context/compare"

function Products({ title, data }) {
  const dispatch = useDispatch();
  const heartData = useSelector((s) => s.heart);
  const compare = useSelector((b) => b.compare);
  const addToFavorites = (product) => {
    dispatch(addToHeart(product));
  };
  const addToCompare = (product) => {
    console.log("taroz");
    dispatch(addToCompare(product));
  }
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
              <LiaBalanceScaleSolid onClick={() => addToCompare(item)}/>
              
              {heartData.some((i) => i.id === item.id) ? (
                <FaHeart
                  className="redHeart"
                  onClick={() => dispatch(removefromHeart(item.id))}
                />
              ) : (
                <FaRegHeart onClick={() => addToFavorites(item)} />
              )}
            </div>
            <Link to={`singlepage/${item.id}`} className="product_img">
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

import React from "react";
import "./Search.css";
import "../../components/products/Products.css";
import { Link, useParams } from "react-router-dom";
import { FaChevronRight, FaChevronUp } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { CiGrid2H } from "react-icons/ci";
import { smartPhones } from "../../data/products";
import { FaArrowRight, FaHeart, FaRegHeart } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";
import { LuShoppingBag } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useDispatch, useSelector } from "react-redux";
import { addToHeart, removefromHeart } from "../../context/heartSlice";
import { addToCompare, removefromCompare } from "../../context/compare";
import { addToCard, removefromCard } from "../../context/cardSlice";
import { LiaBalanceScaleSolid } from "react-icons/lia";

function Search() {
  const dispatch = useDispatch();
  const heartData = useSelector((s) => s.heart);
  const cartData = useSelector((s) => s.card);
  const compare = useSelector((b) => b.compare);
  const addToFavorites = (product) => {
    dispatch(addToHeart(product));
  };
  const compareSlice = (product) => {
    dispatch(addToCompare(product));
  };
  const { name } = useParams();
  console.log(name);

  document.title = name;

  return (
    <div className="search">
      <div className="searchNavigation">
        <Link to="/">Bosh sahifa</Link> <FaChevronRight /> <Link>{name}</Link>
      </div>
      <h1 className="searchTitle">{name}</h1>
      <div className="searchWrapper">
        <div className="search_sidebar">
          <div className="topSidebar">
            <input type="text" placeholder="telefon" />
          </div>
          <div className="bottomSidebar">
            <h3>Ishlab chiqaruvch <FaChevronUp /></h3>
            <input type="text" placeholder="Ishlab chiqaruvchini topish" />
            <p><input type="checkBox" />Panasonic</p>
            <p><input type="checkBox" />BQ</p>
            <p><input type="checkBox" />NOVEY</p>
            <hr />
            <h3 className="both">Narx <FaChevronUp /></h3>
            <input type="from" />
            <input type="upTo" />
          </div>
        </div>
        <div className="search_result">
          <div className="result_filter">
            <div className="result_filter_btns">
              <button>Sana boyicha</button>
              <button>Narx boyicha</button>
              <button>Ommabopligi boyicha</button>
            </div>
            <div className="result_filter_right">
              ko'rinishi:
              <IoGrid />
              <CiGrid2H />
            </div>
          </div>

            {smartPhones.map((item, index) => (
              <div className="product" key={index}>
                <div className="product_slide_item1">
                  <div className="product_actions">
                    {compare.some((i) => i.id === item.id) ? (
                      <LiaBalanceScaleSolid
                        className="secondaryCompare"
                        style={{ opacity: 1 }}
                        onClick={() => dispatch(removefromCompare(item.id))}
                      />
                    ) : (
                      <LiaBalanceScaleSolid onClick={() => compareSlice(item)} />
                    )}

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
                    {cartData.some((i) => i.id === item.id) ? (
                      <button
                        onClick={() => dispatch(removefromCard(item.id))}
                        className="product_item_orange_btn"
                      >
                        <IoMdCheckmark />
                      </button>
                    ) : (
                      <button onClick={() => dispatch(addToCard(item))}>
                        <LuShoppingBag />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          <div className="result_wrapper"></div>
        </div>
      </div>
    </div>
  );
}

export default Search;

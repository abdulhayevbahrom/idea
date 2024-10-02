import React, { useEffect, useState } from "react";
import "./Search.css";
import "../../components/products/Products.css";
import { Link, useParams } from "react-router-dom";
import { FaChevronRight, FaChevronUp } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { CiGrid2H } from "react-icons/ci";
import {
  smartPhones,
  HouseholdAppliances,
  maishiyTexnika,
  smallAppliancesForTheHome,
} from "../../data/products";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";
import { LuShoppingBag } from "react-icons/lu";
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
  const { name } = useParams();
  document.title = name;
  const [data, setData] = useState([]);
  const [fullData, setFullData] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [sortPrice, setSortPrice] = useState(false);

  const allData = [
    ...smartPhones,
    ...HouseholdAppliances,
    ...maishiyTexnika,
    ...smallAppliancesForTheHome,
  ];

  const brands = [...new Set(fullData.map((i) => i.brend))];
  let minAndMaxPrices = fullData.sort((a, b) => (a?.price > b?.price ? 1 : -1));

  useEffect(() => {
    setData(
      allData.filter((item) =>
        item.name.toLowerCase().includes(name.toLowerCase())
      )
    );
    setFullData(
      allData.filter((item) =>
        item.name.toLowerCase().includes(name.toLowerCase())
      )
    );
  }, [name]);

  const heartData = useSelector((s) => s.heart);
  const cartData = useSelector((s) => s.card);
  const compare = useSelector((b) => b.compare);

  const addToFavorites = (product) => dispatch(addToHeart(product));
  const compareSlice = (product) => dispatch(addToCompare(product));

  const filterBrands = (e) => {
    let checked = e.target.checked;
    checked
      ? setData(data.filter((i) => i.brend === e.target.value))
      : setData(fullData);
  };

  const filterPrice = (maxPrice) =>
    setData(
      fullData.filter((i) => i.price <= +maxPrice && i.price >= +minPrice)
    );

  const handleSortPrice = () => {
    sortPrice
      ? setData(data.sort((a, b) => (a.price > b.price ? 1 : -1)))
      : setData(data.sort((a, b) => (a.price < b.price ? 1 : -1)));
  };

  return (
    <div className="search">
      <div className="searchNavigation">
        <Link to="/">Bosh sahifa</Link> <FaChevronRight /> <Link>{name}</Link>
      </div>
      <h1 className="searchTitle">{name}</h1>
      <div className="searchWrapper">
        <div className="search_sidebar">
          <div className="topSidebar">
            <input type="text" placeholder={name} defaultValue={name} />
          </div>
          <div className="bottomSidebar">
            <h3>
              Ishlab chiqaruvch <FaChevronUp />
            </h3>
            <input type="text" placeholder="Ishlab chiqaruvchini topish" />
            {brands.map((item, index) => (
              <p key={index}>
                <input
                  value={item}
                  onChange={(e) => filterBrands(e)}
                  type="checkBox"
                />
                {item}
              </p>
            ))}

            <hr />
            <h3 className="both">
              Narx <FaChevronUp />
            </h3>
            <input
              type="number"
              className="priceFrom"
              placeholder={minAndMaxPrices[0]?.price}
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <input
              type="number"
              className="priceTo"
              placeholder={minAndMaxPrices[minAndMaxPrices.length - 1]?.price}
              onChange={(e) => filterPrice(e.target.value)}
            />
          </div>
        </div>
        <div className="search_result">
          <div className="result_filter">
            <div className="result_filter_btns">
              <button>Sana boyicha</button>
              <button
                onClick={() => {
                  setSortPrice(!sortPrice);
                  handleSortPrice();
                }}
              >
                Narx boyicha
              </button>
              <button>Ommabopligi boyicha</button>
            </div>
            <div className="result_filter_right">
              ko'rinishi:
              <IoGrid />
              <CiGrid2H />
            </div>
          </div>

          <div className="result_products">
            {data?.map((item, index) => (
              <div key={index} className="product_slide_item1">
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;

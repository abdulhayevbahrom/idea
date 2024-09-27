import React from "react";
import "./Search.css";
import { Link, useParams } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { CiGrid2H } from "react-icons/ci";
import { smartPhones } from "../../data/products";

function Search() {
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
        <div className="search_sidebar"></div>
        <div className="search_result">
          <div className="result_filter">
            <div className="result_filter_btns">
              <button>Sana boyicha</button>
              <button>Narx boyicha</button>
              <button>Ommabopligi boyicha</button>
            </div>
            <div className="result_filter_right">
              korinishi:
              <IoGrid />
              <CiGrid2H />
            </div>
          </div>
          <div className="result_wrapper"></div>
        </div>
      </div>
    </div>
  );
}

export default Search;

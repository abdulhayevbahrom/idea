import React from "react";
import "./Katalog.css";
import { GoChevronDown } from "react-icons/go";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { catalogData } from "../../data/katalog";

function Katalog() {
  return (
    <div className="katalog">
      <ul className="katalogSidebar">
        {catalogData.map((item, index) => (
          <li key={index} className="katalogSidebarItem">
            {item.title} <FaChevronRight />
            <div className="extraLinks">
              <h3>{item.title}</h3>
              <div className="extraLinksWrapper">
                {item.catalogItemData.map((extra, index) => (
                  <div>
                    <h3>{extra.catalogItemTitle}</h3>
                    {extra.catalogItemLinks.map((url, index) => (
                      <Link to={url.link}>{url.title}</Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Katalog;

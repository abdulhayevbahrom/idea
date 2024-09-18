import React from "react";
import Banner from "../../components/banner/Banner";
import Products from "../../components/products/Products";
import TwoProduct from "../../components/twoProduct/TwoProduct";

function Home() {
  return (
    <div>
      <Banner />
      <Products />
      <TwoProduct />
    </div>
  );
}

export default Home;

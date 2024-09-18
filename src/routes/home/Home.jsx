import React from "react";
import Banner from "../../components/banner/Banner";
import Products from "../../components/products/Products";

import { smartPhones, maishiyTexnika } from "../../data/products";

function Home() {
  return (
    <div>
      <Banner />
      <Products title={"Sotuvlar Xiti"} data={maishiyTexnika} />
      <Products title={"Smartfonlar"} data={smartPhones} />
      <Products title={"Katta maishiy texnika"} data={smartPhones} />
    </div>
  );
}

export default Home;

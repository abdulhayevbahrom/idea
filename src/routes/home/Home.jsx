import React from "react";
import Banner from "../../components/banner/Banner";
import Products from "../../components/products/Products";
import Wrapper from "../../components/wrapper/Wrapper";
import {
  smartPhones,
  maishiyTexnika,
  HouseholdAppliances,
  smallAppliancesForTheHome,
} from "../../data/products";

function Home() {
  return (
    <div>
      <Banner />
      <Products title={"Sotuvlar Xiti"} data={maishiyTexnika} />
      <Products title={"Smartfonlar"} data={smartPhones} />
      <Products title={"Katta maishiy texnika"} data={HouseholdAppliances} />
      <Products
        title={"Uy uchun kichik jihozlar"}
        data={smallAppliancesForTheHome}
      />
      <Wrapper />
    </div>
  );
}

export default Home;

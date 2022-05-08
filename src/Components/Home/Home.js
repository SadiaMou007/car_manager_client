import React from "react";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Discount from "./Discount/Discount";
import Inventories from "./Inventories/Inventories";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Inventories></Inventories>
      <Discount></Discount>
      <About></About>
    </div>
  );
};

export default Home;

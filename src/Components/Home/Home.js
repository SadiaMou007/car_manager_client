import React from "react";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Inventories from "./Inventories/Inventories";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Inventories></Inventories>
      <About></About>
    </div>
  );
};

export default Home;

import React from "react";
import Banner from "./Banner/Banner";
import Inventories from "./Inventories/Inventories";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <h1>Inventories</h1>
      <Inventories></Inventories>
    </div>
  );
};

export default Home;

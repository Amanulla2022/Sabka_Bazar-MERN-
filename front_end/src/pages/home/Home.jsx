import React from "react";
import Banners from "../../components/home/banners/Banners";
import Categories from "../../components/home/categories/Categories";

const Home = () => {
  return (
    <main style={{ marginTop: "8rem" }}>
      <Banners />
      <Categories />
    </main>
  );
};

export default Home;

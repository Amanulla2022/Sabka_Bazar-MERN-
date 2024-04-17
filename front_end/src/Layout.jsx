import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./common/header/Header";
import Home from "./pages/home/Home";
import Footer from "./common/footer/Footer";
import Products from "./pages/products/Products";
import PageNotFound from "./pages/not_a_page/PageNotFound";

const Layout = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
          <Route path="/products" element={<Products />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default Layout;

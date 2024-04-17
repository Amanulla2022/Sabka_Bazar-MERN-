import React, { useState } from "react";
import SideBar from "./../../components/products/sidebar/SideBar";
import ProductDetails from "./../../components/products/productDetails/ProductDetails";
import products from "./../../json/products";

const categoryNames = {
  "5b6899683d1a866534f516e0": "Baby",
  "5b675e5e5936635728f9fc30": "Beverages",
  "5b6899123d1a866534f516de": "Bakery",
  "5b68994e3d1a866534f516df": "Beauty-Hygine",
  "5b6899953d1a866534f516e2": "Fruits-Veg",
};
const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <main style={{ marginTop: "8rem", display: "flex" }}>
      <SideBar setSelectedCategory={setSelectedCategory} />
      <ProductDetails
        products={filteredProducts}
        categoryName={categoryNames[selectedCategory]}
      />
    </main>
  );
};

export default Products;

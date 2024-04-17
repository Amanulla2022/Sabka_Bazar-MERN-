import React from "react";
import "./SideBar.scss";

const SideBar = ({ setSelectedCategory }) => {
  const handleClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div className="sidebar">
      <h1
        style={{
          marginBottom: "1.5rem",
          backgroundColor: "white",
        }}
      >
        Types of Products
      </h1>
      <p onClick={() => handleClick("5b6899683d1a866534f516e0")}>Baby</p>
      <p onClick={() => handleClick("5b675e5e5936635728f9fc30")}>Beverages</p>
      <p onClick={() => handleClick("5b6899123d1a866534f516de")}>Bakery</p>
      <p onClick={() => handleClick("5b68994e3d1a866534f516df")}>
        Beauty-Hygine
      </p>
      <p onClick={() => handleClick("5b6899953d1a866534f516e2")}>Fruits-Veg</p>
    </div>
  );
};

export default SideBar;

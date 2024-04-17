import React from "react";
import categories from "../../../json/category";
import "./Categories.scss";
import "../../../common/common.scss";
import { GoArrowRight } from "react-icons/go";

const Categories = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return (
          <div key={category.key} className="categories-category">
            <h1>{category.name}</h1>
            <img src={category.imageUrl} alt={category.name} />
            <p>{category.description}</p>
            <button>
              <span>Explore</span>
              <GoArrowRight className="icons" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;

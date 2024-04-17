import React from "react";
import categories from "../../../json/category";
import "./Categories.scss";
import "../../../common/common.scss";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return (
          <div key={category.key} className="categories-category">
            <h1>{category.name}</h1>
            <img src={category.imageUrl} alt={category.name} />
            <p>{category.description}</p>
            <Link to={`/products`}>
              <button>
                <span>Explore</span>
                <GoArrowRight className="icons" />
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;

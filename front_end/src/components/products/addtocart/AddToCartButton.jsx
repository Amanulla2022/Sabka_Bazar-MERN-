import React, { useState } from "react";
import "./AddToCart.scss";
import { FaCartPlus } from "react-icons/fa6";

const AddToCartButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="cart-button-container">
      <button
        className="cart-button"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Add To Cart <FaCartPlus />
      </button>
      {isHovered && (
        <div className="cart-item">Add This item in your cart.</div>
      )}
    </div>
  );
};

export default AddToCartButton;

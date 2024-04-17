import React, { useState } from "react";
import "./AddToWishList.scss";
import { FaHeart } from "react-icons/fa";

const WishlistButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="wishlist-button-container">
      <FaHeart
        className="wishlist-button"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />

      {isHovered && (
        <div className="wishlist-item">Add This item in your wishlist.</div>
      )}
    </div>
  );
};

export default WishlistButton;

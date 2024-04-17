import React from "react";
import "./ProductDetails.scss";
import WishlistButton from "../wishlist/WishListButton";
import AddToCartButton from "../addtocart/AddToCartButton";

const ProductDetails = ({ products, categoryName }) => {
  return (
    <div className="product-details">
      <h1>{categoryName ? `${categoryName} Products` : "All Products"}</h1>

      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <WishlistButton />

            <div className="product-image-price">
              <img src={product.imageURL} alt={product.name} />
              <div className="product-price">
                <p>
                  Price: <span className="stock">₹</span>
                  <span className="price">{product.price}</span>
                </p>
                <p>
                  Stock: <span className="stock">{product.stock} left...</span>
                </p>
              </div>
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
            <div className="cart-button-container">
              <AddToCartButton />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;

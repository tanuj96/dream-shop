import React from "react";

const ProductCard = ({ product }) => {
  const { title, price, description, image, rating } = product;
  return (
      <div className="product-card">
        <h4 className="product-name">{title}</h4>
        <p className="product-rating">{rating.rate}</p>
        <img src={image} alt="product-thumbnail" className="product-image" />
        <p className="product-price">₹{price}</p>
      </div>
  );
};

export default ProductCard;

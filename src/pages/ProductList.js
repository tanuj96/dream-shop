import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { Products } from "../utils/products";
import { Link } from "react-router-dom";
import RatingFilter from "../components/RatingFilter";

const ProductList = () => {
  const [selectedRatings, setSelectedRatings] = useState([]);

  const handleRatingChange = (newSelectedRatings) => {
    setSelectedRatings(newSelectedRatings);
  };

  const filteredProducts = Products.filter((product) =>
    selectedRatings.length === 0 || selectedRatings.some((rating) => product.rating.rate >= rating)
  );

  return (
    <div className="listing-page-container">
      <RatingFilter onChange={handleRatingChange} className="product-filter" />
      <div className="products-list">
        {filteredProducts.map((product) => {
          return (
            <Link key={product.id} to={`/productDetails/${product.id}`}>
              <ProductCard product={product} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;

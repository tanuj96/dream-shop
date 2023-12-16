import React from "react";
import ProductCard from "../components/ProductCard";
import { Products } from "../utils/products";
import { Link } from "react-router-dom";

const ProductList = () => {
  return (
    <div className="listing-page-container">
      <div className="product-filter-container">
        <h5>Customer Ratings</h5>
        <ul>
          <li><input type="checkbox"/>4 above</li>
          <li><input type="checkbox"/>3 above</li>
        </ul>
      </div>
      <div className="products-list">
        {Products.map((product) => {
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

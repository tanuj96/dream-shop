import React from "react";
import ProductCard from "../components/ProductCard";
import { Products } from "../utils/products";

const ProductList = () => {
  return (
    <div className="products-list">
      {Products.map((product) => {
        return <ProductCard key={product.id} product={product}/>;
      })}
    </div>
  );
};

export default ProductList;

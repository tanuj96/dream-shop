import React from "react";
import ProductCard from "../components/ProductCard";
import { Products } from "../utils/products";
import { Link } from "react-router-dom";

const ProductList = () => {
  return (
    <div className="products-list">
      {Products.map((product) => {
        return <Link key={product.id}  to={`/productDetails/${product.id}`}><ProductCard product={product}/></Link>;
      })}
    </div>
  );
};

export default ProductList;

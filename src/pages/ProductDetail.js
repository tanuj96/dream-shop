import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Products } from "../utils/products";

const ProductDetail = () => {
  const {productId} = useParams();
  const [selectedProduct , setSelectedProduct] = useState(null);

  useEffect(()=>{
    const matchProduct = Products.find(item => item.id === parseInt(productId));
    setSelectedProduct(matchProduct);
  },[productId]);

  return (
    <div className='product-details'>
      <div className='product-picture'>
        <img className='product-details-image' src={selectedProduct?.image} alt='product-photo'/>
      </div>
      <div className='product-information'>
        <h2>{selectedProduct?.title}</h2>
        <h2>{selectedProduct?.price}</h2>
        <p>{selectedProduct?.rating?.rate}</p>
        <h4>{selectedProduct?.description}</h4>
        <button className='cart-btn'>Add To Cart</button>
      </div>
    </div>
  )
}

export default ProductDetail
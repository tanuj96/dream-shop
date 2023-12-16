import React from 'react'

const ProductDetail = () => {
  return (
    <div className='product-details'>
      <div className='product-picture'>
        <img className='product-details-image' src='https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg' alt='product-photo'/>
      </div>
      <div className='product-information'>
        <h2>Mens Casual Slim Fit</h2>
        <h2>15.99</h2>
        <p>Product Rating</p>
        <h4>Product description</h4>
        <button className='cart-btn'>Add To Cart</button>
      </div>
    </div>
  )
}

export default ProductDetail
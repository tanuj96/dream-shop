import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);

  useState(() => {
    const storedCartProducts = JSON.parse(localStorage.getItem("cart"));
    setCartProducts(storedCartProducts);
  });

  return (
    <div className="product-cart-container">
      {cartProducts ? (
        cartProducts.map((product) => {
          return (
            <div className="cart-card">
              <Link to={`/productDetails/${product.id}`}>
                <div className="cart-product-image-container">
                  <img
                    src={product.image}
                    alt="product-view"
                    className="cart-product-image"
                  />
                </div>
              </Link>
              <div className="cart-product-details-container">
                <Link to={`/productDetails/${product.id}`}>
                  <h2>{product.title}</h2>
                </Link>
                <h3>₹{product.price}</h3>
                <p>quantity</p>
              </div>
            </div>
          );
        })
      ) : (
        <div className="cart-empty-msg-container">
        <p className="cart-empty-msg">
          Your cart is empty! Explore our wide selection and find something you
          like
        </p>
        </div>
      )}
    </div>
  );
};

export default Cart;

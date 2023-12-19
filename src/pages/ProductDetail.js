import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Products } from "../utils/products";

const ProductDetail = () => {
  const { productId } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const matchProduct = Products.find(
      (item) => item.id === parseInt(productId)
    );
    setSelectedProduct(matchProduct);
  }, [productId]);

  const addToCart = () => {
    if (localStorage.getItem("cart")) {
      let storedArrayJsonString = localStorage.getItem("cart");
      let storedArray = JSON.parse(storedArrayJsonString);

      const isProductInCart = storedArray.findIndex((item) => item.id === selectedProduct.id);
      if (isProductInCart !== -1) {
        const updatedCart = [...storedArray];
        updatedCart[isProductInCart].quantity += 1;
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }

      else {
        selectedProduct.quantity = 1;
        let cart = JSON.stringify([selectedProduct, ...storedArray]);
        localStorage.setItem("cart", cart);
      }
    }
    else {
      selectedProduct.quantity = 1;
      let cart = JSON.stringify([selectedProduct]);
      localStorage.setItem("cart", cart);
    }
  }

  return (
    <div className="product-details">
      <div className="product-picture">
        <img
          alt="productView"
          className="product-details-image"
          src={selectedProduct?.image}
        />
      </div>
      <div className="product-information">
        <h2>{selectedProduct?.title}</h2>
        <h2>₹{selectedProduct?.price}</h2>
        <p>{selectedProduct?.rating?.rate}</p>
        <p>{selectedProduct?.description}</p>
        <button className="cart-btn" onClick={addToCart}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;

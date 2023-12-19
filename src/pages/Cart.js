import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [cartChanged, setcartChanged] = useState(false);

  useEffect(() => {
    const storedCartProducts = JSON.parse(localStorage.getItem("cart"));
    setCartProducts(storedCartProducts);
  }, [cartChanged]);

  const changeProductQuantity = (productId, action) => {
    let storedArrayJsonString = localStorage.getItem("cart");
    let storedArray = JSON.parse(storedArrayJsonString);

    const foundProduct = storedArray.find((product) => product.id === productId);

    if (action === "increament") {
      foundProduct.quantity += 1;
    }
    else if (action === "decreament") {
      foundProduct.quantity -= 1;
    }
    const indexOfObjectToReplace = storedArray.findIndex((item) => item.id === foundProduct.id);

    if (indexOfObjectToReplace !== -1) {
      const updatedArray = [
        ...storedArray.slice(0, indexOfObjectToReplace),
        foundProduct,
        ...storedArray.slice(indexOfObjectToReplace + 1),
      ];

      localStorage.setItem('cart', JSON.stringify(updatedArray));

      console.log(updatedArray);
    } else {
      console.log('Object not found in the array.');
    }
    setcartChanged(!cartChanged);
  }

  const removeCurrentProduct = (productId) => {
    let storedArrayJsonString = localStorage.getItem("cart");
    let storedArray = JSON.parse(storedArrayJsonString);
    const newArrayWithoutObject = storedArray.filter((item) => item.id !== productId);
    if (storedArray.length === 1) {
      localStorage.setItem('cart', JSON.stringify([]));
    }
    else {
      localStorage.setItem('cart', JSON.stringify(newArrayWithoutObject));
    }

    setcartChanged(!cartChanged);
  }

  return (
    <div className="product-cart-container">
      {cartProducts ? (
        cartProducts.map((product) => {
          return (
            <div key={product.id} className="cart-card">
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
                <p>Quantity: {product?.quantity}</p>
                <div className="cart-controls">
                  <button disabled={product.quantity === 1} onClick={() => changeProductQuantity(product.id, 'decreament')}> - </button>
                  <button onClick={() => changeProductQuantity(product.id, 'increament')}> + </button>
                  <button onClick={() => removeCurrentProduct(product.id)}>Remove All</button>
                </div>
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

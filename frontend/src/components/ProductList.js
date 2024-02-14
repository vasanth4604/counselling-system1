import React, { useState } from 'react';

const ProductList = ({ products }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {
    // Create a copy of the current cart and add the new product
    const newCart = [...cart, product];
    
    // Update the cart state
    setCart(newCart);

    // Update the total price
    setTotalPrice(totalPrice + product.price);
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div>
              <strong>{product.name}</strong> - ${product.price}
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </li>
        ))}
      </ul>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((cartItem, index) => (
          <li key={index}>
            {cartItem.name} - ${cartItem.price}
          </li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default ProductList;

import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);
  function addToCart() {
    setInCart(true);
  }
  const color = inCart ? "in-cart" : "";
  return (
    <li className={color}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCart} className="add">
        Add to Cart
      </button>
    </li>
  );
}

export default Item;

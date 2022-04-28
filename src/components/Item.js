import React, { useState } from "react";

function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false);
  const [buttonText, setButtonText] = useState(false);

  function handleClick() {
    setIsInCart(!isInCart);
    setButtonText(!buttonText);
  }

  const currentButtonStatus = buttonText ? "Remove From Cart" : "Add to Cart"

  const itemStatus = isInCart ? "in-cart" : ""

  return (
    <li className={itemStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{currentButtonStatus}</button>
    </li>
  );
}

export default Item;

import React from 'react';

function Item({ updateCart, cart, name, category }) {
  function handleCartButton() {
    if (!cart.includes(name)) {
      updateCart([...cart, name]);
    } else {
      let filteredCart = cart.filter((item) => item !== name);
      updateCart(filteredCart);
    }
  }

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCartButton} className="add">
        {cart.includes(name) ? 'Remove from Cart' : 'Add to Cart'}
      </button>
    </li>
  );
}

export default Item;

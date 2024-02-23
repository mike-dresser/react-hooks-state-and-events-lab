import React from 'react';

function Item({ updateCart, cart, name, category }) {
  function handleCartButton() {
    if (cart.indexOf(name) === -1) {
      updateCart([...cart, name]);
    } else {
      let filteredCart = cart.filter((item) => item !== name);
      updateCart(filteredCart);
    }
  }

  function isInCart(name) {
    return cart.indexOf(name) !== -1;
  }

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        onClick={handleCartButton}
        className={isInCart(name) ? 'add in-cart' : 'add'}
      >
        {isInCart(name) ? 'Remove from Cart' : 'Add to Cart'}
      </button>
    </li>
  );
}

export default Item;

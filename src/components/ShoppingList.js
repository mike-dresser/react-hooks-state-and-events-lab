import React, { useState } from 'react';
import Item from './Item';

function ShoppingList({ items, cart, updateCart }) {
  const [showCategory, changeShowCategory] = useState('All');
  function handleCategoryChange(value) {
    changeShowCategory(value);
  }
  console.log(showCategory);
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select
          onChange={(e) => {
            handleCategoryChange(e.target.value);
          }}
          name="filter"
          value={showCategory}
        >
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) =>
          showCategory === 'All' || showCategory === item.category ? (
            <Item
              updateCart={updateCart}
              cart={cart}
              key={item.id}
              name={item.name}
              category={item.category}
            />
          ) : null
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;

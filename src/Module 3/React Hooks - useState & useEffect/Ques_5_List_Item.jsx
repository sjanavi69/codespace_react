// List Items Input and Display
// Description: Build a component that allows users to enter items into a list. Each new item should be added when the "Add" button is clicked, and displayed on the page.

import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Utility to generate unique IDs (simple version)
const generateId = () => Date.now().toString() + Math.random().toString(36).substring(2);

function List_Item() {
  const [inputValue, setInputValue] = useState('');
  const [itemList, setItemList] = useState([]);
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setError('');
  };

  const handleAddItem = () => {
    const trimmedValue = inputValue.trim();

    if (!trimmedValue) {
      setError('Item cannot be empty.');
      return;
    }

    const isDuplicate = itemList.some((item) => item.text.toLowerCase() === trimmedValue.toLowerCase());

    if (isDuplicate) {
      setError('Duplicate items are not allowed.');
      return;
    }

    const newItem = { id: generateId(), text: trimmedValue };
    setItemList([...itemList, newItem]);
    setInputValue('');
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter an item"
      />
      <button onClick={handleAddItem}>Add</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      <ul>
        {itemList.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

// Placeholder for future props
List_Item.propTypes = {};

export default List_Item;

// Favorite Color

// 1. Goal: Allow users to input and display their favorite color.
// 2. Steps:
//     - Create a state variable favoriteColor with an initial value of an empty string.
//     - Implement an input field to update favoriteColor using onChange .
//     - Display the value of favoriteColor below the input field.
//     - Write your code within the file, by the name of component as Timeout_Counter
import React, { useState } from 'react';

function Timeout_Counter() {
  const [favoriteColor, setFavoriteColor] = useState('');

  const handleChange = (e) => {
    setFavoriteColor(e.target.value);
  };

  return (
    <div>
      <h2>Favorite Color Input</h2>
      <input
        type="text"
        value={favoriteColor}
        onChange={handleChange}
        placeholder="Enter your favorite color"
      />
      <p>Your favorite color is: {favoriteColor}</p>
    </div>
  );
}

export default Timeout_Counter;

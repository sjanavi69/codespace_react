// Toggle Visibility

// 1. Goal: Toggle the visibility of a text message.
// 2. Steps:
//     - Use useState to create a isVisible state with an initial value of false .
//     - Display a button that toggles the boolean isVisible state.
//     - Conditionally render a message when isVisible is true.
//     - Write your code within the file, by the name of component as Toggle_Visibility
import React, { useState } from 'react';

function Toggle_Visibility() {
  // Initialize visibility state
  const [isVisible, setIsVisible] = useState(false);

  // Toggle the visibility state
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide Message' : 'Show Message'}
      </button>

      {isVisible && <p>This is the toggled message!</p>}
    </div>
  );
}
export default Toggle_Visibility;

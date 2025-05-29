// Document Title Update

// 1. Goal: Change the document title to reflect the number of button clicks.
// 2. Steps:
//     - Initialize a count state using useState .
//     - Use useEffect to update the document title whenever the count changes.
//     - Create a button to increase the count and see the document title change.
//     - Write your code within the file, by the name of component as Title_Update
import React, { useState, useEffect } from 'react';

function Title_Update() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} time${count !== 1 ? 's' : ''}`;
  }, [count]); // Re-run effect only when count changes

  return (
    <div>
      <h2>Title Update on Click</h2>
      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
      <p>You have clicked {count} time{count !== 1 ? 's' : ''}.</p>
    </div>
  );
}

export default Title_Update;

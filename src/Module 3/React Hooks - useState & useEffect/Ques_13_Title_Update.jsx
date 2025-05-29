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
  const [error, setError] = useState('');

  useEffect(() => {
    if (typeof count !== 'number' || isNaN(count)) {
      setError('Invalid count: not a number.');
      document.title = 'Error: Invalid count';
      return;
    }

    if (count < 0) {
      setError('Count cannot be negative.');
      document.title = 'Error: Negative count';
      return;
    }

    setError('');
    document.title = `Clicked ${count} time${count !== 1 ? 's' : ''}`;
  }, [count]);

  const handleClick = () => {
    if (count >= 1000) {
      setError('Click limit reached. Please refresh to continue.');
      return;
    }

    setCount(prev => prev + 1);
  };

  return (
    <div>
      <h2>Title Update on Click</h2>
      <button onClick={handleClick} disabled={!!error}>
        Click Me
      </button>
      <p>You have clicked {count} time{count !== 1 ? 's' : ''}.</p>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Title_Update;

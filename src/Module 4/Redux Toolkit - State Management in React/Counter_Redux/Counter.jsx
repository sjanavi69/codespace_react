// src/components/Counter.jsx
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from './Module 4/Redux Toolkit - State Management in React/Counter_Redux/counterSlice';
import { useState } from 'react';

function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>{' '}
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <div style={{ marginTop: '20px' }}>
        <input
          type="number"
          value={amount}
          onChange={e => setAmount(Number(e.target.value))}
        />
        <button onClick={() => dispatch(incrementByAmount(amount))}>
          Increment by {amount}
        </button>
      </div>
    </div>
  );
}

export default Counter;

// src/features/todos/Todos.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './todosSlice';

/**
 * Main Todos component.
 * Manages input field and displays a list of to-dos.
 */
const Todos = () => {
  const [input, setInput] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    try {
      if (input.trim()) {
        dispatch(addTodo(input)); // Add a new task
        setInput('');
      }
    } catch (error) {
      console.error('Error adding task:', error);
      alert('Something went wrong.');
    }
  };

  return (
    <div className="todo-container">
      <h2>📝 To-Do List</h2>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <span onClick={() => dispatch(toggleTodo(todo.id))}>
              {todo.text}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;


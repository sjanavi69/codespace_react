// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from  './Module 4/Redux Toolkit - State Management in React/Todos_Redux/todosSlice';



/**
 * Redux Store Configuration
 * --------------------------
 * Sets up the Redux store with all necessary reducers.
 * The Redux DevTools are enabled by default in development.
 */
export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  // Optional middleware or devTools settings can go here
  devTools: process.env.NODE_ENV !== 'production',
});


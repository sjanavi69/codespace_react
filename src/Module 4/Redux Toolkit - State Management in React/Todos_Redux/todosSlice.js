// src/features/todos/todosSlice.js
// src/features/todos/todosSlice.js
import { createSlice } from '@reduxjs/toolkit';

/**
 * Initial state for the todos slice.
 * Structured as an array of task objects.
 */
const initialState = [];

/**
 * Todos Slice
 * ------------
 * Handles adding, toggling, and deleting to-do tasks.
 */
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    /**
     * Add a new to-do item
     * @param {Array} state - Current state of todos
     * @param {Object} action - Redux action with payload = string
     */
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },

    /**
     * Toggle the completion state of a to-do by ID
     */
    toggleTodo: (state, action) => {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    /**
     * Delete a to-do item by ID
     */
    deleteTodo: (state, action) => {
      return state.filter((t) => t.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;

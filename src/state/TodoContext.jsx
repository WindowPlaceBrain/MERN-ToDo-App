// src/state/TodoContext.js
import React, { createContext, useReducer } from 'react'

export const ToDoContext = createContext()

function reducer(state, action) {
  switch (action.type) {
    case 'SET':
      return { ...state, todos: action.payload }
    case 'ADD':
      return { ...state, todos: [action.payload, ...state.todos] }
    case 'UPDATE':
      return {
        ...state,
        todos: state.todos.map((t) =>
          t._id === action.payload._id ? action.payload : t
        ),
      }
    case 'REMOVE':
      return {
        ...state,
        todos: state.todos.filter((t) => t._id !== action.payload),
      }
    default:
      return state
  }
}

export const ToDoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { todos: [] })
  return (
    <ToDoContext.Provider value={{ state, dispatch }}>
      {children}
    </ToDoContext.Provider>
  )
}

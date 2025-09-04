import React from 'react'
import { ToDoProvider } from './state/TodoContext.jsx'
import ToDoList from './components/TodoList.jsx'
import './App.css'

function App() {
  return (
    <ToDoProvider>
      <div className="App">
        <header className="App-header">
          <h1>ToDo App</h1>
        </header>
        <main>
          <ToDoList />
        </main>
      </div>
    </ToDoProvider>
  )
}

export default App

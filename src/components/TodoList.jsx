import React, { useState, useEffect, useContext } from 'react'
import { ToDoContext } from '../state/TodoContext.jsx'
import {
  fetchTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from '../services/todoService.jsx'
import './TodoList.css'

const ToDoList = () => {
  const { state, dispatch } = useContext(ToDoContext)
  const [newTodo, setNewTodo] = useState({ title: '', description: '' })
  const [editingTodo, setEditingTodo] = useState(null)
  const [editForm, setEditForm] = useState({ title: '', description: '' })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    loadTodos()
  }, [])

  const loadTodos = async () => {
    try {
      setLoading(true)
      const response = await fetchTodos()
      dispatch({ type: 'SET', payload: response.data })
    } catch (error) {
      console.error('Error loading todos:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!newTodo.title.trim()) return

    try {
      const response = await createTodo(newTodo)
      dispatch({ type: 'ADD', payload: response.data })
      setNewTodo({ title: '', description: '' })
    } catch (error) {
      console.error('Error creating todo:', error)
    }
  }

  const handleToggleComplete = async (todo) => {
    try {
      const response = await updateTodo(todo._id, {
        completed: !todo.completed,
      })
      dispatch({ type: 'UPDATE', payload: response.data })
    } catch (error) {
      console.error('Error updating todo:', error)
    }
  }

  const handleDelete = async (id) => {
    try {
      await deleteTodo(id)
      dispatch({ type: 'REMOVE', payload: id })
    } catch (error) {
      console.error('Error deleting todo:', error)
    }
  }

  const handleEdit = (todo) => {
    setEditingTodo(todo._id)
    setEditForm({ title: todo.title, description: todo.description || '' })
  }

  const handleCancelEdit = () => {
    setEditingTodo(null)
    setEditForm({ title: '', description: '' })
  }

  const handleSaveEdit = async (id) => {
    if (!editForm.title.trim()) return

    try {
      const response = await updateTodo(id, editForm)
      dispatch({ type: 'UPDATE', payload: response.data })
      setEditingTodo(null)
      setEditForm({ title: '', description: '' })
    } catch (error) {
      console.error('Error updating todo:', error)
    }
  }

  if (loading) {
    return <div className="loading">Loading todos...</div>
  }

  return (
    <div className="todo-list">
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          placeholder="Todo title"
          value={newTodo.title}
          onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
          className="todo-input"
        />
        <input
          type="text"
          placeholder="Description (optional)"
          value={newTodo.description}
          onChange={(e) =>
            setNewTodo({ ...newTodo, description: e.target.value })
          }
          className="todo-input"
        />
        <button type="submit" className="add-button">
          Add ToDo
        </button>
      </form>

      <div className="todos">
        {state.todos.map((todo) => (
          <div
            key={todo._id}
            className={`todo-item ${todo.completed ? 'completed' : ''}`}
          >
            <div className="todo-content">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleComplete(todo)}
                className="todo-checkbox"
              />
              <div className="todo-text">
                {editingTodo === todo._id ? (
                  <div className="edit-form">
                    <input
                      type="text"
                      value={editForm.title}
                      onChange={(e) =>
                        setEditForm({ ...editForm, title: e.target.value })
                      }
                      className="edit-input"
                      placeholder="ToDo title"
                    />
                    <input
                      type="text"
                      value={editForm.description}
                      onChange={(e) =>
                        setEditForm({
                          ...editForm,
                          description: e.target.value,
                        })
                      }
                      className="edit-input"
                      placeholder="Description (optional)"
                    />
                  </div>
                ) : (
                  <>
                    <h3 className={todo.completed ? 'completed-text' : ''}>
                      {todo.title}
                    </h3>
                    {todo.description && (
                      <p className={todo.completed ? 'completed-text' : ''}>
                        {todo.description}
                      </p>
                    )}
                  </>
                )}
              </div>
            </div>
            <div className="todo-actions">
              {editingTodo === todo._id ? (
                <>
                  <button
                    onClick={() => handleSaveEdit(todo._id)}
                    className="save-button"
                  >
                    Save
                  </button>
                  <button onClick={handleCancelEdit} className="cancel-button">
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleEdit(todo)}
                    className="edit-button"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(todo._id)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ToDoList

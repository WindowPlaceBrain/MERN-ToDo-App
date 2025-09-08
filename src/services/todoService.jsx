// src/services/todoService.js
import axios from 'axios'

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL || 'https://mern-to-do-app-six.vercel.app',
})

export const fetchTodos = () => api.get('/todos')
export const createTodo = (data) => api.post('/todos', data)
export const updateTodo = (id, data) => api.put(`/todos/${id}`, data)
export const deleteTodo = (id) => api.delete(`/todos/${id}`)

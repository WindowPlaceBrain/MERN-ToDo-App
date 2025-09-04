// routes/todos.js
import express from 'express'
import ToDo from '../models/Todo.js'

const router = express.Router()

router.get('/', async (req, res) => {
  const { completed } = req.query
  const filter =
    completed === undefined ? {} : { completed: completed === 'true' }
  const todos = await ToDo.find(filter).sort({ createdAt: -1 })
  res.json(todos)
})

router.get('/:id', async (req, res) => {
  const todo = await ToDo.findById(req.params.id)
  if (!todo) return res.status(404).json({ message: 'Not found' })
  res.json(todo)
})

router.post('/', async (req, res) => {
  const todo = new ToDo(req.body)
  await todo.save()
  res.status(201).json(todo)
})

router.put('/:id', async (req, res) => {
  const todo = await ToDo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
  if (!todo) return res.status(404).json({ message: 'Not found' })
  res.json(todo)
})

router.delete('/:id', async (req, res) => {
  await ToDo.findByIdAndDelete(req.params.id)
  res.status(204).end()
})

export default router

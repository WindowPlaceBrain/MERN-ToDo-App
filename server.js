// server.js
import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import todosRouter from './routes/todos.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/todos', todosRouter)

const PORT = process.env.PORT || 5000
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log('Server running on', PORT)))
  .catch((err) => console.error(err))

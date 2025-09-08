// server.js
import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import todosRouter from './routes/todos.js'

const app = express()

// CORS Konfiguration für Vercel Frontend
const corsOptions = {
  origin: function (origin, callback) {
    // Erlaubte Origins
    const allowedOrigins = [
      'https://mern-to-do-app-six.vercel.app',
      'http://localhost:3000',
      'http://localhost:5173',
    ]

    // Füge FRONTEND_URL hinzu, falls gesetzt
    if (process.env.FRONTEND_URL) {
      allowedOrigins.push(process.env.FRONTEND_URL)
    }

    // Debug: Log die Origin
    console.log('CORS Request from origin:', origin)
    console.log('Allowed origins:', allowedOrigins)

    // Erlaube requests ohne origin (z.B. Postman, mobile apps)
    if (!origin) return callback(null, true)

    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      console.log('CORS blocked origin:', origin)
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}

app.use(cors(corsOptions))
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

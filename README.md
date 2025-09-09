# ToDo-MERN-App

A beginner full-stack ToDo application built with MongoDB, Express.js, React, and Node.js.
The application is deployed with Frontend on Vercel and Backend on Render.

## 🌐 Live Demo (might be not present anymore at time of reading)

- **Frontend (Vercel):** https://mern-to-do-app-six.vercel.app
- **Backend API (Render):** https://mern-todo-app-sdfd.onrender.com/api

## Features

- Create, read, update, and delete ToDos
- Mark ToDos as complete/incomplete
- Modern, responsive UI
- Real-time state management with React Context
- RESTful API backend
- Cross-origin resource sharing (CORS) configured
- Environment-based configuration for different deployments

## Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account (for production) or local MongoDB
- npm or yarn package manager
- Vercel account (for frontend deployment)
- Render account (for backend deployment)

## Setup Instructions

### 1. Environment Configuration

#### For Local Development

Create a `.env` file in the root directory with the following content:

```env
MONGODB_URI=mongodb://localhost:27017/todo-app
PORT=5000
FRONTEND_URL=http://localhost:5173
```

#### For Production Deployment

**Backend (Render) Environment Variables:**

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/todoapp?retryWrites=true&w=majority
FRONTEND_URL=https://your-vercel-link.vercel.app
PORT=5000
```

**Frontend (Vercel) Environment Variables:**

```env
VITE_API_URL=https://your-render-link.onrender.com/api
```

**Note**:

- For local development, make sure MongoDB is running on your local machine
- For production, use MongoDB Atlas and set the environment variables in your deployment platforms

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Application

#### Option 1: Run both frontend and backend simultaneously

```bash
npm run dev
```

#### Option 2: Run them separately

```bash
# Terminal 1 - Backend
npm run server

# Terminal 2 - Frontend
npm run client
```

## Project Structure

```
ToDo-MERN-App/
├── src/                    # React frontend
│   ├── components/         # React components
│   ├── services/           # API service functions
│   ├── state/              # React Context for state management
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── models/                 # MongoDB schemas
├── routes/                 # Express.js API routes
├── server.js               # Main server file
├── package.json            # All dependencies
├── vite.config.js          # Vite configuration
├── .env                    # Enviroment variables
└── README.md
```

## API Endpoints

- `GET /api/todos` - Get all ToDos
- `GET /api/todos/:id` - Get a specific ToDo
- `POST /api/todos` - Create a new ToDo
- `PUT /api/todos/:id` - Update a ToDo
- `DELETE /api/todos/:id` - Delete a ToDo

## ToDo Schema

```javascript
{
  title: String (required),
  description: String (optional),
  completed: Boolean (default: false),
  dueDate: Date (optional),
  userId: ObjectId (optional, for future user authentication),
  timestamps: true
}
```

## Technologies Used

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing

### Frontend

- **React** - UI library
- **Vite** - Build tool and dev server
- **Axios** - HTTP client
- **CSS3** - Styling with modern features

## Development

The application uses ES6 modules throughout. The frontend is built with Vite for fast development and building.

## Deployment

### Frontend Deployment (Vercel)

1. Connect your GitHub repository to Vercel
2. Set environment variable: `VITE_API_URL=https://your-render-app.onrender.com/api`
3. Deploy automatically on every push to main branch

### Backend Deployment (Render)

1. Connect your GitHub repository to Render
2. Set environment variables:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `FRONTEND_URL`: Your Vercel frontend URL
3. Deploy automatically on every push to main branch

### CORS Configuration

The application includes robust CORS configuration that:

- Allows requests from the deployed Vercel frontend
- Supports local development on different ports
- Includes debug logging for troubleshooting
- Handles preflight OPTIONS requests

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**:

   - Ensure MongoDB Atlas is accessible
   - Check your connection string in environment variables
   - Verify network access settings in MongoDB Atlas

2. **CORS Error (204 CORS missing allow origin)**:

   - Check that `FRONTEND_URL` is set correctly in Render
   - Verify the frontend URL matches exactly (no trailing slashes)
   - Check Render logs for CORS debug information

3. **API Not Responding**:

   - Test backend directly: `https://your-render-app.onrender.com/api`
   - Check Render logs for errors
   - Verify environment variables are set

4. **Frontend Not Loading Data**:
   - Check browser console for errors
   - Verify `VITE_API_URL` is set correctly in Vercel
   - Test API endpoints directly

### Debug Steps

1. **Check Backend Logs (Render)**:

   - Go to Render Dashboard → Your Service → Logs
   - Look for CORS debug messages
   - Check for MongoDB connection errors

2. **Check Frontend Console**:

   - Open browser DevTools (F12)
   - Check Console tab for errors
   - Check Network tab for failed requests

3. **Test API Directly**:
   - Visit `https://your-render-app.onrender.com/api` (should show API working message)
   - Visit `https://your-render-app.onrender.com/api/todos` (should show empty array or TODOs)

## Possible future Enhancements

- User authentication and authorization
- ToDo categories and tags
- Due date reminders
- Search and filtering
- Dark mode toggle
- Mobile app (React Native)
- Real-time updates with WebSockets
- File attachments for TODOs

## License

ISC

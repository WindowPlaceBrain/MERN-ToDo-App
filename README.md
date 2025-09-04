# ToDo-MERN-App

A full-stack ToDo application built with MongoDB, Express.js, React, and Node.js.

## Features

- Create, read, update, and delete ToDos
- Mark ToDos as complete/incomplete
- Modern, responsive UI
- Real-time state management with React Context
- RESTful API backend

## Prerequisites

- Node.js (v14 or higher)
- MongoDB installed and running locally
- npm or yarn package manager

## Setup Instructions

### 1. Environment Configuration

Create a `.env` file in the root directory with the following content:

```env
MONGODB_URI=mongodb://localhost:27017/todo-app
PORT=5000
```

**Note**: Make sure MongoDB is running on your local machine. If you're using MongoDB Atlas or a different MongoDB instance, update the URI accordingly.

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
├── server.js              # Main server file
├── package.json           # All dependencies
├── vite.config.js         # Vite configuration
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

## Troubleshooting

1. **MongoDB Connection Error**: Ensure MongoDB is running and the connection string is correct
2. **Port Already in Use**: Change the PORT in your .env file
3. **Frontend Not Loading**: Check if the backend is running on the correct port

## Future Enhancements

- User authentication and authorization
- ToDo categories and tags
- Due date reminders
- Search and filtering
- Dark mode toggle
- Mobile app (React Native)

## License

ISC
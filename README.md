# Fullstack Course Project

A complete fullstack application built with modern technologies, featuring a React frontend and a Node.js backend with MongoDB database.

## 🚀 Technologies Used

### Backend

- **Node.js** - JavaScript runtime environment
- **TypeScript** - Type-safe JavaScript development
- **Fastify** - Fast and efficient web framework
- **Prisma** - Next-generation ORM for database operations
- **MongoDB** - NoSQL database for data storage
- **TSX** - TypeScript execution engine for development

### Frontend

- **React 19** - Modern UI library with latest features
- **TypeScript** - Type-safe frontend development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API communication
- **React Icons** - Popular icon library
- **ESLint** - Code linting and formatting

## 📁 Project Structure

```
fullstack_course/
├── backend/                 # Node.js API server
│   ├── src/
│   │   ├── controllers/     # Request handlers
│   │   ├── services/        # Business logic
│   │   ├── prisma/          # Database configuration
│   │   └── routes.ts        # API routes
│   ├── prisma/
│   │   └── schema.prisma    # Database schema
│   └── package.json
├── frontend/                # React application
│   ├── src/
│   │   ├── services/        # API communication
│   │   └── App.tsx          # Main component
│   └── package.json
└── README.md
```

## 🛠 Features

- **Customer Management System** - CRUD operations
- **Modern UI** - Responsive design with Tailwind CSS
- **Type Safety** - End-to-end TypeScript implementation
- **Database Integration** - MongoDB with Prisma ORM
- **CORS Support** - Cross-origin resource sharing enabled
- **Fast Development** - Hot reload with Vite and TSX

## 🚦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB database
- Package manager (npm or yarn)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd fullstack_course
   ```

2. **Setup Backend**

   ```bash
   cd backend
   npm install
   ```

3. **Setup Frontend**

   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Configuration**
   Update a `.env` file in the backend directory:

   ```env
   DATABASE_URL="your-mongodb-connection-string"
   ```

5. **Run Database Migrations**
   ```bash
   cd backend
   npx prisma generate
   npx prisma db push
   ```

### Running the Application

1. **Start the Backend Server**

   ```bash
   cd backend
   npm run dev
   ```

   Server will run on `http://localhost:3000`

2. **Start the Frontend Application**
   ```bash
   cd frontend
   npm run dev
   ```
   Application will run on `http://localhost:5173`

## 📚 API Endpoints

- `GET /customers` - List all customers
- `POST /customer` - Create a new customer
- `DELETE /customer` - Delete a customer

## 🎯 Learning Objectives

This project demonstrates:

- Building RESTful APIs with Fastify
- Database modeling with Prisma and MongoDB
- Modern React development patterns
- TypeScript best practices
- Frontend-backend integration
- Responsive UI design with Tailwind CSS

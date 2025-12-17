# User Dashboard Project

This project is organized into two main parts:
- **frontend**: A React + Vite + TypeScript application with Tailwind CSS.
- **backend**: A Node.js + Express + MongoDB application.

## Prerequisites
- Node.js installed
- MongoDB installed and running (or a MongoDB Atlas connection string)

## Setup & Run

### Backend
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies (if not already done):
   ```bash
   npm install
   ```
3. Create a `.env` file in `backend` with your MongoDB URI (optional, defaults to localhost):
   ```
   MONGO_URI=mongodb://localhost:27017/dashboard
   PORT=5000
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

### Frontend
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies (if not already done):
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Features
- **User Dashboard**: Tracks course progress.
- **Certificate**: Auto-generated upon 100% completion.
- **LinkedIn Sharing**: Share your certificate directly to LinkedIn.
- **Backend Integration**: Stores user progress and data in MongoDB.

import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 3000;
export const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/todoList';
export const JWT_SECRET = process.env.JWT_SECRET_KEY || 'your_jwt_secret';

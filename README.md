# todoList-js

This is a simple RESTful Todo List API built using **Node.js**, **Express**, and **MongoDB**. The project includes features such as user authentication using **JWT**, password hashing with **bcrypt**, route protection via middleware, and CRUD operations for managing personal tasks.

## Features

- User registration and login system
- Passwords securely hashed with bcrypt
- Authentication using JSON Web Tokens (JWT)
- Authorization middleware to protect task routes
- Create, read, update, and delete todos
- Pagination for listing todos
- Testing via Postman

## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **bcryptjs** for password hashing
- **jsonwebtoken** for authentication
- **dotenv** for environment variables
- **Postman** for API testing

## API Endpoints

### Authentication

- `POST /auth/register` — Register a new user
- `POST /auth/login` — Login and receive a JWT token

### Todos (Requires Auth)

- `GET /todos` — Get all todos (supports pagination with `?page=` and `limit=`)
- `POST /todos` — Create a new todo
- `PATCH /todos/:id` — Update a todo
- `DELETE /todos/:id` — Delete a todo

## Usage

1. Clone the repository
2. Run `npm install`
3. Create a `.env` file and add your MongoDB URI and JWT secret
4. Start the server with `npm start`
5. Use Postman to test endpoints

## Project Source

This project is based on the following roadmap:
👉 [Todo List API on roadmap.sh](https://roadmap.sh/projects/todo-list-api)

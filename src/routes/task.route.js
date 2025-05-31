import { getAllTask, getTaskById, createTask, updateTask, deleteTask } from "../controllers/task.controller.js";
import authToken from "../middlewares/auth.middleware.js";
import authorizeTodoOwner from "../middlewares/sec.middleware.js";
import { Router } from "express";

const router = Router()

// get all tasks
router.get('/todos', authToken, getAllTask)

// get by id
router.get('/todos/:id', authToken, authorizeTodoOwner, getTaskById)

// create
router.post('/todos', authToken, createTask)

// update
router.patch('/todos/:id', authToken, authorizeTodoOwner, updateTask)

// delete
router.delete('/todos/:id', authToken, authorizeTodoOwner, deleteTask)


export default router;
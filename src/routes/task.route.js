import { getAllTask, getTaskById, createTask, updateTask, deleteTask } from "../controllers/task.controller.js";
import authToken from "../middlewares/auth.middleware.js";
import authorizeTodoOwner from "../middlewares/sec.middleware.js";
import { Router } from "express";

const router = Router()

// get all tasks
router.get('/todo', authToken, getAllTask)

// get by id
router.get('/todo/:id', authToken, authorizeTodoOwner, getTaskById)

// create
router.post('/todo', authToken, createTask)

// update
router.patch('/todo/:id', authToken, authorizeTodoOwner, updateTask)

// delete
router.delete('/todo/:id', authToken, authorizeTodoOwner, deleteTask)


export default router;
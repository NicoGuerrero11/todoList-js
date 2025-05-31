import { getAllTask, getTaskById, createTask, updateTask, deleteTask } from "../controllers/task.controller.js";
import authToken from "../middlewares/auth.middleware.js";
import { Router } from "express";

const router = Router()

// get all tasks
router.get('/tasks', authToken, getAllTask)

// get by id
router.get('/tasks/:id', authToken, getTaskById)

// create
router.post('/tasks', authToken, createTask)

// update
router.patch('/tasks/:id', authToken, updateTask)

// delete
router.delete('/tasks/:id', authToken, deleteTask)


export default router;
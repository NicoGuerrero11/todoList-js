import { registerUser, loginUser } from "../controllers/auth.controller.js";
import { Router } from 'express';

const router = Router();

// register route
router.post('/register', registerUser);

// login route
router.post('/login', loginUser)


export default router;
import { JWT_SECRET } from "../config/config.js";
import jwt from 'jsonwebtoken';

// validate token
const authToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.status(401).json({ message: "Unauthorized" });
        req.user = user;
        next()
    });
}

export default authToken;
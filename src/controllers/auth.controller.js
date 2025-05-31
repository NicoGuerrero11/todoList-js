import User from "../model/user.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from "../config/config.js";


// User registration
export const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Validator
        const user = await User.findOne({ email });
        if (user) return res.status(401).json({ message: "Email already in use" });

        // hash password
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: hashPassword
        });

        // Add the new user
        await newUser.save();

        //response
        res.status(200).json({
            message: "new user created",
            user: {
                id: newUser._id,
                username: newUser.username
            }
        });
    } catch (err) {
        return res.status(500).json({ message: err.message })
    };
};

// Login user
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {

        // Username validation
        const user = await User.findOne({ email });
        if (!user) return res.status(401).json({ message: "email not found" });

        //Password validation
        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(401).json({ message: "password is incorrect" });

        // TOKEN
        const token = jwt.sign(
            {
                id: user._id,
                username: user.username,
                email: user.email
            },
            JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Response
        res.status(200).json({
            token

        })

    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}
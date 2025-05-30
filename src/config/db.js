import mongoose from "mongoose";
import dotenv from "dotenv";
import { MONGODB_URI } from "./config.js";
dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("MongoDB Connected");
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}
export default connectDB;
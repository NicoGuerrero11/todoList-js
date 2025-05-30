
import express from 'express';
import connectDB from './src/config/db.js';
import { PORT } from './src/config/config.js'

const app = express();


const starServer = async () => {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`Server running in port: ${PORT}`);
    })
}

starServer()


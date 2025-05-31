
import express from 'express';
import connectDB from './src/config/db.js';
import { PORT } from './src/config/config.js';
import authRoutes from './src/routes/auth.route.js';
import taskRoutes from './src/routes/task.route.js';

const app = express();

//middleware
app.use(express.json())
// endpoints
app.use('/api/auth', authRoutes)
app.use('/api', taskRoutes)




const starServer = async () => {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`Server running in port: ${PORT}`);
    })
}

starServer()


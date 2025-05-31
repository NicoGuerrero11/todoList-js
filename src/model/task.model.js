import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({

    // every user has the own list
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: {
        type: String,
        required: [true, "title is required"]
    },
    description: {
        type: String,
        required: [true, "description is required"]
    }
}, { timestamps: true })

const Task = mongoose.model('Task', taskSchema);
export default Task;
import Task from "../model/task.model.js";
import mongoose from 'mongoose';


export const getAllTask = async (req, res) => {
    const userId = req.user.id
    try {

        // extract page and limit from query paramas
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        // calculate how many documents to skip
        const skip = (page - 1) * limit;

        // find all the tasks
        const tasks = await Task.find({ userId })
            .skip(skip)
            .limit(limit)
            .sort({ createdAt: -1 }); // newest first

        const total = await Task.countDocuments({ userId });

        // response
        res.status(200).json({
            page,
            totalPages: Math.ceil(total / limit),
            totalTask: total,
            tasks: tasks
        })

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const getTaskById = async (req, res) => {
    const { id } = req.params;

    // validate id mongo
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid product ID format' });
    }
    try {
        //find task by id
        const task = await Task.findById(id);
        if (!task) return res.status(404).json({ message: "task not found" });

        // response
        res.status(200).json(task)

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const createTask = async (req, res) => {
    const { title, description } = req.body;
    try {
        // Validate that all fields are entered.
        if (!title || !description) return res.status(400).json({ message: "Provide all requires fields" });

        // new task
        const newTask = new Task({
            userId: req.user.id,
            title,
            description
        })

        // add to db
        await newTask.save();
        res.status(200).json({
            message: "task created",
            id: newTask._id,
            title: newTask.title,
            description: newTask.description
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;


    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid product ID format' });
    }

    try {
        // update task
        const task = await Task.findByIdAndUpdate(
            id,
            {
                title,
                description,
            },
            { new: true }

        )

        if (!task) return res.status(404).json({ message: "task not found" });

        res.status(200).json({
            message: "task updated",
            task
        })

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const deleteTask = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid product ID format' });
    };

    try {
        const task = await Task.findByIdAndDelete(id);
        if (!task) return res.status(404).json({ message: "task not found" });

        res.status(204).json({ message: "product deleted" })



    } catch {
        res.status(500).json({ message: err.message })
    }
}
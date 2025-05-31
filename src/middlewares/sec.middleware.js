import Task from "../model/task.model.js";


const authorizeTodoOwner = async (req, res, next) => {
    const { id } = req.params
    try {
        const todo = await Task.findById(id);
        if (!todo) return res.status(404).json({ message: "Todo not found" });

        if (todo.userId.toString() !== req.user.id) {
            return res.status(403).json({ message: "Forbidden" });
        };

        req.todo = todo;
        next();
    } catch (err) {
        console.error("Authorization error: ", err);
        res.status(500).json({ message: "Server error" })
    }
};

export default authorizeTodoOwner;
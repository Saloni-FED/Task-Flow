import Tasks from "../models/tasks.js";

// Get Task
export const getAllBySpecificUserTask = async (req, res) => {
  try {
    const getUser = await Tasks.find({ createdBy: req.user.userId });
    console.log(getUser);
    res.status(200).json(getUser);
  } catch (error) {
    res.status(500).json({ message: "Unauthorized user" });
  }
};

// Create Task
// Create Task
export const createBySpecificUserTask = async (req, res) => {
  try {
    const { taskName, priority, dueDate } = req.body;
    const newTask = await Tasks.create({
      taskName,
      priority,
      dueDate,
      createdBy : req.user.userId
    })
    console.log(newTask)
    res.status(200).json({message:"Task Created"});
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ message: "Error creating task" });
  }
};

// Update Task
export const updateBySpecificUserTask = async (req, res) => {
  res.send("update the user specific task");
};

// Delete task
export const deleteBySpecificUserTask = async (req, res) => {
  res.send("delete the user specific task");
};

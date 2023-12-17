import Tasks from "../models/tasks.js";

// Get Task
export const getAllBySpecificUserTask = async (req, res) => {
  try {
    const getUser = await Tasks.find({ createdBy : req.user.userId})
    console.log(getUser)
    res.status(200).json(getUser)
  } catch (error) {
    res.status(500).json({"message": "Unauthorized user"})
  }


};

// Create Task
// Create Task
export const createBySpecificUserTask = async (req, res) => {
  try {
    req.body.createdBy = req.user.userId;

    const task = await Tasks.create(req.body);
    res.status(200).json({ result: task });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
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

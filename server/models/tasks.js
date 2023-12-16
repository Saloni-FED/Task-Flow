import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  status: {
    type:String,
    enum: ["pending", "completed"],
    default: ["pending"],
  },
  task: {
    required: true,
    type: String,
  },

  date: {
    type: Date,
    default: Date.now,
  },
  dueDate: {
    type: Date,
  },
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
    default:["Medium"]
  },
});

const Tasks = mongoose.model("Task", TaskSchema);

export default Tasks;

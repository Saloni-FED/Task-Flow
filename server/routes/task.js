import express from "express"
import {
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/tasks.js";

const route = express.Router();

route.get("/:id",getTask)
route.post("/",createTask)
route.patch("/:id",updateTask)
route.delete("/:id",deleteTask)

export default route

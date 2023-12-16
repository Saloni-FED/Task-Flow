import express from "express"
import {
 getAllBySpecificUserTask, updateBySpecificUserTask, deleteBySpecificUserTask, createBySpecificUserTask
} from "../controllers/tasks.js";

const route = express.Router();

route.get("/:id",getAllBySpecificUserTask)

route.post("/createTask",createBySpecificUserTask)


route.patch("/:id",updateBySpecificUserTask)

route.delete("/:id",deleteBySpecificUserTask)

export default route

import express from "express";
import { signin, signup } from "../controllers/users.js"

const route = express.Router()

route.post('/users',signin)
route.post('/users',signup)

export default route;


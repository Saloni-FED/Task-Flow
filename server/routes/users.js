import express from "express";
import { signin, signup } from "../controllers/users.js"

const route = express.Router()

// Users Authentication
route.post('/signin',signin)
route.post('/signup',signup)

export default route;


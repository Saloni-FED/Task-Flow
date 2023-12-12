import express from "express";
import { login, register } from "../controllers/users.js"

const route = express.Router()

route.post('/users',login)
route.post('/users',register)

export default route;


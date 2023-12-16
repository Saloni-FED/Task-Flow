import Users from "../models/users.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
dotenv.config();

// console.log(process.env.JWT_SECRET)
// console.log(process.env.JWT_EXPIRES)
// Sign Up
export const signup = async (req, res) => {
  const { email } = req.body;
  try {
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res.status(401).json({ message: "User already exist" });
    }
    const newUsers = await Users.create({ ...req.body });
    const token = jwt.sign(
      { userId: newUsers._id, name: newUsers.name },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES,
      }
    );
    res.status(200).json({ users: { name: newUsers.name }, token });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res
        .status(400)
        .json({ message: "Validation failed", details: error.errors });
    }
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Sign in
export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await Users.findOne({ email });
    if (!existingUser) {
      return res
        .status(400)
        .json({ message: "User is Invalid Please Register" });
    }

    // Compare password
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res.status(404).json({ message: "Password not matched" });

    const token = jwt.sign(
      { userId: existingUser._id, name: existingUser.name },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES }
    );

    res.status(200).json({ users: { users: existingUser._id }, token });
  } catch (error) {
    console.log(error);
  }
};

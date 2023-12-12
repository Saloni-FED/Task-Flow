import express from "express";
import dotenv from "dotenv";
import connect from "./db/connect.js";
dotenv.config();

// console.log(process.env.MONGODB_URI)

const app = express();

app.get("/", (req, res) => {
  res.send("Server is started");
});

const start = async () => {
  try {
    await connect(process.env.MONGODB_URI);
    app.listen(3000, () => {
      console.log("app is listening at post 3000");
    });
  } catch (error) {
    console.log(error);
  }
};

start()
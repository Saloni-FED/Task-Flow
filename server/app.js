import express from "express";
import dotenv from "dotenv";
import connect from "./db/connect.js";
import Routes from "./routes/users.js"

dotenv.config();

const app = express();

app.use(express.json())


app.get("/", (req, res) => {
  res.send("Server is started");
});

// Routes 
app.use("/api/v1",Routes)

// Small Mistake dont use semilcolon while creating an environment variablw
const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connect(process.env.MONGODB_URI);
    app.listen(port, () => {
      console.log("app is listening at port " + port);
    });
  } catch (error) {
    console.error(error);
  }
};

start();

import express from "express";

const app = express();

app.get("/",(req,res)=>{
    res.send("Server is started")
})
app.listen(3000,()=>{
    console.log("app is listening at post 3000")
})
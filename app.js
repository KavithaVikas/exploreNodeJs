const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.send("hello world!");
})

app.get("/api/notes", (req,res)=>{
    res.send({"title":"Secret Book", "bookContent":"Secret for success"});
})

app.listen(3001,()=>{
    console.log("Server listening on port 3001");
})
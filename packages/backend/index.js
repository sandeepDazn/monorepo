const express = require("express");
const app = express();
const PORT = 8000;

app.get("/",(req,res)=>{
    res.send("hello testing api");
})

app.listen(PORT, ()=>{ console.log(`server is running at ${PORT}`)});
const express =require("express");
const person =require("./MOCK_DATA-2.json");
const app=express();

app.get("/person", (req, res)=>{
    return res.json(person);
});

app.listen(8000);
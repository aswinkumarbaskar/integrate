const express=require("express");
const cors=require("cors");
const app=express();
const port=process.env.PORT || 3000;
app.use(cors());
app.get("/test",(req,res)=>{
 
    res.status(200).json({Mesaage:"success",Data:"Aswinkumar"})
})

app.get("/",(req,res)=>{
    res.status(200).json({Mesaage:"success",Data:"Welcome to my testing...!!"})
})

app.listen(port,()=>{
    console.log("server Running");
})

import express from "express";
const app = express();


app.get('/',(req,res)=>{
    res.send("hello server is here ..")

})
const PORT  = process.env.PORT || 5000 ; 

app.listen(5000,()=>{
    console.log(`server is running on http://localhost:${PORT}`)

})
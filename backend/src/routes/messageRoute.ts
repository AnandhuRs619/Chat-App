import express from "express";

const router = express.Router();
 

router.get('/Conversations',(req,res)=>{
    res.send("user Conversations is here.... ")
})

export default router ;

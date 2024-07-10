import express from "express";
import authRouthes from './routes/authRoute.js'
import messageRoutes from './routes/messageRoute.js'
const app = express();

app.use('/api/auth',authRouthes)
app.use('/api/messages',messageRoutes)
app.get('/',(req,res)=>{
    res.send("hello server is here ..")

})
const PORT  = process.env.PORT || 5000 ; 

app.listen(5000,()=>{
    console.log(`server is running on http://localhost:${PORT}`)

})
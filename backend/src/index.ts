import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import authRouthes from "./routes/authRoute.js";
import messageRoutes from "./routes/messageRoute.js";
import dotenv from "dotenv";
import { app,server } from "./socket/socket.js";

dotenv.config();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(express.json()); // for parsing the data
app.use(cookieParser()); // for Parsing Cookies

app.use("/api/auth", authRouthes);
app.use("/api/messages", messageRoutes);

if(process.env.NODE_ENV !== "development"){
  app.use(express.static(path.join(__dirname,"/frontend/dist")));
  app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"));
  });
}

server.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});



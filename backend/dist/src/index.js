import express from "express";
import cookieParser from "cookie-parser";
import authRouthes from "./routes/authRoute.js";
import messageRoutes from "./routes/messageRoute.js";
import dotenv from "dotenv";
import { app, server } from "./socket/socket.js";
dotenv.config();
app.use(express.json()); // for parsing the data
app.use(cookieParser()); // for Parsing Cookies
app.use("/api/auth", authRouthes);
app.use("/api/messages", messageRoutes);
app.get("/", (req, res) => {
    res.send("hello server is here ..");
});
const PORT = process.env.PORT || 5000;
server.listen(5000, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});

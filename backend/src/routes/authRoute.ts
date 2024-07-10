import express from "express";
import { login, logout, signup } from "../controllers/authController.js";

const router = express.Router();

router.post('/Signup',signup)
router.post('/login',login)
router.post('/logout',logout)

export default router ;

import express from "express";
import { login, logout, signup,getMe } from "../controllers/authController.js";
import proctectRoute from "../middleware/proctectRoute.js";

const router = express.Router();

router.get("/me",proctectRoute, getMe);
router.post("/Signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;

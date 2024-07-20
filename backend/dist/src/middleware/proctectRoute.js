import jwt from 'jsonwebtoken';
import prisma from '../db/prisma.js';
const proctectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ error: "Unauthorized - No Token provided" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ error: "Unauthorized - Invalid Token" });
        }
        const user = await prisma.user.findUnique({ where: { id: decoded.userId }, select: { id: true, username: true, fullname: true, profilePic: true } });
        if (!user) {
            return res.status(401).json({ error: "User not Found" });
        }
        req.user = user;
        next();
    }
    catch (error) {
        console.log("error in protect route ", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
export default proctectRoute;

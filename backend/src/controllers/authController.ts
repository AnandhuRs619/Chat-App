import { Request,Response } from "express"

export const signup = async(req:Request,res:Response)=>{
res.send("user signup ....")
}
export const login = async(req:Request,res:Response)=>{
    res.send("user is logged in ....")

}
export const logout = async(req:Request,res:Response)=>{
res.send("user is logged out ....")
}


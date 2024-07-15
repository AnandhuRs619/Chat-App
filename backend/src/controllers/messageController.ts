import { Request, Response } from "express";
import prisma from "../db/prisma.js";

export const sendMessage = async (req: Request, res: Response) => {
  try {
    const { message } = req.body;
    const receiverId = req.params.id;
    const senderId = req.user.id;

    // check the conversation is there
    let conversation = await prisma.converation.findFirst({
      where: {
        participantIds: {
          hasEvery: [senderId, receiverId],
        },
      },
    });

    // else create a new converation
    if (!conversation) {
      conversation = await prisma.converation.create({
        data: {
          participantIds: {
            set: [senderId, receiverId],
          },
        },
      });
    }

    const newMessage = await prisma.message.create({
      data: {
        senderId,
        body: message,
        conversationId: conversation.id,
      },
    });
    if (newMessage) {
      conversation = await prisma.converation.update({
        where: {
          id: conversation.id,
        },
        data: {
          messages: {
            connect: {
              id: newMessage.id,
            },
          },
        },
      });
    }

    res.status(201).json(newMessage);
  } catch (error: any) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getMessages = async (req: Request, res: Response) => {
  try {
    const receiverId = req.params.id;
    const senderId = req.user.id;
    console.log(receiverId, " dfghfg ", senderId);
    const conversation = await prisma.converation.findFirst({
      where: {
        participantIds: {
          hasEvery: [senderId, receiverId],
        },
      },
      include: {
        messages: {
          orderBy: {
            createdAt: "asc",
          },
        },
      },
    });
    if (!conversation) {
      return res.status(200).json([]);
    }
    res.status(200).json(conversation.messages);
  } catch (error: any) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getConversations = async (req :Request,res:Response)=>{
    try {
        const authUserId = req.user.id;
        const users = await prisma.user.findMany({
            where :{
                id :{
                    not : authUserId,
                }
            },
            select:{
                id:true,
                fullname:true,
                profilePic:true
            }
        })

        res.status(200).json(users);
    } catch (error: any) {
        console.log("Error in login controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
      }
    
    }

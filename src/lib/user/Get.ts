import { FastifyInstance } from "fastify";
import {z} from 'zod'
import { prisma } from "../prisma";

export async function GetUser(app:FastifyInstance){
    app.get("/", async(req, res)=>{
        const users = await prisma.user.findMany()
        return res.status(200).send(users)
    })
}
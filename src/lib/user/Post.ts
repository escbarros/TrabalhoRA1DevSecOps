import { FastifyInstance } from "fastify";
import {prisma} from "../prisma"
import {z}from 'zod'

export async function PostUser(app:FastifyInstance){
    app.post("/", async(req, res)=>{
        const bodySchema = z.object({
            name: z.string(),
            email: z.string().email(),
            password: z.string().min(8)
        })
        try{
            const {name, email, password} = bodySchema.parse(req.body)
            const user = await prisma.user.create({
                data:{
                    name,
                    email,
                    password
                }
            })
            return res.status(201).send(user)
        }catch{
            return res.status(400).send({error: "Invalid body"})
        }
    })
}
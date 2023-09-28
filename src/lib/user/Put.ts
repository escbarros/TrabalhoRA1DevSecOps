import { FastifyInstance } from "fastify";
import {prisma} from "../prisma"
import {z}from 'zod'   

export async function PutUser(app:FastifyInstance){
    app.put("/:id", async(req, res)=>{
        const idSchema = z.object({
            id: z.string().uuid()
        })
        const bodySchema = z.object({
            name: z.string(),
            email: z.string().email(),
            password: z.string().min(8)
        })
        try{
            const {id} = idSchema.parse(req.params)
            const {name, email, password} = bodySchema.parse(req.body)
            const user = await prisma.user.update({
                where:{
                    id
                },
                data:{
                    name,
                    email,
                    password
                }
            })
            return res.status(200).send(user)
        }catch{
            return res.status(400).send({error: "Invalid body"})
        }
    })
}


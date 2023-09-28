import {FastifyInstance} from "fastify";
import {z} from 'zod'
import { prisma } from "../prisma";

export async function DeleteUser(app:FastifyInstance){
    app.delete("/:id", async(req, res)=>{
        const idSchema = z.object({
            id: z.string().uuid()
        })
        try{
            const {id} = idSchema.parse(req.params)
            const user = await prisma.user.delete({
                where:{
                    id
                }
            })
            return res.status(200).send(user)
        }catch{
            return res.status(400).send({error: "Invalid body"})
        }
    })
}
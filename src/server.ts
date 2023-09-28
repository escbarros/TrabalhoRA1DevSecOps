import fastify from "fastify"
import { PostUser } from "./lib/user/Post"
import { PutUser } from "./lib/user/Put"
import { GetUser } from "./lib/user/Get"
import { DeleteUser } from "./lib/user/Delete"

const app = fastify()

app.register(PostUser, {prefix: "/user"})
app.register(PutUser, {prefix: "/user"})
app.register(GetUser, {prefix: "/user"})
app.register(DeleteUser, {prefix: "/user"})

app
.listen({port: 3000})
.then(() => console.log("Server started at port 3000"))
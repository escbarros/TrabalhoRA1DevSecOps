import fastify from "fastify"
import { PostUser } from "./lib/user/Post"
import { PutUser } from "./lib/user/Put"
import { GetUser } from "./lib/user/Get"
import { DeleteUser } from "./lib/user/Delete"

const app = fastify()

app.register(PostUser, {prefix: "/user"})
app.register(PutUser, {prefix: "/user"})
app.register(GetUser, {prefix: "/user"})
app.register(DeleteUser, { prefix: "/user" })

var port;
if (process.env.PORT != undefined) port = process.env.PORT
else port = 3333

app
.listen({port, host: "0.0.0.0"})
.then(() => console.log("Server started at port ", port))
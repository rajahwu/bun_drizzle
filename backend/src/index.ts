import { Elysia } from "elysia";
import { cors } from '@elysiajs/cors';
import { getUsers, validateUser } from "../query-functions/getusers";


const app = new Elysia()

app.use(cors())
.post('/api/login', ({ body }) => {
    const validated = validateUser(body.username, body.password)
    return validated
})

app.get("/api/users", async () => {
  const users = await getUsers()
  return new Response(
    JSON.stringify({ users }),
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
})


app.listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

import { db } from "../database";
import { users  } from "../database/schema";

export async function getUsers() {
    const result = await db.select().from(users)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

getUsers()
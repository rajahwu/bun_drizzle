import { db } from "../db";
import * as schema from "../schema"

import { v4 as uuidv4 } from 'uuid'


await db.insert(schema.users).values(
    [
        {
            id: uuidv4(),
            username: "user01",
            password: "123456"
        },
        {
            id: uuidv4(),
            username: "user02",
            password: "123456"
        },
        {
            id: uuidv4(),
            username: "user03",
            password: "123456"
        },
    ]
)

console.log("Seeding complete.")
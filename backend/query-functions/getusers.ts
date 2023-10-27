import { db } from "../database/db";
import * as schema from "../database/schema"

export async function getUsers() {
    const result = await db.select().from(schema.users)
    return result
}
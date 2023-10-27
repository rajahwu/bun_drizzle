import { db } from "../database/db";
import { eq, and } from "drizzle-orm";
import * as schema from "../database/schema"

export async function getUsers() {
    const result = await db.select().from(schema.users)
    return result
}

export async function validateUser(username, password) {
    const result = await db.select()
        .from(schema.users)
        .where(
            and(
                eq(schema.users.username, username),
                eq(schema.users.password, password)
            )
        )
    if(!Array.isArray(result)) throw new Error("Error logging in")
    
    return result.length === 1
}

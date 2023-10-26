import { QueryBuilder, sqliteTable, sqliteView, text } from "drizzle-orm/sqlite-core";
import { v4 as uuidv4 } from 'uuid'

const qb = new QueryBuilder
 
export const users = sqliteTable("users", {
 id: text('id').primaryKey().default(uuidv4()).notNull(),
 username: text('username').notNull().unique(),
 password: text('password').notNull()
});

export type User = typeof users.$inferSelect
export type InserUser = typeof users.$inferInsert

export const userView = sqliteView("user_view").as((qb) => qb.select().from(users))
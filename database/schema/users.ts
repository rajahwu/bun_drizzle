import { sqliteTable, text } from "drizzle-orm/sqlite-core";
 
export const users = sqliteTable("users", {
 id: text('id'),
 username: text('username'),
 password: text('password')
});
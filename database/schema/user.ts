import { sqliteTable, text } from "drizzle-orm/sqlite-core";
 
export const user = sqliteTable("user", {
 id: text('id'),
 username: text('username'),
 password: text('password')
});
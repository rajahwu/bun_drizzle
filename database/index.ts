import { drizzle } from 'drizzle-orm/better-sqlite3';
import  Database  from "better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import * as schema from "./schema"

const sqlite = new Database("database/project.sqlite");
export const db = drizzle(sqlite);

export async function migrateToLatest() {
  await migrate(db, { migrationsFolder: "drizzle" });

} 

migrateToLatest()
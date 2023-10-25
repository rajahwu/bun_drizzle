import { drizzle, BunSQLiteDatabase } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";

const sqlite = new Database("database/project.sqlite", { create: true });
export const db: BunSQLiteDatabase = drizzle(sqlite);

export async function migrateToLatest() {
  await migrate(db, { migrationsFolder: "drizzle" });

} 

migrateToLatest()
import type { Config } from "drizzle-kit";
 
export default {
  schema: "database/schema/*",
  out: "drizzle",
} satisfies Config;
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/database/Adapters/Drizzle/DrizzleSchema.ts",
  out: "./src/database/Adapters/Drizzle/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL as string,
  },
  verbose: true,
  strict: true,
});

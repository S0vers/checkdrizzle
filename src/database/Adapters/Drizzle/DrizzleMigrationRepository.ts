import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

export default class DrizzleMigrationRepository {
  private migrationClient: any;

  constructor() {
    this.migrationClient = postgres(process.env.DATABASE_URL as string, {
      max: 1,
    });
  }

  async runMigrations() {
    try {
      await migrate(drizzle(this.migrationClient), {
        migrationsFolder: "./src/database/Adapters/Drizzle/migrations",
      });
      console.log("Migrations completed successfully");
    } catch (error) {
      console.error("Error running migrations:", error);
    } finally {
      await this.migrationClient.end();
    }
  }
}

// Usage
const drizzleMigrationRepository = new DrizzleMigrationRepository();
drizzleMigrationRepository.runMigrations();

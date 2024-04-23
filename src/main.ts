import "dotenv/config";

import { db } from "./drizzle/db";
import { UserTable } from "./drizzle/schema";

async function main() {
  const deleteResult = await db.delete(UserTable).execute();
  // const result = await db.select().from(UserTable).execute();
  // const user = await db
  //   .insert(UserTable)
  //   .values({
  //     name: "Kyle",
  //     age: 29,
  //     email: "test@test.com",
  //   })
  //   .returning({
  //     id: UserTable.id,
  //   });
  console.log("Something happened");
}

main();

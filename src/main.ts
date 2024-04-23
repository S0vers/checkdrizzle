import "dotenv/config";

import { db } from "./drizzle/db";
import { UserPreferencesTable, UserTable } from "./drizzle/schema";
import { asc, count, desc, eq, gt, sql } from "drizzle-orm";

async function main() {
  // const deleteResult = await db.delete(UserTable).execute();
  // const result = await db.select().from(UserTable).execute();
  // const user = await db
  //   .insert(UserTable)
  //   .values([
  //     {
  //       name: "Kyle",
  //       age: 29,
  //       email: "test@test.com",
  //     },
  //     {
  //       name: "Joshio",
  //       age: 31,
  //       email: "joshio@joshio.com",
  //     },
  //   ])
  //   .returning({
  //     id: UserTable.id,
  //     userName: UserTable.name,
  //   })
  //   .onConflictDoUpdate({
  //     target: UserTable.email,
  //     set: {
  //       name: "Updated Name",
  //       age: 30,
  //     },
  //   });
  // console.log(user);
  // await db.insert(UserPreferencesTable).values({
  //   emailUpdates: true,
  //   userId: "4210b1f8-fc77-449b-a603-d9adae3e9a89",
  // });
  // await db.delete(UserPreferencesTable);
  // const users = await db.query.UserTable.findMany({
  //   columns: { age: true, id: true },
  //   // limit: 1,
  //   // offset: 1,
  //   // with: {
  //   //   // preferences: {
  //   //   //   columns: { emailUpdates: true },
  //   //   // },
  //   //   posts: { with: { PostCategories: true } },
  //   // },
  //   // orderBy: desc(UserTable.age),
  //   // orderBy: (table, { asc }) => asc(table.age),
  //   // where: (table, funcs) => funcs.between(table.age, 20, 30),
  //   // extras: {
  //   //   lowerCaseName: sql<string>`lower(${UserTable.name})`.as("lowerCaseName"),
  //   // },
  // });
  // const user = await db
  //   .select({
  //     count: count(UserTable.name),
  //     name: UserTable.name,
  //     // id: UserTable.id,
  //     // age: UserTable.age,
  //     // emailUpdates: UserPreferencesTable.emailUpdates,
  //   })
  //   .from(UserTable)
  //   .groupBy(UserTable.name)
  //   .having((columns) => gt(columns.count, 1));
  // // .where(eq(UserTable.age, 25))
  // // .orderBy(desc(UserTable.age))
  // // .leftJoin(
  // //   UserPreferencesTable,
  // //   eq(UserPreferencesTable.userId, UserTable.id)
  // // );
  // update
  // const user = await db
  //   .update(UserTable)
  //   .set({
  //     name: "Evan",
  //   })
  //   .where(eq(UserTable.name, "Joshio"))
  //   .returning({
  //     id: UserTable.id,
  //     userName: UserTable.name,
  //   });
  // delete
  // const users = await db.delete(UserTable).where(eq(UserTable.age, 30));
  // console.log(users);
}

main();

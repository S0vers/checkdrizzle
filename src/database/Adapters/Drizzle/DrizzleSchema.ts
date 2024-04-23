import { relations } from "drizzle-orm";
import {
  boolean,
  integer,
  pgEnum,
  pgTable,
  primaryKey,
  real,
  timestamp,
  unique,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const UserRole = pgEnum("userRole", ["ADMIN", "Basic"]);

export const UserTable = pgTable(
  "user",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name", { length: 255 }).notNull(),
    age: integer("age").notNull(),
    email: varchar("email", { length: 255 }).notNull(),
    role: UserRole("userRole").default("Basic").notNull(),
  },
  (table) => {
    return {
      emailIndex: unique("emailIndex").on(table.email),
      // uniqueNameAndAge: unique("uniqueNameAndAge").on(table.name, table.age),
    };
  }
);

export const UserPreferencesTable = pgTable("userPreferences", {
  id: uuid("id").primaryKey().defaultRandom(),
  emailUpdates: boolean("emailUpdates").default(false).notNull(),
  userId: uuid("userId")
    .notNull()
    .references(() => UserTable.id, { onDelete: "cascade" })
    .notNull(),
});

export const PostTable = pgTable("post", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: varchar("title", { length: 255 }).notNull(),
  averageRating: real("averageRating").default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
  authorId: uuid("authorId")
    .notNull()
    .references(() => UserTable.id)
    .notNull(),
});

export const CategoryTable = pgTable("category", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
});

export const PostCategoryTable = pgTable(
  "postCategory",
  {
    postId: uuid("postId")
      .references(() => PostTable.id)
      .notNull(),
    categoryId: uuid("categoryId")
      .references(() => CategoryTable.id)
      .notNull(),
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.postId, table.categoryId] }),
    };
  }
);

//RELATIONS

export const UserTableRelations = relations(UserTable, ({ one, many }) => {
  return {
    preferences: one(UserPreferencesTable),
    posts: many(PostTable),
  };
});

export const UserPreferencesTableRelations = relations(
  UserPreferencesTable,
  ({ one }) => {
    return {
      user: one(UserTable, {
        fields: [UserPreferencesTable.userId],
        references: [UserTable.id],
      }),
    };
  }
);

export const PostTableRelations = relations(PostTable, ({ one, many }) => {
  return {
    author: one(UserTable, {
      fields: [PostTable.authorId],
      references: [UserTable.id],
    }),
    PostCategories: many(PostCategoryTable),
  };
});

export const CategoryTableRelations = relations(CategoryTable, ({ many }) => {
  return {
    postsCategories: many(PostCategoryTable),
  };
});

export const PostCategoryTableRelations = relations(
  PostCategoryTable,
  ({ one }) => {
    return {
      post: one(PostTable, {
        fields: [PostCategoryTable.postId],
        references: [PostTable.id],
      }),
      category: one(CategoryTable, {
        fields: [PostCategoryTable.categoryId],
        references: [CategoryTable.id],
      }),
    };
  }
);

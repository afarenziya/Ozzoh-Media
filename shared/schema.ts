import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users table schema
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull().unique(),
  role: text("role").default("user"),
  created_at: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  email: true,
  role: true,
});

// Contact messages table schema
export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  service: text("service"),
  message: text("message").notNull(),
  created_at: timestamp("created_at").defaultNow(),
  is_read: boolean("is_read").default(false),
});

export const insertContactSchema = createInsertSchema(contactMessages).pick({
  name: true,
  email: true,
  phone: true,
  service: true,
  message: true,
});

// Newsletter subscribers table schema
export const subscribers = pgTable("subscribers", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  subscribed_at: timestamp("subscribed_at").defaultNow(),
  is_active: boolean("is_active").default(true),
});

export const insertSubscriberSchema = createInsertSchema(subscribers).pick({
  email: true,
});

// Blog posts table schema
export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt"),
  content: text("content").notNull(),
  author_id: integer("author_id").references(() => users.id),
  featured_image: text("featured_image"),
  category: text("category"),
  published_at: timestamp("published_at"),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
  is_published: boolean("is_published").default(false),
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).pick({
  title: true,
  slug: true,
  excerpt: true,
  content: true,
  author_id: true,
  featured_image: true,
  category: true,
  is_published: true,
});

// Type exports
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertContactMessage = z.infer<typeof insertContactSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;

export type InsertSubscriber = z.infer<typeof insertSubscriberSchema>;
export type Subscriber = typeof subscribers.$inferSelect;

export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type BlogPost = typeof blogPosts.$inferSelect;

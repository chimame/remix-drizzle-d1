import { integer, sqliteTable, text, uniqueIndex } from 'drizzle-orm/sqlite-core'
import { users } from './users'

export const posts = sqliteTable('posts', {
  id: integer('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content'),
  published: integer('published').notNull().default(0), // boolean型が作れない https://github.com/drizzle-team/drizzle-orm/pull/411
  authorId: integer('authorId').references(() => users.id),
})

import { integer, sqliteTable, text, uniqueIndex } from 'drizzle-orm/sqlite-core'
import { sql } from 'drizzle-orm'

export const users = sqliteTable('users', {
  id: integer('id').primaryKey(),
  email: text('email').notNull(),
  name: text('name'),
  createdAt: text('createdAt').default(sql`CURRENT_TIMESTAMP`).notNull(),
  updatedAt: text('updatedAt').default(sql`CURRENT_TIMESTAMP`).notNull(),
}, (users) => ({
  emailIdx: uniqueIndex('emailIdx').on(users.email)
}))

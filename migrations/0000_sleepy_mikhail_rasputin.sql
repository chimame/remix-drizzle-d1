CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`name` text,
	`createdAt` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updatedAt` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL
);

CREATE TABLE `posts` (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`content` text,
	`published` integer DEFAULT 0 NOT NULL,
	`authorId` integer,
	FOREIGN KEY (`authorId`) REFERENCES `users`(`id`)
);

CREATE UNIQUE INDEX `emailIdx` ON `users` (`email`);
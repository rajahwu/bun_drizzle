CREATE TABLE `users` (
	`id` text PRIMARY KEY DEFAULT '8c022681-3005-4074-b3b2-1832c385b4cb' NOT NULL,
	`username` text NOT NULL,
	`password` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_username_unique` ON `users` (`username`);
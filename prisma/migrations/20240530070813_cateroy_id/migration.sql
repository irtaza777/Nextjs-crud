/*
  Warnings:

  - Added the required column `cat_id` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `products` ADD COLUMN `cat_id` INTEGER NOT NULL;

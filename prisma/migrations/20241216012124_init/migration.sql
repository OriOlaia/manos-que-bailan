/*
  Warnings:

  - You are about to drop the `leccion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `progress` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `progress` DROP FOREIGN KEY `Progress_leccionId_fkey`;

-- DropForeignKey
ALTER TABLE `progress` DROP FOREIGN KEY `Progress_userId_fkey`;

-- DropTable
DROP TABLE `leccion`;

-- DropTable
DROP TABLE `progress`;

/*
  Warnings:

  - Added the required column `cost` to the `Todo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vendor` to the `Todo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Todo" ADD COLUMN     "cost" VARCHAR(255) NOT NULL,
ADD COLUMN     "vendor" VARCHAR(255) NOT NULL;

/*
  Warnings:

  - Added the required column `starterCode` to the `Problems` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Problems" ADD COLUMN     "starterCode" JSONB NOT NULL;

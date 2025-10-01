/*
  Warnings:

  - You are about to drop the column `new_url` on the `urls` table. All the data in the column will be lost.
  - Added the required column `newUrl` to the `urls` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."urls" DROP COLUMN "new_url",
ADD COLUMN     "newUrl" TEXT NOT NULL;

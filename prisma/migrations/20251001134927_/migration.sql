/*
  Warnings:

  - A unique constraint covering the columns `[newUrl]` on the table `urls` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "urls_newUrl_key" ON "public"."urls"("newUrl");

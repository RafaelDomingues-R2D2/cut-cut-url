-- CreateTable
CREATE TABLE "public"."urls" (
    "id" TEXT NOT NULL,
    "old_url" TEXT NOT NULL,
    "new_url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "urls_pkey" PRIMARY KEY ("id")
);

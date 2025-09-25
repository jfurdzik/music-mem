-- CreateTable
CREATE TABLE "public"."PracticeNote" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PracticeNote_pkey" PRIMARY KEY ("id")
);

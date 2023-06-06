/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Priority" AS ENUM ('ALTA', 'MEDIA', 'BAIXA');

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "tasks" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "finalDate" TIMESTAMP(3) NOT NULL,
    "priority" "Priority" NOT NULL,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);

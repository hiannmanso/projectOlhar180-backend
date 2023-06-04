/*
  Warnings:

  - The values [ALTA,MEDIA,BAIXA] on the enum `Priority` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `status` to the `tasks` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('feito', 'pendente');

-- AlterEnum
BEGIN;
CREATE TYPE "Priority_new" AS ENUM ('alta', 'media', 'baixa');
ALTER TABLE "tasks" ALTER COLUMN "priority" TYPE "Priority_new" USING ("priority"::text::"Priority_new");
ALTER TYPE "Priority" RENAME TO "Priority_old";
ALTER TYPE "Priority_new" RENAME TO "Priority";
DROP TYPE "Priority_old";
COMMIT;

-- AlterTable
ALTER TABLE "tasks" ADD COLUMN     "status" "Status" NOT NULL;

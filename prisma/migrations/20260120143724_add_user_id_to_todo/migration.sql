/*
  Warnings:

  - Added the required column `userId` to the `todos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "todos" ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "todos_userId_idx" ON "todos"("userId");

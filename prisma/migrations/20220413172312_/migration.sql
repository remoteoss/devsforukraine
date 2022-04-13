/*
  Warnings:

  - The primary key for the `Reactions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[colons]` on the table `Reactions` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Reactions_id_key";

-- AlterTable
ALTER TABLE "Reactions" DROP CONSTRAINT "Reactions_pkey",
ALTER COLUMN "skin" DROP NOT NULL,
ADD CONSTRAINT "Reactions_pkey" PRIMARY KEY ("colons");

-- CreateIndex
CREATE UNIQUE INDEX "Reactions_colons_key" ON "Reactions"("colons");

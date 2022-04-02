-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "accepted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "rejected" BOOLEAN NOT NULL DEFAULT false;

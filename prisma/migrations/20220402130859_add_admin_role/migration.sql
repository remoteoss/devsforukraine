/*
  Warnings:

  - You are about to drop the column `registeredFor` on the `User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ATENDEE', 'ADMIN');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "registeredFor",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT E'ATENDEE';

-- DropEnum
DROP TYPE "RegistrationType";

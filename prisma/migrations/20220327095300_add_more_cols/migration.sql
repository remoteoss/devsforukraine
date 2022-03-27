/*
  Warnings:

  - Added the required column `registeredFor` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "RegistrationType" AS ENUM ('FRONTEND', 'BACKEND');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "donationAmount" INTEGER,
ADD COLUMN     "registeredFor" "RegistrationType" NOT NULL,
ADD COLUMN     "registrationNumber" SERIAL NOT NULL;

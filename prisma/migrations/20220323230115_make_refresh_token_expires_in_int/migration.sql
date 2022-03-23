/*
  Warnings:

  - Changed the type of `refresh_token_expires_in` on the `Account` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Account" DROP COLUMN "refresh_token_expires_in",
ADD COLUMN     "refresh_token_expires_in" INTEGER NOT NULL;

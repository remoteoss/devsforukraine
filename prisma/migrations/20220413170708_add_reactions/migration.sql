-- CreateTable
CREATE TABLE "Reactions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "short_names" TEXT[],
    "colons" TEXT NOT NULL,
    "emoticons" TEXT[],
    "unified" TEXT NOT NULL,
    "skin" INTEGER NOT NULL,
    "native" TEXT NOT NULL,
    "uses" INTEGER NOT NULL,

    CONSTRAINT "Reactions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Reactions_id_key" ON "Reactions"("id");

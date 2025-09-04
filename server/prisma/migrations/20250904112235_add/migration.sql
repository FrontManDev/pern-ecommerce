-- CreateTable
CREATE TABLE "public"."Category" (
    "id" TEXT NOT NULL,
    "Title" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "Image" TEXT,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Procuts" (
    "id" TEXT NOT NULL,
    "Title" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "Prix" DOUBLE PRECISION NOT NULL,
    "CatId" TEXT NOT NULL,

    CONSTRAINT "Procuts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Procuts" ADD CONSTRAINT "Procuts_CatId_fkey" FOREIGN KEY ("CatId") REFERENCES "public"."Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

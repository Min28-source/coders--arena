-- CreateTable
CREATE TABLE "Problems" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "constraints" TEXT[],
    "examples" JSONB NOT NULL,

    CONSTRAINT "Problems_pkey" PRIMARY KEY ("id")
);

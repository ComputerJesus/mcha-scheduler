-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'MANAGER', 'ADMIN', 'DEV_TEAM');

-- CreateTable
CREATE TABLE "Worker" (
    "id" SERIAL NOT NULL,
    "createdby" "Role" NOT NULL DEFAULT 'DEV_TEAM',
    "createdid" INTEGER,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "manager" TEXT,
    "managerid" TEXT,

    CONSTRAINT "Worker_pkey" PRIMARY KEY ("id")
);

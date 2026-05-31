import "dotenv/config";
import path from "path";
import dotenv from "dotenv";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client";

// Fail-safe: Force load the root .env file if it hasn't loaded yet
dotenv.config({ path: path.resolve(process.cwd(), "../.env") });

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.error("CRITICAL: DATABASE_URL is undefined! Check your .env path setup.");
}

// Pass the raw variable securely without string interpolation forcing a literal "undefined"
const adapter = new PrismaPg({ connectionString: connectionString || "" });
const prisma = new PrismaClient({ adapter });

export { prisma };
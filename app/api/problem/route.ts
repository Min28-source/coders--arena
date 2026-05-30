import { prisma } from "@/lib/prisma";

export async function GET() {
    const count = await prisma.problems.count();
    const randomProblem = Math.floor(count * Math.random());
    const problem = await prisma.problems.findFirst({
        skip: randomProblem
    })
    const result = Response.json(problem);
    return result
}
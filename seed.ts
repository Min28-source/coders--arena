import { prisma } from "./lib/prisma";
import { problems } from "./problems";

async function main() {
    await prisma.problems.deleteMany();
    
    await prisma.problems.createMany({
        data: problems
    });

    console.log(`Inserted ${problems.length} problems`);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
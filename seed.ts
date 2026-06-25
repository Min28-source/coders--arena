import { prisma } from "./lib/prisma";
import { testcases } from "./testcases";
import {problems} from "./problems"

async function main() {
    await prisma.testCase.deleteMany();
    
    await prisma.testCase.createMany({
        data: testcases
    });

    console.log(testcases.length)
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
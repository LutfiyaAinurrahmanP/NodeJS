import { prismaClient } from "../src/prisma-client";

test('queryraw ',async () => {
    const id = 11;
    const samples = await prismaClient.$queryRaw`SELECT * FROM sample`;

    for(const sample of samples){
        console.info(`Result sample id :  ${sample.id} and name = ${sample.name}`);
    }
}); 
import { prismaClient } from "../src/prisma-client";

describe('Prisma execute sql', () => {
    it('should able to execute sql', async () => {
        const id = "13";
        const name = "Amalia Dyah Puspita";

        const impacted = await prismaClient.$executeRaw`INSERT INTO sample(id, name) VALUES (${id}, ${name})`;
        expect(impacted).toBe(1); //jumlah baris yang di insert
    });
});
import { prismaClient } from "../src/prisma-client";

test('interactive transaction', async () => {
    const [lutfiya, ainurrahman] = await prismaClient.$transaction(async (prisma) => {
        const lutfiya = await prisma.customer.create({
            data: {
                id: "3",
                name: "Lutfiya",
                email: "lutfiya@gmail.com",
                phone: "0821"
            }
        });
        const ainurrahman = await prisma.customer.create({
            data: {
                id: "4",
                name: "Ainurrahman",
                email: "ainurrahman@gmail.com",
                phone: "0822"
            }
        })
        return [lutfiya, ainurrahman];
    })
});
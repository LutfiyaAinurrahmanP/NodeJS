import { prismaClient } from "../src/prisma-client";

test('count',async () => {
    const total = await prismaClient.customer.count({
        where: {
            name: "budi"
        }
    });
    console.info(total);
    expect(total).toBe(2);
});
import { prismaClient } from "../src/prisma-client";

describe('sorting', () => {
    test('sorting1', async () => {
        const customers = await prismaClient.customer.findMany({
            skip: 0,
            take: 5,
            orderBy: [
                // {
                //     name: 'asc',
                //     // dari bawah ke atas
                // },
                {
                    email: 'desc'
                    // dari atas ke bawah
                }
            ]
        });
        // for (const customerName of customers) {
        //     console.info(customerName.name);
        // }
        for (const customerEmail of customers) {
            console.info(customerEmail.email);
        }
    });
});
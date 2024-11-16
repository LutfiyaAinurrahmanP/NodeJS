import { prismaClient } from "../src/prisma-client";

describe('select fields', () => {
    test('create select fields', async () => {
        const customers = await prismaClient.customer.create({
            data: {
                id: "buda",
                name: "buda",
                email: "buda@gmail.com",
                phone: "089901"
            },
            select: {
                id: true,
                name: true
            }
        });
        expect(customers.id).toBe("buda");
        expect(customers.name).toBe("buda");
        expect(customers.email).toBeUndefined();
        expect(customers.phone).toBeUndefined();
    });
    test('findmany select fields', async () => {
        const customers = await prismaClient.customer.findMany({
            select: {
                id: true,
                name: true
            }
        });
        console.info(customers);
        for (const customer of customers) {
            expect(customer.id).toBeDefined();
            expect(customer.name).toBeDefined();
            expect(customer.email).toBeUndefined();
            expect(customer.phone).toBeUndefined();
        }
    });
});
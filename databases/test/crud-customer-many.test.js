import { prismaClient } from "../src/prisma-client";

describe('CRUD CUSTOMER MANY', () => {
    test('create data', async () => {
        const { count } = await prismaClient.customer.createMany({
            data: [
                {
                    id: "5",
                    name: "lia",
                    email: "lia@gmail.com",
                    phone: "0830"
                },
                {
                    id: "6",
                    name: "dyah",
                    email: "dyah@gmail.com",
                    phone: "0831"
                }
            ]
        })
        expect(count).toBe(2);
    });
    test('update many ',async () => {
        const {count} = await prismaClient.customer.updateMany({
            data: {
                name: "budi"
            },
            where: {
                email: "pp@gmail.com"
            }
        });
        expect(count).toBe(1);
    });
    test('delete many',async () => {
        const {count} = await prismaClient.customer.deleteMany({
            where: {
                name: "Lutfiya"
            }
        })
        expect(count).toBe(1);
    });
    test('read many',async () => {
        const customers = await prismaClient.customer.findMany({});
        expect(customers.length).toBe(5);
    });
});

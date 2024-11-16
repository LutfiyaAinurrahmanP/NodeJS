import { prismaClient } from "../src/prisma-client";
/**
 * Take adalah jumlah maksimal data yang diambil
 * Skip adalah jumlah data yang akan di skip diawal
 */

describe('paging', () => {
    test('paging1', async () => {
        const page1 = await prismaClient.customer.findMany({
            skip: 0,
            take: 1
        })
        expect(page1.length).toBe(1);
        console.info(page1);
    });
    test('paging2',async () => {
        const page2 = await prismaClient.customer.findMany({
            skip: 1,
            take: 1
        });
        console.info(page2);
        expect(page2.length).toBe(1);
    });
    test('paging3',async () => {
        const page3 = await prismaClient.customer.findMany({
            skip: 2,
            take: 3
        });
        console.info(page3);
        expect(page3.length).toBe(3);
    });
});
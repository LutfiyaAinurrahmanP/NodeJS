import { prismaClient } from "../src/prisma-client";

test('auto increment',async () => {
    const tambah = await prismaClient.category.create({
        data: {
            name : "Car"
        }
    });
    console.info(tambah);
    expect(tambah).toHaveProperty("id");
});
import { prismaClient } from "../src/prisma-client";

test('function agregate', async () => {
    const result = await prismaClient.product.aggregate({
        _min: {
            price: true
        },
        _max: {
            price: true
        },
        _avg: {
            price: true
        }
    });
    const view = await prismaClient.product.findMany({
        select: {
            name: true,
            price: true
        }
    });
    console.info(`Price minimun : `, result._min.price);
    console.info(`Price maximum : `, result._max.price);
    console.info(`Price average : `, result._avg.price);
    console.info(view);
    expect(result._min.price).toBe(1000);
    expect(result._max.price).toBe(5000);
    expect(result._avg.price).toBe(3000);
});
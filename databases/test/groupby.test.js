import { prismaClient } from "../src/prisma-client";

test('groupby', async () => {
    const result = await prismaClient.product.groupBy({
        by: ['category'],
        _min: {
            price: true,
            stock: true,
        },
        _max: {
            price: true,
            stock: true,
        },
        _avg: {
            price: true,
            stock: true,
        }
    });
    console.info(result);
    for (const item of result) {
        console.info(`Category: ${item.category} min price: ${item._min.price} max price: ${item._max.price} avg price: ${item._avg.price}`);
        console.info(`Category: ${item.category} min stock: ${item._min.stock} max stock: ${item._max.stock} avg stock: ${item._avg.stock}`);
    }
});

import { prismaClient } from "../src/prisma-client";

describe('where condition dan operator', () => {

    test('equals op', async () => {
        const products = await prismaClient.product.findMany({
            where: {
                price: {
                    equals: 3000
                }
            },
            orderBy: [
                { name: "desc" }
            ]
        });
        console.info(products);
        for (const product of products) {
            expect(product.price).toBe(3000);
        }
    });

    test('not op', async () => {
        const products = await prismaClient.product.findMany({
            where: {
                name: {
                    not: "D"
                }
            }
        });
        console.info(products);
        for (const product of products) {
            expect(product.name).not.toBe("D");
        }
    });

    test('in op', async () => {
        const products = await prismaClient.product.findMany({
            where: {
                name: {
                    in: ["A", "B", "E"]
                },
            },
            orderBy: [
                { name: "desc" }
            ]
        });
        console.info(products);
        expect(products[0].name).toBe("E");
        expect(products[1].name).toBe("B");
        expect(products[2].name).toBe("A");
    });

    test('notIn op', async () => {
        const products = await prismaClient.product.findMany({
            where: {
                name: {
                    notIn: ["A", "B", "E"]
                },
            },
            orderBy: [
                { name: "desc" }
            ]
        });
        console.info(products);
        expect(products[0].name).toBe("D");
        expect(products[1].name).toBe("C");
    });

    test('lt op', async () => {
        const products = await prismaClient.product.findMany({
            where: {
                price: {
                    lt: 3000
                },
            },
        });
        console.info(products);
        expect(products[0].name).toBe("A");
        expect(products[1].name).toBe("B");
    });

    test('lte op', async () => {
        const products = await prismaClient.product.findMany({
            where: {
                price: {
                    lte: 3000
                },
            },
        });
        console.info(products);
        expect(products[0].name).toBe("A");
        expect(products[1].name).toBe("B");
        expect(products[2].name).toBe("C");
    });

    test('gt op', async () => {
        const products = await prismaClient.product.findMany({
            where: {
                price: {
                    gt: 3000
                },
            },
        });
        console.info(products);
        expect(products[0].name).toBe("D");
        expect(products[1].name).toBe("E");
    });

    test('gte op', async () => {
        const products = await prismaClient.product.findMany({
            where: {
                price: {
                    gte: 3000
                },
            },
        });
        console.info(products);
        expect(products[0].name).toBe("C");
        expect(products[1].name).toBe("D");
        expect(products[2].name).toBe("E");
    });

    test('contains op', async () => {
        const products = await prismaClient.product.findMany({});
        const result = await prismaClient.product.count({
            where: {
                category: {
                    contains: "K1",
                },
            },
        });
        console.info(products);
        console.info(result);
        expect(result).toBe(3);
        expect(products[1].name).toBe("B");
    });

    test('startsWith op', async () => {
        const products = await prismaClient.product.findMany({
            where: {
                id: {
                    startsWith: "P",
                },
            },
        });
        console.info(products);
        expect(products[2].name).toBe("C");
    });

    test('endsWith op', async () => {
        const products = await prismaClient.product.findMany({
            where: {
                category: {
                    endsWith: "1",
                },
            },
        });
        console.info(products);
        expect(products).toHaveLength(3)
        expect(products[2].price).toBe(3000);
    });

    test('AND op', async () => {
        const products = await prismaClient.product.findMany({
            where: {
                AND: {
                    name: {
                        equals: "A"
                    },
                    category: {
                        equals: "K1"
                    }
                },

            },
        });
        console.info(products);
        expect(products[0].price).toBe(1000);
    });

    test('OR op ', async () => {
        const products = await prismaClient.product.findMany({
            where: {
                OR: [
                    { name: "A" },
                    { name: "B" }
                ]
            },
            orderBy: [
                { name: "desc" }
            ]
        });
        console.info(products);
        expect(products).toHaveLength(2);
        expect(products[0].name).toBe("B");
        expect(products[1].name).toBe("A");
    });

    test('NOT op ', async () => {
        const products = await prismaClient.product.findMany({
            where: {
                NOT: [
                    { name: "A" },
                    { name: "B" }
                ]
            },
            orderBy: [
                { name: "desc" }
            ]
        });
        console.info(products);
        expect(products).toHaveLength(3);
        expect(products[0].name).toBe("E");
        expect(products[1].name).toBe("D");
    });

    test('seacrh op', async () => {
        const products = await prismaClient.product.findMany({
            where: {
                name: {
                    search: '!A'
                },
            },
        });
        console.info(products);
    });
});
import { prismaClient } from "../src/prisma-client";

describe('relation many to many explicit', () => {
    test('create relation', async () => {
        const like = await prismaClient.like.create({
            data: {
                customer_id: "C002",
                product_id: "P002"
            },
            include: {
                customer: true,
                product: true
            }
        });
        console.info(like)
    });

    test('find with include', async () => {
        const customer = await prismaClient.customer.findUnique({
            where: {
                id: "C001"
            },
            include: {
                likes: {
                    include: {
                        product: true
                    }
                }
            }
        });
        console.info(JSON.stringify(customer));
        console.info(customer);
    });

    test('find many with include', async () => {
        const customers = await prismaClient.customer.findMany({
            where: {
                likes: {
                    some: {
                        product: {
                            name: {
                                contains: "A"
                            }
                        }
                    }
                }
            },
            include: {
                likes: {
                    include: {
                        product: true
                    }
                }
            }
        });
        console.info(customers);
        console.info(JSON.stringify(customers));
    });
});

describe('relation many to many implicit', () => {
    test('create implicit relation',async () => {
        const customer = await prismaClient.customer.update({
            where: {
                id : "C002"
            },
            data: {
                loves: {
                    connect: [
                        {id: "P001"},
                        {id: "P002"}
                    ]
                }
            },
            include: {
                loves: true
            }
        });
        console.info(customer);
        console.info(JSON.stringify(customer));
    });

    test('find many implicit relation',async () => {
        const customer = await prismaClient.customer.findMany({
            where: {
                loves: {
                    some: {
                        name: {
                            contains: "A"
                        }
                    }
                }
            },
            include: {
                loves: true
            }
        });
        console.info(JSON.stringify(customer));
        console.info(customer);
    });
});
import { prismaClient } from "../src/prisma-client";

describe('relation one to many', () => {
    test('insert with include', async () => {
        const comment = await prismaClient.comment.create({
            data: {
                customer_id: "C001",
                title: "Insert Comment",
                description: "Description Comment"
            },
            include: {
                customer: true
            }
        });
        console.info(comment);
    });
    test('insert with relation', async () => {
        const customer = await prismaClient.customer.create({
            data: {
                id: "C003",
                name: "Customer C003",
                email: "c003@gmail.com",
                phone: "081233",
                comments: {
                    createMany: {
                        data: [
                            {
                                title: "Comment 1",
                                description: "Description 1"
                            },
                            {
                                title: "Comment 2",
                                description: "Description 2"
                            }
                        ]
                    }
                }
            }
        })
        console.info(customer);
    });
    test('find many with relation', async () => {
        const customer = await prismaClient.customer.findMany({
            where: {
                comments: {
                    some: {
                        title: {
                            contains: "Comment"
                        }
                    }
                }
            },
            include: {
                comments: true
            }
        });
        console.info(customer);
    });
});
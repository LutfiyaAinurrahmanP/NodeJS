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
                id: "C002",
                name: "Customer C002",
                email: "c002@gmail.com",
                phone: "08123",
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
});
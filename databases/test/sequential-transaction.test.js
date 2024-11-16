import { prismaClient } from "../src/prisma-client";

test('sequential transaction',async () => {
    const [upiw, poing] = await prismaClient.$transaction([
        prismaClient.customer.create({
            data: {
                id: "1",
                name: "Upiwwwww",
                email: "upi@gmail.com",
                phone: "0819"
            }
        }),
        prismaClient.customer.create({
            data: {
                id: "2",
                name: "Poinggggg",
                email: "poingggggg@gmail.com",
                phone: "0820"
            }
        })
    ]);
    expect(upiw.name).toBe("Upiwwwww");
    expect(poing.name).toBe("Poinggggg");
    expect()
    
});
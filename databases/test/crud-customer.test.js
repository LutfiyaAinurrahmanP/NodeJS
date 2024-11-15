import { prismaClient } from "../src/prisma-client";

test('insert customer', async () => {
    const customer = await prismaClient.customer.create({
        data: {
            id: "upi",
            name: "Lutfiya ainurrahman",
            email: "lutfiyapr.creative@gmail.com",
            phone: "081915133813"
        }
    })

    expect(customer.id).toBe("upi");
    expect(customer.name).toBe("Lutfiya ainurrahman");
    expect(customer.email).toBe("lutfiyapr.creative@gmail.com");
    expect(customer.phone).toBe("081915133813");
});

test('update customer', async () => {
    const customer = await prismaClient.customer.update({
        data: {
            name: "Amalia Dyah Puspita"
        },
        where: {
            id: "upi"
        }
    });
    expect(customer.id).toBe("upi");
    expect(customer.name).toBe("Amalia Dyah Puspita");
    expect(customer.email).toBe("lutfiyapr.creative@gmail.com");
    expect(customer.phone).toBe("081915133813");
});

test('read customer', async () => {
    const customer = await prismaClient.customer.findUnique({
        where: {
            id: "upi"
        }
    });
    expect(customer.id).toBe("upi");
    expect(customer.name).toBe("Amalia Dyah Puspita");
    expect(customer.email).toBe("lutfiyapr.creative@gmail.com");
    expect(customer.phone).toBe("081915133813");
});
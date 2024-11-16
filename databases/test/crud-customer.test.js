import { prismaClient } from "../src/prisma-client";

test('insert customer', async () => {
    const customer = await prismaClient.customer.create({
        data: {
            id: "pp",
            name: "Amalia Dyah Puspita",
            email: "pp@gmail.com",
            phone: "088"
        }
    })

    expect(customer.id).toBe("pp");
    expect(customer.name).toBe("Amalia Dyah Puspita");
    expect(customer.email).toBe("pp@gmail.com");
    expect(customer.phone).toBe("088");
});

test('update customer', async () => {
    const customer = await prismaClient.customer.update({
        data: {
            email: "iniemail@gmail.com"
        },
        where: {
            id: "pp"
        }
    });
    expect(customer.id).toBe("pp");
    expect(customer.name).toBe("pp");
    expect(customer.email).toBe("iniemail@gmail.com");
    expect(customer.phone).toBe("088");
});

test('read customer', async () => {
    const customer = await prismaClient.customer.findUnique({
        where: {
            id: "amal"
        }
    });
    expect(customer.id).toBe("amal");
    expect(customer.name).toBe("Amalia Dyah Puspita");
    expect(customer.email).toBe("amalia@gmail.com");
    expect(customer.phone).toBe("08888888888");
});

test('delete customer', async () => {
    const customer = await prismaClient.customer.delete({
        where: {
            id: "upi"
        }
    });
    expect(customer.id).toBe("upi");
    expect(customer.name).toBe("Lutfiya ainurrahman");
    expect(customer.email).toBe("lutfiyapr.creative@gmail.com");
    expect(customer.phone).toBe("081915133813");
});
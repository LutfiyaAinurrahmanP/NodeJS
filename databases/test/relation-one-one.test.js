import { prismaClient } from "../src/prisma-client";

test('insert with include', async () => {
    const wallet = await prismaClient.wallet.create({
        data: {
            id: "W001",
            balance: 100000,
            customer_id: "1"
        },
        include: {
            customer: true
        }
    });
    console.info(wallet);
});

test('insert with relation', async () => {
    const customer = await prismaClient.customer.create({
        data: {
            id: "C001",
            name: "Amalia Dyah",
            phone: "08977",
            email: "dyah@gmail.com",
            wallet: {
                create: {
                    id: "W002",
                    balance: 20000
                }
            }
        },
        include: {
            wallet: true
        }
    });
    const viewWallet = await prismaClient.wallet.findMany({
        where: {
            id: "W002"
        }
    });
    const viewCostomer = await prismaClient.customer.findMany({
        where: {
            id: "C001"
        }
    })
    console.info(customer);
    console.info(viewCostomer);
    console.info(viewWallet);
});

test('read data customer data with wallet table', async () => {
    // mengambil data customer dalam wallet, dengan relasi
    const read = await prismaClient.wallet.findFirst({
        include: {
            customer: true
        }
    });
    console.info(read.customer.name);
});

test('find with include',async () => {
    const customer = await prismaClient.customer.findUnique({
        where: {
            id: "C001"
        },
        include: {
            wallet: true
        }
    });
    console.info(customer);
});

test('find many with include',async () => {
    const customers = await prismaClient.customer.findMany({
        where: {
            wallet: {
                isNot: null
            }
        },
        include: {
            wallet: true
        }
    });
    console.info(customers);
});
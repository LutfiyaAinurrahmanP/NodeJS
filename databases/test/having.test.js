import { prismaClient } from "../src/prisma-client";

// 1. Operator `gt` (greater than)
// Contoh: Menampilkan data di mana rata-rata harga lebih besar dari 3000
// having: { price: { _avg: { gt: 3000 } } }

// 2. Operator `gte` (greater than or equal to)
// Contoh: Menampilkan data di mana rata-rata harga lebih besar atau sama dengan 3000
// having: { price: { _avg: { gte: 3000 } } }

// 3. Operator `lt` (less than)
// Contoh: Menampilkan data di mana rata-rata harga kurang dari 4000
// having: { price: { _avg: { lt: 4000 } } }

// 4. Operator `lte` (less than or equal to)
// Contoh: Menampilkan data di mana rata-rata harga kurang atau sama dengan 3000
// having: { price: { _avg: { lte: 3000 } } }

// 5. Operator `equals` (equal to)
// Contoh: Menampilkan data di mana rata-rata harga sama dengan 3000
// having: { price: { _avg: { equals: 3000 } } }

// 6. Operator `not` (not equal to)
// Contoh: Menampilkan data di mana rata-rata harga tidak sama dengan 3000
// having: { price: { _avg: { not: 3000 } } }

// 7. Operator `in` (in a list)
// Contoh: Menampilkan data di mana rata-rata harga adalah salah satu dari [1000, 2000, 3000]
// having: { price: { _avg: { in: [1000, 2000, 3000] } } }

// 8. Operator `notIn` (not in a list)
// Contoh: Menampilkan data di mana rata-rata harga bukan salah satu dari [1000, 2000, 3000]
// having: { price: { _avg: { notIn: [1000, 2000, 3000] } } }

test('having', async () => {
    const result = await prismaClient.product.groupBy({
        by: ['category'],
        _min: {
            price: true
        },
        _max: {
            price: true
        },
        _avg: {
            price: true
        },
        having: {
            price: {
                _avg: {
                    gt: 3000
                }
            }
        }
    });
    console.info(result);
});


import { getBallance } from "../src/async";

test('mock async function', async () => {
    const from = jest.fn().mockResolvedValueOnce(1000);
    await expect(getBallance("Lutfiya", from)).resolves.toEqual({
        name: "Lutfiya", balance: 1000
    });
    await expect(from.mock.calls.length).toBe(1);
    await expect(from.mock.results[0].value).resolves.toBe(1000);
});

test.failing('mock async function rejected',async () => {
    const from = jest.fn().mockRejectedValueOnce(new Error("UPS"));
    await getBallance("Lutfiya", from);
});
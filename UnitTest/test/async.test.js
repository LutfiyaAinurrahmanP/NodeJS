import { sayHello } from "../src/async";

test('promises', async () => {
    const result = await sayHello("Lutfiya");
    expect(result).toBe(`Halo Lutfiya`);
});

test('async matchers', async () => {
    await expect(sayHello("Lutfiya")).resolves.toBe("Halo Lutfiya");
    await expect(sayHello()).rejects.toBe("Name is empty");
});
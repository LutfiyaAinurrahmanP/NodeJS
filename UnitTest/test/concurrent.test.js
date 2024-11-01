import { sayHello } from "../src/async.js";

test.concurrent("concurrent 1", async () => {
    await expect(sayHello("Lutfiya")).resolves.toBe("Halo Lutfiya");
});

test.concurrent("concurrent 2", async () => {
    await expect(sayHello("Lutfiya")).resolves.toBe("Halo Lutfiya");
});

test.concurrent("concurrent 3", async () => {
    await expect(sayHello("Lutfiya")).resolves.toBe("Halo Lutfiya");
});



import { hello } from "../src/hello";

test('true', () => {
    expect(hello("Lutfiya")).toBe("hello Lutfiya");
});

test.failing('failing ', () => {
    hello(null);
});

test('failing 2', () => {
    expect(()=> hello(null)).toThrow();
});


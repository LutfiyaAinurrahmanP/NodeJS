test('string.not', () => {
    const name = "Lutfiya Ainurrahman Prasetyo";

    expect(name).not.toBe("Upiwwwww");
    expect(name).not.toEqual("Kapiwwwww");
    expect(name).not.toMatch(/www/);
});

test('number.not', () => {
    const number = 2 + 2;
    expect(number).not.toBeGreaterThan(6);
    expect(number).not.toBeGreaterThanOrEqual(6);
    expect(number).not.toBeLessThan(2);
    expect(number).not.toBeLessThanOrEqual(3);
    expect(number).not.toBe(3)
});

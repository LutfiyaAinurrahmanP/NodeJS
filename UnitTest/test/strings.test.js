test('string', () => {
    const name = "Lutfiya Ainurrahman Prasetyo";

    expect(name).toBe("Lutfiya Ainurrahman Prasetyo");
    expect(name).toEqual("Lutfiya Ainurrahman Prasetyo");
    expect(name).toMatch(/man/);
});
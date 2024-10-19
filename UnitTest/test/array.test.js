test('array', () => {
    const names = ["Lutfiya", "Ainurrahman", "Prasetyo"];
    expect(names).toContain("Ainurrahman");
    expect(names).toEqual(["Lutfiya", "Ainurrahman", "Prasetyo"]);

    const persons = [{ name: "upiwwwww" }, { name: "poinggggg" }];
    expect(persons).toContainEqual({ name: "upiwwwww" });
    expect(persons).toEqual([{ name: "upiwwwww" }, { name: "poinggggg" }]);
});
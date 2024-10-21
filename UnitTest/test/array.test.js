test('array', () => {
    const names = ["Lutfiya", "Ainurrahman", "Prasetyo"];
    // toContain = mengambil salah satu yang ada di value
    expect(names).toContain("Ainurrahman");
    // toEqual = mengambil salah satu yang ada di value dan harus berurutan sama ( = )
    expect(names).toEqual(["Lutfiya", "Ainurrahman", "Prasetyo"]);

    const persons = [{ name: "upiwwwww" }, { name: "poinggggg" }];
    // Memeriksa apakah ada objek dengan struktur dan nilai yang sama
    expect(persons).toContainEqual({ name: "poinggggg" });
    expect(persons).toEqual([{ name: "upiwwwww" }, { name: "poinggggg" }]);
});
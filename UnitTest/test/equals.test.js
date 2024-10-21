test('test toBe', () => {
    let name = "Lutfiya";
    let hello = `Hello ${name}`;

    expect(hello).toBe("Hello Lutfiya");
});

test('test toEquals', () => {
    let person = {id: 220102060};
    Object.assign(person, {name: "Lutfiya"});

    expect(person).toEqual({id: 220102060, name: "Lutfiya"}); // Harus sama persis (=)
    expect(person).toBe({name: "Lutfiya", id: 220102060}); // Minimal bernilai benar valuenya
});


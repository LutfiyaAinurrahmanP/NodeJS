const tagFunction = (array, args) => {
    console.info(array);
    console.info(args);
};

test('tag function', () => {
    const name = "Lutfiya";
    const lastName = "Ainurrahman";
    tagFunction`Hello ${name} ${lastName}, How are you?`;
    tagFunction`By firstname${name} and lastname ${lastName}, see you later`
});

test('tag function sql', () => {
    const name = "upi";
    const age = 21;

    tagFunction`SELECT * FROM users WHERE name = ${name} AND age = ${age}`;
});
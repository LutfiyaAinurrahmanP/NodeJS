test.only('test1', () => {
    console.log(`Test 1`);
});

it.only('test2', () => {
    console.log(`Test 2`);
});

test('test3', () => {
    console.log(`Test 3`);
});

it('test4', () => {
    console.log(`Test 4`);
});

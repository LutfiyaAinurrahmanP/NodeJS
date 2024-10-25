beforeAll(() => {
    console.log(`Before All`);
});

afterAll(() => {
    console.log(`After All`);
});

beforeEach(() => {
    console.log(`Before Each`);
});

afterEach(() => {
    console.log(`After Each`);
});

test('test outer', () => {
    console.log(`ini outer`);
});

describe(`inner`, () => {
    beforeAll(() => {
        console.log(`Before All inner`);
    });
    test('test inner', () => {
        console.log(`ini inner desc`);
    });
})

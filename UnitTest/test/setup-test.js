import { sum } from "../src/sum"

beforeEach(() => {
    console.log("Before Each");

});

afterEach(() => {
    console.log("After Each");

})

test('firstTest', () => {
    expect(sum(10, 10)).toBe(20);
    console.log("First Test");
});
test('secondTest ', () => {
    expect(sum(10, 10)).toBe(20);
    console.log("Second Each");
});
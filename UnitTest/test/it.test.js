import { sumAll } from "../src/sum";

describe('When call sumAll', () => {
    it(`should get 30`, () => {
        expect(sumAll([10, 10, 10])).toBe(30);
    });
});
import { callMe, myException } from "../src/exception.js";

test('exception', () => {
    expect(() => { callMe("Lutfiya") }).toThrow();
    expect(() => { callMe("Lutfiya") }).toThrow(myException);
    expect(() => { callMe("Lutfiya") }).toThrow("Ups my exception happends");
});
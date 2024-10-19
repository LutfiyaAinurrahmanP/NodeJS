/**
 * Function                   Keterangan
 * ---------------------------------------------------------------------------
 * .toBeGreaterThan(n)         Memastikan value lebih besar dari n
 * .toBeGreaterThanOrEqual(n)  Memastikan value lebih besar atau sama dengan n
 * .toBeLessThan(n)            Memastikan value lebih kecil dari n
 * .toBeLessThanOrEqual(n)     Memastikan value lebih kecil atau sama dengan n
 */
test('perbandingan', () => {
    let value = 5 + 5;

    expect(value).toBeGreaterThan(9);
    expect(value).toBeGreaterThanOrEqual(10);
    expect(value).toBeLessThan(11);
    expect(value).toBeLessThanOrEqual(10);

    expect(value).toBe(10);
});
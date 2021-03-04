const primos = require('./primos');

test('expects getPrimos to print 7,5,3,2,1', () => {
    expect(primos.getPrimos(7)).toStrictEqual([7, 5, 3, 2, 1]);
});

test('expects getPrimos to print 13,11,7,5,3,2,1', () => {
    expect(primos.getPrimos(15)).toStrictEqual([13, 11, 7, 5, 3, 2, 1]);
});

test('expects getPrimos to be falsy when null', () => {
    expect(primos.getPrimos(null)).toBeFalsy();
});

test('expects getPrimos to be falsy when 0', () => {
    expect(primos.getPrimos(0)).toBeFalsy();
});

test('expects getPrimos to be falsy when crashing', () => {
    expect(primos.getPrimos(99999999999999)).toBeFalsy();
});
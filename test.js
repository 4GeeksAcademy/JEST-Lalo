const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum (14,9);
    expect(total).toBe(23);
    });

    test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("One Dollar should be 167.45 Yenes", function (){
    const { fromDollarToYen } = require('./app.js');
    const yens = fromDollarToYen(5);
    const expected = (5/1.07) * 156.5;
    expect(fromDollarToYen(5)).toBe(731.3084112149533);
})

test("One Yen should be 0.0051 Pounds", function(){
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(500);
    const expected = (500/156.5) * 0.87;
    expect(fromYenToPound(500)).toBe(2.7795527156549524);
})
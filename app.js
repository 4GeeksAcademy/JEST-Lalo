const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))
module.exports = { sum };

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}
module.exports = { sum, fromEuroToDollar }

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = (valueInDollar / 1.07) * 156.5;
    return valueInYen;

}

const fromYenToPound = function(valueInYen){
    let valueInPound = (valueInYen / 156.5) * 0.87;
    return valueInPound;
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }
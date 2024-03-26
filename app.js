// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}


let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    //convertir euros
    let valueInEuros = valueInDollar / oneEuroIs.USD;
    // Convertimos el valor a yenes
    let valueInYen = valueInEuros * oneEuroIs.JPY;
    // Retornamos el valor en yenes
    return valueInYen;

}
const fromYenToPound = function(valueInYen) {
    let jpyToGBP = oneEuroIs.GBP / oneEuroIs.JPY;
    // Convertimos el valor a british pound
    let valueInPound = valueInYen * jpyToGBP;
    // Retornamos el valor en british pound
    return valueInPound;

}
// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };






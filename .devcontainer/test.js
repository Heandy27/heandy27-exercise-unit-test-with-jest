// Importar la función sum del archivo app.js
const { sum } = require('../app');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("3.5 euro should be 3.745 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('../app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07) = 3.745 dólares,
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(expected); // 3.5 euro son 3.745 dólares.
})

test("3.5 dollar should be 511.91 Yen", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('../app.js');

    // Uso la función como debe ser usada
    const yens = fromDollarToYen(3.5);

    // Si 1 dolar son 156.5 yenes, entonces 3.5 dolares debe ser (3.5 / 1.07 * 156.5) = 511.91 yenes
    const expectedYens = 3.5 / 1.07 * 156.5;
console.log(expectedYens);

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(3.5)).toBe(expectedYens); // 3.5 dolar son 511.91 yenes
})



test("1000 yen should be 5.559 pounds", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('../app.js');

    // Uso la función como debe ser usada
    const yens = fromYenToPound(1000);

    // Si 1 yen son 0.87 pounds, entonces 1000 yenes debe ser (0.87 * 156.5 * 1000) = 5.559 pounds
    const expectedPound = 0.87 / 156.5 * 1000;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(1000)).toBe(expectedPound); // 1000 yenes son 5.559 pounds 
})


    // Сачувати у променљиве цену и пречник пице
    // Израчунати која је цена пице по цм² (пазити на то да се површина рачуна са полупречником)
    // Исписати тај резултат у конзолу

let cena = 600;
let precnik = 42;
let r = precnik / 2;
let cenaPoCm = cena / ((r ** 2) * Math.PI);
console.log('cena pice po cm je: ' + cenaPoCm);
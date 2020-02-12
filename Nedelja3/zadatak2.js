//Написати функцију која израчунава цену пице по квадратном центиметру (параметри функције су полупречник у цм, и цена пице)

function pizzaPrice(poluPrecnik, cena) {
    return (cena / ((poluPrecnik ** 2) * Math.PI));
}
app.innerHTML += `${pizzaPrice(21, 600)}`;
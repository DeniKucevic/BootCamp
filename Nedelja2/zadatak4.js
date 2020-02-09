//Исписати првих 1000 бројева дељивих са 5

let i = 0;
let brojac=0;
while (brojac < 1000)
{
    i++;
    if (i % 5 == 0) {
        console.log(i);
        brojac++;
    }
}
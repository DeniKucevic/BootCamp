// На страници постоје 2 дугмета за наручивање (као на страници пицерије, ORDER) И постоје 2 дугмета за наручивање одмах

//     1.Дугмићи за 'наручивање' повећавају бројач
//     2.Дугмићи за 'наручивање одмах' ресетују бројач на нула и исписују додатну поруку (Порука у облику: Наручили сте [X] пица, [ danasnji datum i vreme ]) Напомена: X је бројач, проверити да ли је бројач 0, и ако јесте кликом на наручивање одмах избацује одговарајућу поруку за грешку

let x = 0;
function odmah(i) {
  i = x;
  if (i == 0) {
    porukaOdmah.innerText = "GRESKA! Nemate porucenih pizza!";
  } else {
    i = x;
    var date = new Date();
    var datum = `${date.getDate()}.${
      date.getMonth() + 1
    }.${date.getFullYear()}.`;
    var vreme = date.toLocaleTimeString();
    porukaOdmah.innerText = `Porucili ste ${i} pizza! ${vreme} ${datum}`;
    x = 0;
    porukaNaruci.innerText = `Broj porucenih pizza: ${x}`;
  }
}

function narucivanje(i) {
  i = x;
  x++;
  let porukaNaruciX = document.querySelector("#porukaNaruci");
  porukaNaruci.innerText = `Broj porucenih pizza: ${x}`;
}

if ((x = 0)) {
} else {
}

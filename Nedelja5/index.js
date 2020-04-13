let forma = document.getElementById("selected-input");
let selected = document.getElementById("selected");
let amountDesc = document.getElementById("amount-desc");
let amountInput = document.getElementById("amount-input");
let incomeList = document.getElementById("list-income");
let expenseList = document.getElementById("list-expense");
let quickGlance = document.getElementById("quick-glance");
let totalIncome = [];
let totalExpense = [];
let totalAll = [];
var counter = 0;
let trenutanUnos;
let x = 0;
let y = 0;
let z = 0;

forma.addEventListener("submit", (e) => {
  e.preventDefault();
  let inc_exp = selected.value;
  if (
    amountDesc.value.trim() != "" &&
    !isNaN(amountInput.value) &&
    amountInput.value > 0
  ) {
    //provera ispravnosti unosa
    trenutanUnos = amountInput.value;
    let totalEl = {
      id: counter,
      selValue: inc_exp,
      value: parseInt(amountInput.value),
    };
    counter++;
    totalAll.push(totalEl);
    addToHtml(totalEl, amountDesc.value, amountInput.value, selected.value);
    amountDesc.value = "";
    amountInput.value = "";
  } else {
    document.querySelectorAll("input-box").style.color = "red";
    alert("Pogresan unos!");
  }
  quickGlance.innerHTML = `Ukupan prihod:${x}€,<br>Ukupan rashod:${y}€ pr:${
    (y * 100) / x
  }%<br>Raspoloziv budzet:${z}€`;
});

function addToHtml(totalElement, amountDesc, amountInput, selected) {
  //funkcija koja dodaje u html
  let btnRmv = document.createElement("button");
  let listItem = document.createElement("li");
  btnRmv.innerHTML = "X";
  btnRmv.className = "brisanje";
  listItem.className = "item-liste";
  btnRmv.addEventListener("click", () => {
    btnRmv.parentElement.remove();
    removeFromArry(totalElement);
    x = totalPrihodi(totalAll);
    y = totalRashodi(totalAll);
    z = budget();
    quickGlance.innerHTML = `Ukupan prihod:${x}€,<br>Ukupan rashod:${y}€ pr:${
      (y * 100) / x
    }%<br>Raspoloziv budzet:${z}€`;
  });
  listItem.innerHTML = `${amountDesc} =${amountInput}`;
  listItem.appendChild(btnRmv);
  if (selected == "income") {
    incomeList.appendChild(listItem);
    x = totalPrihodi(totalAll);
    console.log(x);
  } else if (selected == "expense") {
    let procenat = document.createElement("button");
    procenat.className = "procenat";
    procenat.innerHTML = `${Math.round((trenutanUnos / x) * 100)}`;
    trenutanUnos = 0;
    listItem.appendChild(procenat);
    expenseList.appendChild(listItem);
    y = totalRashodi(totalAll);
    console.log(y);
  }
  budget();
  console.log(z);
}

function totalRashodi(Arr) {
  let mapRashod = Arr.filter((element) => {
    return element.selValue == "expense";
  });
  let ukupniRashod = mapRashod.reduce((a, b) => a + b.value, 0);

  return ukupniRashod;
}

function totalPrihodi(Arr) {
  let mapPrihod = Arr.filter((element) => {
    return element.selValue == "income";
  });
  let ukupniPrihod = mapPrihod.reduce((a, b) => a + b.value, 0);

  return ukupniPrihod;
}

function budget() {
  return (z = x - y);
}

function removeFromArry(arr) {
  // totalAll.splice(arr.id, 1)
  totalAll.splice(
    totalAll.findIndex(function (i) {
      return i.id === arr.id;
    }),
    1
  );
}

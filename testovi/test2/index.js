let cars = [
  {
    id: "19UUA8F50DA160249",
    car_make: "Scion",
    car_model: "tC",
    price: 18185,
  },
  {
    id: "1GYS3AEF7DR496039",
    car_make: "Cadillac",
    car_model: "CTS",
    price: 9552,
  },
  {
    id: "2FMDK4KC0AB695258",
    car_make: "BMW",
    car_model: "525",
    price: 7216,
  },
  {
    id: "2FMDK4KC1AB495258",
    car_make: "BMW",
    car_model: "X5",
    price: 24373,
  },
  {
    id: "WAUAGAFDXEN710904",
    car_make: "Volkswagen",
    car_model: "Passat",
    price: 14950,
  },
  {
    id: "WAUDF68E55A006958",
    car_make: "BMW",
    car_model: "M3",
    price: 20307,
  },
  {
    id: "WAUDGAFL7CA205458",
    car_make: "Chevrolet",
    car_model: "Suburban 1500",
    price: 15344,
  },
  {
    id: "WAUUL58E95A401485",
    car_make: "Chevrolet",
    car_model: "Astro",
    price: 6157,
  },
  {
    id: "WAUVKAFR5AA133227",
    car_make: "Volkswagen",
    car_model: "GTI",
    price: 15589,
  },
  {
    id: "WBA3T3C5XF5402761",
    car_make: "Nissan",
    car_model: "NV2500",
    price: 12837,
  },
];

let textInput = document.querySelector("#infoInpt");
let selectedCar = document.querySelector("#selectCar");
let soldBtn = document.querySelector("#prodato");
let listContainer = document.querySelector("#item-list");
let inputCont = document.querySelector("#inputCont");
let kupacUnos = "";
let mestoIpis = document.querySelector("#olista");
let carsel = selectedCar.value;

inputCont.addEventListener("submit", (e) => {
  e.preventDefault();
  if (kupacUnos.trim() == "") {
    alert("Ne moze prazan string");
    textInput.value = "";
    return;
  }
  let datum = new Date();

  let nadjiAuto = cars.find((element) => {
    return element.id == selectedCar.value;
  });

  var liCreator = document.createElement("li");
  let btnCreator = document.createElement("button");
  btnCreator.addEventListener("click", () => {
    btnCreator.parentElement.remove();
  });
  btnCreator.innerText = "X";
  btnCreator.className = "delete-button";
  liCreator.innerHTML = `Kupac: ${kupacUnos}<br>Cena: ${
    nadjiAuto.price
  }<br>Auto: ${nadjiAuto.car_make} ${
    nadjiAuto.car_model
  }<br>${datum.getHours()}:${datum.getMinutes()}:${datum.getSeconds()}<br>${datum.getDate()}.${
    datum.getMonth() + 1
  }.${datum.getFullYear()}.<br>`;
  mestoIpis.appendChild(liCreator);
  liCreator.appendChild(btnCreator);
  textInput.value = "";
  kupacUnos = "";
});
textInput.addEventListener("input", (e) => {
  kupacUnos = e.target.value;
  // console.log(currDesc);
});

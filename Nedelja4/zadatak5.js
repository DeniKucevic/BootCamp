// 5. За дати html направити скрипту која:
// 	```
// 	    <div class="wrapper">
// 			<button id="prikaz">PRIKAZI POKEMONE</button>
// 			<button id="pobednik">PRIKAZI NAJJACEG POKEMONA</button>
// 		</div>
// 	```

// 	*На клик на дугме прикажи покемоне приказује све покемоне из низа у формату :
//     ```
// 	    <div>
//             <p>Opis pokemona</p>
//             <img src="slika odgovarajućeg pokemona">
//         </div>
//     ```

// 	*На клик на дугме прикажи најјачег покемона приказује покемона који има најјачи напад (користити већ написану функцију иѕ 4. задатка) по истом формату.

let pokemon1 = {
  ime: "Pikachu",
  vrsta: "Elektricni",
  sposobnosti: ["Staticki elektricitet"],
  karakteristike: {
    napad: 55,
    odbrana: 30,
    brzina: 90,
  },
  slika: "pikachu.png",
};

let pokemon2 = {
  ime: "Bulbasaur",
  vrsta: "Travnati",
  sposobnosti: ["Bujanje", "Hlorofil"],
  karakteristike: {
    napad: 49,
    odbrana: 49,
    brzina: 45,
  },
  slika: "bulbasaur.png",
};

let pokemon3 = {
  ime: "mew",
  vrsta: "psihicki",
  sposobnosti: ["Pritisak"],
  karakteristike: {
    napad: 100,
    odbrana: 100,
    brzina: 100,
  },
  slika: "mew.png",
};

let pokemon4 = {
  ime: "eevee",
  vrsta: "Normalni",
  sposobnosti: ["Bezanje", "Snalazljivost"],
  karakteristike: {
    napad: 55,
    odbrana: 50,
    brzina: 55,
  },
  slika: "eevee.png",
};

let sviPokemoni = [pokemon1, pokemon2, pokemon3, pokemon4];

function pokeSpos(sviPokemoni) {
  let nizSposobnosti = [];
  for (index of sviPokemoni) {
    nizSposobnosti.push(index.sposobnosti);
  }
  return `Sposobnosti svih pokemona su: ${nizSposobnosti} `;
}

sviPokemoni.sort((a, b) => {
  return a.karakteristike.brzina - b.karakteristike.brzina;
});

function najaciPokemon(x) {
  let max = 0;
  let max2;
  for (x of sviPokemoni) {
    if (x.karakteristike.napad >= max)
      (max = x.karakteristike.napad), (max2 = x);
  }
  return max2;
}

let opisPokemonaBtn = document.querySelector("#prikaz");
let pobednikBtn = document.querySelector("#pobednik");

opisPokemonaBtn.addEventListener("click", () => {
  let ispisPokemona = "";
  for (let i of sviPokemoni) {
    ispisPokemona += `<div align="center" display:"inline";><p>
        <table style="display:inline-table;"><tr><th><u>${i.ime}</u></th></tr>
        <tr><td>vrsta - ${i.vrsta}</td>
        <tr><td>sposobnosti - ${i.sposobnosti}</td></tr>
        <tr><td>napad: ${i.karakteristike.napad}</td></tr>
        <tr><td>odbrana: ${i.karakteristike.odbrana}</td></tr>
        <tr><td>brzina: ${i.karakteristike.brzina}</td></tr></table>
        <img src=${i.slika} alt="${i.ime}" height="142" width="142" align="top"><p><hr></div>`;
  }
  document.querySelector(".ispis").innerHTML = ispisPokemona;
});

pobednikBtn.addEventListener("click", () => {
  ispisNajaceg = najaciPokemon(sviPokemoni);
  document.querySelector(
    ".ispis"
  ).innerHTML = `<div align="center" display:"inline";><p>
    <table style="display:inline-table;"><tr><th><u>${ispisNajaceg.ime}</u></th></tr>
    <tr><td>vrsta - ${ispisNajaceg.vrsta}</td>
    <tr><td>sposobnosti - ${ispisNajaceg.sposobnosti}</td></tr>
    <tr><td>napad: ${ispisNajaceg.karakteristike.napad}</td></tr>
    <tr><td>odbrana: ${ispisNajaceg.karakteristike.odbrana}</td></tr>
    <tr><td>brzina: ${ispisNajaceg.karakteristike.brzina}</td></tr></table>
    <img src=${ispisNajaceg.slika} alt="${ispisNajaceg.ime}" height="142" width="142" align="top"><p><hr></div>`;
});

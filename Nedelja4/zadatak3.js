// 3. Сортирати покемоне по брзини, растуће.

let pokemon1 = {
  ime: "Pikachu",
  vrsta: "Elektricni",
  sposobnosti: ["Staticki elektricitet"],
  karakteristike: {
    napad: 55,
    odbrana: 30,
    brzina: 90,
  },
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
};

let sviPokemoni = [pokemon1, pokemon2, pokemon3, pokemon4];

sviPokemoni.sort((a, b) => {
  return a.karakteristike.brzina - b.karakteristike.brzina;
});
console.log(sviPokemoni);

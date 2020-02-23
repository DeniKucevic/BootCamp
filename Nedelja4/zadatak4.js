// 4. Направити функцију која прима низ покемона, пореди покемоне по јачини и враћа као победника оног који има највећу јачину напада.

let pokemon1 = {
    ime: 'Pikachu',
    vrsta: 'Elektricni',
    sposobnosti: ['Staticki elektricitet'],
    karakteristike: {
        napad: 55,
        odbrana: 30,
        brzina: 90
    }
};


 let pokemon2 = {
    ime: 'Bulbasaur',
    vrsta: 'Travnati',
    sposobnosti: ['Bujanje', 'Hlorofil'],
    karakteristike: {
        napad: 49,
        odbrana: 49,
        brzina: 45
    }
};


 let pokemon3 = {
    ime: 'mew',
    vrsta: 'psihicki',
    sposobnosti: ['Pritisak'],
    karakteristike: {
        napad: 100,
        odbrana: 100,
        brzina: 100
    }
};


 let pokemon4 = {
    ime: 'eevee',
    vrsta: 'Normalni',
    sposobnosti: ['Bezanje', 'Snalazljivost'],
    karakteristike: {
        napad: 55,
        odbrana: 50,
        brzina: 55
    }
};
    
let sviPokemoni = [pokemon1, pokemon2, pokemon3, pokemon4];

function najaciPokemon(x) {
    let max = 0;
    let max2;
    for (x of sviPokemoni) {
        if (x.karakteristike.napad >= max)
        max = x.karakteristike.napad, max2 = x;
    }
    return max2;
} 
console.log(najaciPokemon(sviPokemoni));
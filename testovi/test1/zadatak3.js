// Napisati program koji pronalazi dane u mesecu koji odgovaraju Cvijanu i Dusanu da odrze vrlo
// vazan sastanak. Dusan je slobodan svaki K-ti dan u mesecu, a Cvijan je slobodan svaki N-ti dan u
// mesecu. K i N su brojevi koji su veći od 0 a manji od 8.
// Dani u mesecu su dani od 1 do 31, ukljucjuci i 31.
// Primer za K=4 i N=7: 28
// Primer za K=3 i N=5 15 30
// Primer za K=2 i N=3 6 12 18 24 30
// Primer za K=5 i N=2 10 20 30
// Napomena: Izvriti proveru ulaznih podataka.

let k = 5;
let n = 2;
let od = 1;
if (k < 0 || k >= 8 || n < 0 || n >= 8) {
  console.log("ulazni podaci nisu dobri!");
} else {
  for (i = 1; i <= 31; i++) {
    if (i % k == 0 && i % n == 0) {
      console.log(i);
      od++;
    }
  }
}
if (od == 1) {
  console.log("nema odgovarajucih dana!!");
}

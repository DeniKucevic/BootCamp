// Elektrodistribuciji je potreban program za računanje potrošnje struje, pa je potrbno da napravite
// program koji računa iznos koji je potrebno da određeni korisnik plati. Ulazni parametri su:
// 1. Broj kilovata - bk
// 2. Tarifna zona - tz
// 3. Cena po kilovatu(cpk) se dobija na sledeći način:
// Ukoliko je tz=1 onda je cpk=10 dinara;
// Ukoliko je tz=2 onda je cpk=12 dinara;
// Ukoliko je tz=3 onda je cpk=16 dinara;
// Ako je za tz unesena neka druga vrednost ispisuje se poruka "GRESKA";

// Formula za izračunavanje cene potrošene struje je: cpk * bk
// Primer: Za bk=10, tz=2 sledi da je iznos racuna 120 RSD
// Napomena: Izvrsiti proveru takvu da sve ulazne vrednosti ne smeju imati negativnu vrednsot, u
// slučaju pogresnih ulaznih podataka program izbacuje poruku: GRESKA

let bk = 10;
let tz = 2;
let cpk, racun;

if (bk < 0 || cpk < 0) {
  console.log("GRESKA");
} else {
  switch (tz) {
    case 1:
      cpk = 10;
      racun = cpk * bk;
      console.log("vas racun je: " + racun + " RSD");
      break;
    case 2:
      cpk = 12;
      racun = cpk * bk;
      console.log("vas racun je: " + racun + " RSD");
      break;
    case 3:
      cpk = 16;
      racun = cpk * bk;
      console.log("vas racun je: " + racun + " RSD");
      break;
    default:
      console.log("GRESKA");
      break;
  }
}

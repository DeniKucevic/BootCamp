let w = 8;
let h = 11;
let x = "";

x = " " + "#".repeat(w - 2);
console.log(x);
for (i = 1; i <= h / 2 - 2; i++) {
  x = "#" + " ".repeat(w - 2) + "#";
  1;
  console.log(x);
}
x = " " + "#".repeat(w - 2);
console.log(x);
for (i = 1; i <= h / 2 - 1; i++) {
  x = "#" + " ".repeat(w - 2) + "#";
  console.log(x);
}
x = " " + "#".repeat(w - 2);
console.log(x);
console.log("\n");
let y = 0;
y = " " + "#".repeat(w - 2);
console.log(y);
for (i = 1; i <= h - 2; i++) {
  y = "#" + " ".repeat(w - 2) + "#";
  console.log(y);
}
y = " " + "#".repeat(w - 2);
console.log(y);

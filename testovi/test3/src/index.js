import headerI from "./components/header";
import oneShip from "./components/ship";
import selector from "./components/filter";

let app = document.getElementById("app");
let header = document.getElementById("header");
app.appendChild(header);

let headerIspis = headerI();
header.appendChild(headerIspis);

let nesto = oneShip();
app.appendChild(nesto);

let select = selector();
header.appendChild(select);

select.addEventListener("change", () => {
  const nesto2 = document.querySelectorAll("#filter");
  nesto2.forEach((Element) => {
    Element.nextElementSibling.style.display = "none";
    Element.previousElementSibling.style.display = "none";
    Element.style.display = "none";
    if (select.value === Element.innerHTML) {
      Element.nextElementSibling.style.display = "block";
      Element.previousElementSibling.style.display = "block";
      Element.style.display = "block";
      return;
    } else if (select.value === "svi") {
      Element.nextElementSibling.style.display = "block";
      Element.previousElementSibling.style.display = "block";
      Element.style.display = "block";
    }
  });
});

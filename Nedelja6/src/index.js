import LaunchList from "./components/launch_list";
import Header from "./components/header";
import optCreator from "./components/selector";

const app = document.getElementById("app");

// const header=Header()
const header = Header();
const filters = document.createElement("section");
const launch_list = LaunchList();

const footer = document.createElement("footer");

let haha = optCreator();

app.append(header, haha, filters, launch_list, footer);

const selector = document.querySelector("#selektorid");
let poruka = document.createElement("div");
poruka.id = "porukica";
app.appendChild(poruka);
selector.addEventListener("change", () => {
  //const divLaunch = document.getElementsByClassName("launch");
  const datumDiv = document.querySelectorAll("#datum");

  datumDiv.forEach((element1) => {
    element1.parentElement.parentElement.style.display = "none";
    if (selector.value == 1) {
      element1.parentElement.parentElement.style.display = "inline-block";
      poruka.style.display = "none";
    } else if (selector.value == element1.innerHTML) {
      element1.parentElement.parentElement.style.display = "inline-block";
      poruka.style.display = "none";
    } else if (selector.value == 2011) {
      poruka.innerHTML = `<h1><u>Za ${selector.value}. godinu nije bilo para.</u></h1><h1>Da se to ne bi ponovilo donirajte na ziro racun:<h1 style="color:red" align="center">160-5600101002778-84</h1><h1>Hvala!</h1>`;
      poruka.style.display = "block";
    }
  });
});

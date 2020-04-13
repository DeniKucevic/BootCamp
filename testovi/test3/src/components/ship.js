import { getShips } from "../services/services";

const oneShip = () => {
  const ships = document.createElement("div");
  ships.className = "lista";
  getShips().then((res) => {
    let data = res.data;
    console.log(data);
    data.forEach((element) => {
      let linkimg = document.createElement("a");
      linkimg.href = element.url;
      linkimg.target = "_blank";
      let img = document.createElement("img");
      img.src = element.image;
      img.style.height = "300px";
      img.style.width = "auto";
      img.alt = "slikica nema";
      linkimg.appendChild(img);
      let actbool = element.active;
      let actboolispis;
      if (actbool == true) {
        actboolispis = "Aktivan";
      } else {
        actboolispis = "Neaktivan";
      }
      let p = document.createElement("p");
      p.innerHTML = `${element.ship_name}<br>${element.ship_type}<br>${element.home_port}<hr>`;
      let pActbool = document.createElement("p");
      pActbool.id = "filter";
      pActbool.innerHTML = `${actboolispis}`;
      ships.append(linkimg, pActbool, p);
    });
  });
  return ships;
};
export default oneShip;

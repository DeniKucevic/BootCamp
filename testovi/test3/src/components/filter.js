const selector = () => {
  let divhold = document.createElement("div");
  let selector = document.createElement("select");
  let option3 = document.createElement("option");
  option3.value = "svi";
  option3.innerHTML = "Svi";
  selector.appendChild(option3);
  let option1 = document.createElement("option");
  option1.value = "Aktivan";
  option1.innerHTML = "Aktivan";
  selector.appendChild(option1);
  let option2 = document.createElement("option");
  option2.value = "Neaktivan";
  option2.innerHTML = "ne aktivan";
  selector.appendChild(option2);
  divhold.appendChild(selector);
  return selector;
};
export default selector;

let date = new Date();

const selector = document.createElement("select");
selector.setAttribute("id", "selektorid");
const op1 = document.createElement("option");
op1.value = 1;
op1.innerHTML = `filtrirajte letove po godini:`;
selector.appendChild(op1);
const optCreator = () => {
  for (let i = 2006; i <= date.getFullYear(); i++) {
    const option = document.createElement("option");
    option.value = `${i}`;
    option.innerHTML = `${i}`;
    selector.appendChild(option);
  }
  return selector;
};

export default optCreator;

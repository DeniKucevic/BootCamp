import { companyInfoAx } from "../services/services";

const headerI = () => {
  const headHolder = document.createElement("div");
  headHolder.className = "headHolder";
  companyInfoAx().then((info) => {
    let p = document.createElement("p");
    info = info.data;
    let { name, founder, founded } = info;
    const title = document.createElement("h1");
    title.innerHTML = name;
    p.innerHTML = `Osnivac: ${founder}<br>Godina osnivanja: ${founded}<br><hr><hr>`;
    headHolder.append(title, p);
  });
  return headHolder;
};
export default headerI;

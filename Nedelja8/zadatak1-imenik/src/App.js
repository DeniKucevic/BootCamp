import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [filtrirani, setFiltrirani] = useState([]);
  const [greska, setGreska] = useState("");
  const replace = (index) => {
    let niz = [...users];
    niz[index].number = number;
    setUsers(niz);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || number === "") {
      return setGreska("Popunite sva polja!");
    }
    if (!number.startsWith("+")) {
      return setGreska("Broj mora biti unet u formatu +XXX XXXXXXXXX");
    }
    {
      let index = users.findIndex((user) => user.name === name);
      if (index !== -1) {
        if (window.confirm("Корисник постоји...Замени број")) {
          replace(index);
          setGreska("");
        }
      } else {
        setUsers([...users, { name, number }]);
        setGreska("");
      }
    }
    e.target.reset();
  };
  const Filter = (e) => {
    let filtrirani = users.filter((user) => user.name.includes(e.target.value));
    setFiltrirani(filtrirani);
  };
  return (
    <div className="sve">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Unesite ime i prezime"
          onInput={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Unesite broj telefona"
          onInput={(e) => setNumber(e.target.value)}
          title="Molimo unesite telefon u formatu +XXXXXXXX"
        />
        <input type="submit" value="Unesi!" />
        <input type="text" placeholder="Pretrazi..." onChange={Filter}></input>
      </form>
      <div className="greska">{`${greska}`}</div>
      <div className="svikontakti">
        <div className="contacts">
          {users.map((user) => (
            <div className="one-contact">
              <p>{user.name}</p>
              <p>{user.number}</p>
              <hr />
            </div>
          ))}
        </div>
        <div className="Filtrirani">
          {filtrirani.map((user) => (
            <>
              <p>{user.name}</p>
              <p>{user.number}</p>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

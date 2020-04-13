import React, { useState, useEffect } from "react";
import "./App.css";
import EmployeeList from "./Components/Employee_list";
import { getAllEmployers, putNewEmployee } from "./Dummy_Api_Services/service";

function App() {
  const [workers, setWorkers] = useState([]);
  const [inputWorker, setInputWorker] = useState("");
  const [inputSalary, setInputSalary] = useState("");
  const [workerAge, setWorkerAge] = useState("");
  const [perPage, setPerPage] = useState(5);
  const [page, setPage] = useState(0);

  useEffect(() => {
    getAllEmployers().then((res) => {
      setWorkers(res.data.data);
    });
  }, []);

  const pageNumber = () => (workers.length - 1) / perPage;

  const pages = (pageNumber) => {
    let pages = [];
    for (let i = 0; i < pageNumber; i++) {
      pages.push(i);
    }
    return pages;
  };

  const setingSelector = (e) => {
    setPerPage(e.target.value);
    console.log(perPage);
  };

  const handleWorker = () => {};

  const handleInput1 = (e) => {
    setInputWorker(e.target.value);
  };

  const handleInput2 = (e) => {
    setInputSalary(e.target.value);
  };

  const handleInput3 = (e) => {
    setWorkerAge(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputWorker === "" || inputSalary === "") {
      alert("unesite sva polja!");
    } else {
      putNewEmployee(inputWorker, inputSalary, workerAge).then((res) =>
        alert("Uspesno ste dodali radnika: " + res.data.data.name)
      );
    }
  };

  return (
    <div className="App">
      <div id="wrapper">
        <div id="wrkrsprpage">
          <h3>Odaberite broj radnika po stranici</h3>
          <select
            onChange={(e) => {
              setingSelector(e);
              handleWorker();
            }}
          >
            <option>5</option>
            <option>10</option>
            <option>20</option>
          </select>
          <div id="new-worker">
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                type="text"
                placeholder="Unesite radnika"
                onChange={(e) => handleInput1(e)}
              ></input>
              <input
                type="text"
                placeholder="Unesite godine"
                onChange={(e) => handleInput3(e)}
              ></input>
              <input
                type="number"
                placeholder="Unesite platu"
                onChange={(e) => handleInput2(e)}
              ></input>
              <input type="submit" value="Unesi"></input>
            </form>
          </div>
          <div id="pages"></div>
        </div>
        <hr></hr>
        <hr></hr>
        <div id="workers-container">
          <EmployeeList workers={workers} page={page} perPage={perPage} />
        </div>
        <div>
          {pages(pageNumber()).map((page) => (
            <button
              onClick={() => {
                setPage(page);
              }}
              key={page}
            >
              {page + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

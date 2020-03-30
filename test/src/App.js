import React, { useState, useEffect } from 'react';
import './App.css';
import EmployeeList from './Components/Employee_list';
import {getAllEmployers, putNewEmployee} from './Dummy_Api_Services/service';
import Pages from './Components/Page';

function App() {

  const [workers2, setWorkers] = useState([])
  const [pomocni, setPomocni] = useState([])
  let wrk = 10
  const [inputWorker, setInputWorker] = useState('')
  const [inputSalary, setInputSalary] = useState('')
  const [workerAge, setWorkerAge] = useState('')
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  
  useEffect(() => {
    getAllEmployers().then(res => {
      setWorkers(res.data.data);
      setPomocni(res.data.data);
      setPages(getPages(res.data.data))
    })
  }, [])

  const getPages=(arr, bug)=>{
    return bug?Math.ceil(arr.length/bug):Math.ceil(arr.length/amount);
  }

  const setingSelector = (e) => {
     wrk=e.target.value
  }

  const handleWorker = () => {
    setWorkers(pomocni.slice(0, wrk))
  }

  const handleInput1 = (e) => {
    setInputWorker(e.target.value)
    console.log(inputWorker)
  }

  const handleInput2 = (e) => {
    setInputSalary(e.target.value)
  }

  const handleInput3 = (e) => {
    setWorkerAge(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputWorker === '' || inputSalary === '') {
      alert("unesite oba polja!")
    } else {
      putNewEmployee(inputWorker,inputSalary, workerAge).then(res => console.log(res))
    }
  }

  

  const changePage = (e) => {
   setPage(e.target.value);
  }

  return (
    <div className="App">
      <div id='wrapper'>
        <div id='wrkrsprpage'>
          <h3>Odaberite broj radnika po stranici</h3>
          <select onChange={(e) => { setingSelector(e); handleWorker(); }}>
                <option>10</option>
                <option>20</option>
                <option>40</option>
          </select>
          <div id='new-worker'>
            <form onSubmit={e => (handleSubmit(e))}>
              <input type='text' placeholder='Unesite radnika' onChange={e => (handleInput1(e))}></input>
              <input type='text' placeholder='Unesite godine' onChange={e => (handleInput3(e)) }></input>
              <input type='number' placeholder='Unesite platu' onChange={e => (handleInput2(e))}></input>
              <input type='submit' value='Unesi'></input>
            </form>
          </div>
          <div id='pages'>
            <Pages changePage={changePage} numOfPages={pages}/>
          </div>
        </div>
        <div id='workers-container'>
        {workers2.slice(((page-1)*amount),(page*amount)).map(el=><EmployeeList employee = {el} key = {el.id}/>)}
        </div>
      </div>
    </div>
  );
}

export default App;

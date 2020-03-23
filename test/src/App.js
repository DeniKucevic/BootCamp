import React, { useState, useEffect } from 'react';
import './App.css';
import EmployeeList from './Components/Employee_list';
import {getAllEmployers, putNewEmployee} from './Dummy_Api_Services/service';

function App() {

  const [workers2, setWorkers] = useState([])
  const [pomocni, setPomocni] = useState([])
  const [selector, setSelector] = useState(10)
  const [inputWorker, setInputWorker] = useState('')
  const [inputSalary, setInputSalary] = useState('')
  const [workerAge,setWorkerAge] = useState('')
  
  useEffect(() => {
    getAllEmployers().then(res => {
      setWorkers(res.data.data);
      setPomocni(res.data.data)
    })
  }, [])

  const setingSelector = (e) => {
    setSelector(e.target.value)
    console.log(e.target.value);
    
  }

  const handleInput1 = (e) => {
    setInputWorker(e.target.value)
    console.log(inputWorker);
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

  const handleWorkers = () => {
    setWorkers(pomocni.slice(0, selector))
  }

  return (
    <div className="App">
      <div id='wrapper'>
        <div id='wrkrsprpage'>
          <h3>Odaberite broj radnika po stranici</h3>
          <select onChange={(e) => { setingSelector(e); handleWorkers() }}>
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
        </div>
          <div id='workers-container'>
          <EmployeeList workers={workers2} />
        </div>
      </div>
    </div>
  );
}

export default App;

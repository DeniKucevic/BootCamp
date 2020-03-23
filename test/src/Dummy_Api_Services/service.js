import axios from 'axios'

const BaseURL=`http://dummy.restapiexample.com/api/v1/`

 const getAllEmployers = () => {
    return axios.get(`${BaseURL}employees`)
}

 const putNewEmployee = (name,salary,age) => {
    return axios.post(`${BaseURL}create`, {name,salary,age})
}

export { getAllEmployers, putNewEmployee }
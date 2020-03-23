import React from 'react'
import Employee from './Employee'

const EmployeeList = ({ workers }) => {
    
    return (
        <div>
            {workers.map(el => <Employee oneworker = {el} />)}
        </div>
    )
}

export default EmployeeList
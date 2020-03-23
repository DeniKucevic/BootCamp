import React from 'react'

const Employee = ({oneworker}) => {
    
    let { id, employee_name, employee_salary, employee_age } = oneworker;

    return (
        <div className='worker'>
            <p>{id}</p>
            <p>{employee_name}</p>
            <p>{employee_age}</p>
            <p>{employee_salary}</p>
            <hr></hr>
        </div>
    )
}

export default Employee
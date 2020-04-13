import React from "react";

const Employee = ({ oneworker }) => {
  let { id, employee_name, employee_salary, employee_age } = oneworker;

  return (
      <div className="worker">
      <p>ID radnika: {id}</p>
      <p>Ime: {employee_name}</p>
      <p>Starost: {employee_age}</p>
      <p>Plata: {employee_salary}</p>
      <hr></hr>
    </div>
  );
};

export default Employee;

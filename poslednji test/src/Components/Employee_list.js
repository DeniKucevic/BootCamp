import React from "react";
import Employee from "./Employee";

const EmployeeList = ({ workers, page, perPage }) => {
  return (
    <div>
      {workers.slice(page * perPage, (page + 1) * perPage).map((el) => (
        <Employee oneworker={el} key={el.id} />
      ))}
    </div>
  );
};

export default EmployeeList;

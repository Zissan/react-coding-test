import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

function Employee({ firstName, lastName, city, id, ...restProps }) {
  return (
    <div className="row">
      <div className="col s12 m3">{firstName}</div>
      <div className="col s12 m3">{lastName}</div>
      <div className="col s12 m3">{city}</div>
      <div className="col s12 m1">
        <button
          className="btn btn-block green"
          onClick={() => {
            restProps.onUpdate(id);
          }}
        >
          Update
        </button>
      </div>
      <div className="col s12 m1">
        <button
          className="btn btn-block red"
          onClick={() => {
            restProps.onDelete(id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

const EmployeeList = ({ history }) => {
  const [employees, loadEmployees] = useState([]);

  useEffect(() => {
    let response = localStorage.getItem("employees");

    if (response) {
      const emps = JSON.parse(response);
      if (emps.length) {
        loadEmployees([...emps]);
      }
    }
  }, []);

  const handleUpdate = id => {
    history.push(`/update/${id}`);
  };

  const handleDelete = id => {
    const emps = employees.filter(emp => emp.id !== id);
    loadEmployees(emps);
    localStorage.setItem("employees", JSON.stringify(emps));
  };

  return (
    <>
      <h4>Employee's</h4>
      <div className="row">
        <div className="col s12 m3">
          <label className="show-on-small ">First Name</label>
        </div>
        <div className="col s12 m3">
          <label className="show-on-small ">Last Name</label>
        </div>
        <div className="col s12 m3">
          <label className="show-on-small ">City</label>
        </div>
        <div className="col s12 m2">Actions</div>
      </div>
      {employees.map(emp => {
        return (
          <Employee
            key={emp.id}
            {...emp}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        );
      })}
    </>
  );
};

export default withRouter(EmployeeList);

import React, { useState, useEffect, useRef } from "react";
import CreateEmployee from "./CreateEmployee";

const ManageEmployee = ({ history, match }) => {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    city: ""
  });

  useEffect(() => {
    const { id } = match.params;
    if (id) {
      const response = localStorage.getItem("employees");
      if (response) {
        const emps = JSON.parse(response);
        const emp = emps.find(emp => emp.id === parseInt(id));
        if (emp) {
          const { id, ...rest } = emp;
          setEmployee({ ...rest });
        }
      }
    }
  }, [match.params]);

  const [errors, setErrors] = useState({});

  const validateEmployee = () => {
    let err = {};

    for (const key in employee) {
      if (!employee[key]) {
        err[key] = "Please enter";
      }
    }
    setErrors({ ...err });
  };

  const handleChange = ({ target }) => {
    setEmployee({
      ...employee,
      [target.name]: target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    validateEmployee();
    if (Object.keys(errors).length) {
      return;
    }

    let employees = [];
    if (localStorage.getItem("employees")) {
      employees = JSON.parse(localStorage.getItem("employees"));
    }

    employees = [...employees, { ...employee, id: employees.length + 1 }];
    localStorage.setItem("employees", JSON.stringify(employees));
    if (history) {
      history.push("/");
    }
  };

  return (
    <CreateEmployee
      onChange={handleChange}
      onSubmit={handleSubmit}
      errors={errors}
    />
  );
};

export default ManageEmployee;

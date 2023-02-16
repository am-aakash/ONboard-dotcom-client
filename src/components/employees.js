import React, { useContext } from "react"
import employeesContext from "../context/employees/employeesContext"
import EmployeeItem from "./employeeItem"

const Employees = () => {
  const context = useContext(employeesContext)
  const { employees } = context
  return (
    <div className="row my-3" style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "20vh",
      }}>
      <h4>List of Employees</h4>
      <div className="container mx-2">
        {employees.length === 0 && "No employees to display"}
      </div>
      {employees.map((employee) => {
        return <EmployeeItem employee={employee} />
      })}
    </div>
  )
}

export default Employees

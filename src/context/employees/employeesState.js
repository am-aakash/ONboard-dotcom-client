import { useState } from "react"
import EmployeeContext from "./employeesContext"

const EmployeeState = (props) => {
    const host = "http://localhost:4444"
    const employeeInitial = []
    const [employees, setEmployees] = useState(EmployeesInitial)

    // Get all Employees
    const getEmployees = async () => {
        // API Call
        const response = await fetch(`${host}/employee/fetch-employees`, {
            method: "GET",
            headers: {
                // "auth-token": ""
            },
            body: {
                company_id: "12",
                page_no: 1,
            },
        })
        const json = await response.json()
        setEmployees(json)
        console.log(json)
    }

    return (
        <EmployeeContext.Provider
            value={{
                employees,
                getEmployees,
            }}
        >
            {props.children}
        </EmployeeContext.Provider>
    )
}
export default EmployeeState

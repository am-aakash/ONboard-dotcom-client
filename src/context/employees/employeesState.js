import { useState } from "react"
import EmployeeContext from "./employeesContext"

const EmployeeState = (props) => {
    const host = "http://localhost:4444"
    const employeeInitial = []
    const [employees, setEmployees] = useState(EmployeesInitial)

    // Get all Employees
    const getEmployees = async () => {
        // API Call
        const response = await fetch(`${host}/api/employees/fetchallEmployees`, {
            method: "GET",
            headers: {
                // "auth-token":
                //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q",
            },
            body: {
                company_id: "12",
                page_no: 1,
            },
        })
        const json = await response.json()
        setEmployees(json)
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

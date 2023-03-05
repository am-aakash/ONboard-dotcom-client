import { useState } from "react"
import EmployeeContext from "./employeesContext"

const EmployeeState = (props) => {
    const host = "http://localhost:4444"
    const employeeInitial = [
            {
                id: "be5bda09-40f9-4220-a1a2-e67b187e0252",
                name: "Test2 Name",
                role: "Software developer",
                date_of_joining: "NA",
                phone: "NA",
                email: "test@email.com",
                password: "12345678",
                employee_id: "NA",
                company_id: "12",
                team: "NA",
                status: "NA",
                createdAt: "2023-02-16T10:01:19.631Z",
                updatedAt: "2023-02-16T10:01:19.631Z",
            },
            {
                id: "b2aed665-2ea7-4cdc-a424-35e1e036878d",
                name: "Test Name",
                role: "Software developer",
                date_of_joining: "NA",
                phone: "NA",
                email: "test1@email.com",
                password: "12345678",
                employee_id: "NA",
                company_id: "12",
                team: "NA",
                status: "NA",
                createdAt: "2023-02-16T10:01:25.092Z",
                updatedAt: "2023-02-16T10:01:25.092Z",
            },
            {
                id: "edd1adc8-1158-4a35-b6c1-2e4d386f368d",
                name: "Test Name",
                role: "Software developer",
                date_of_joining: "NA",
                phone: "NA",
                email: "test4@email.com",
                password: "12345678",
                employee_id: "NA",
                company_id: "12",
                team: "NA",
                status: "NA",
                createdAt: "2023-02-16T10:01:40.481Z",
                updatedAt: "2023-02-16T10:01:40.481Z",
            },
            {
                id: "8ea8865b-15ab-4e04-902a-44b87cfaa3a4",
                name: "Test Name",
                role: "Software developer",
                date_of_joining: "NA",
                phone: "NA",
                email: "test5@email.com",
                password: "12345678",
                employee_id: "NA",
                company_id: "12",
                team: "NA",
                status: "NA",
                createdAt: "2023-02-16T10:01:44.802Z",
                updatedAt: "2023-02-16T10:01:44.802Z",
            },
            {
                id: "6dc1069b-5a56-4f44-98b8-90c8e5f50856",
                name: "Test Name",
                role: "Software developer",
                date_of_joining: "NA",
                phone: "NA",
                email: "test6@email.com",
                password: "12345678",
                employee_id: "NA",
                company_id: "12",
                team: "NA",
                status: "NA",
                createdAt: "2023-02-16T10:01:48.878Z",
                updatedAt: "2023-02-16T10:01:48.878Z",
            },
            {
                id: "c91b77b7-cae0-4f25-9f1a-e4c820eca849",
                name: "Test Name",
                role: "Software developer",
                date_of_joining: "NA",
                phone: "NA",
                email: "test7@email.com",
                password: "12345678",
                employee_id: "NA",
                company_id: "12",
                team: "NA",
                status: "NA",
                createdAt: "2023-02-16T10:01:52.741Z",
                updatedAt: "2023-02-16T10:01:52.741Z",
            },
        
    ]
    const [employees, setEmployees] = useState(employeeInitial)

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

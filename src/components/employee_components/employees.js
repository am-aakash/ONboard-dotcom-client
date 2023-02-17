import React, { useContext } from "react"
import employeesContext from "../../context/employees/employeesContext"
import EmployeeItem from "./employeeItem"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { IoIosSwitch } from "react-icons/io";
import { AiOutlineUserAdd } from "react-icons/ai";

const Employees = () => {
    const context = useContext(employeesContext)
    const { employees } = context
    // const [keyword, setKeyword] = useState("");
    // const onChange = (e) => {
    //     setKeyword(e)
    // }
    return (
        <div className="row my-3" style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <div className="row mb-3" style={{ marginBottom: '0rem' }}>
                <div className="col"><h5 style={{ fontWeight: '600' }}>List of Employees</h5></div>
                <div className="col">
                    <div className="row mb-3">
                        <div className="col">
                            <Form className="d-flex" style={{ width: '18rem' }}>
                                <Form.Control
                                    type="search"
                                    placeholder="Search for keyword"
                                    className="me-2"
                                    aria-label="Search"
                                // onChange={onChange}
                                />
                                <Button variant="success">Search</Button>
                            </Form>
                        </div>
                        <div className="col">
                            <Button variant="dark" style={{ width: '6rem' }}> <IoIosSwitch style={{ marginBottom: '0.3rem' }} /> Filter</Button>
                        </div>
                        <div className="col">
                            <Button variant="dark" style={{ width: '12rem' }}> <AiOutlineUserAdd style={{ marginBottom: '0.3rem' }} /> Add new employee</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '0.5rem' }}>
                {employees.length === 0 && <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "30vh",
                }}><h6>No employees to display</h6></div>}
            </div>
            <div className="listheading row mb-3">
                <div className="col" style={{ marginLeft: '2.8rem' }}>Name</div>
                <div className="col-4" >Status</div>
                <div className="col" style={{ marginRight: '3.7rem' }}>Joining Date</div>
                <div className="col" style={{ marginRight: '2.5rem' }}>Team</div>
            </div>
            <hr
                style={{
                    color: 'rgb(182, 182, 182)',
                    height: 2
                }}
            />
            {employees.map((employee) => {
                return <EmployeeItem employee={employee} />
            })}
            <div style={{
                height: "5vh",
            }}></div>
        </div>
    )
}

export default Employees

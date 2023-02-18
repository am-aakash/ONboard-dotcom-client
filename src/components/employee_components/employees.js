import React, { useContext } from "react"
import employeesContext from "../../context/employees/employeesContext"
import EmployeeItem from "./employeeItem"
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';
import { IoIosSwitch } from "react-icons/io";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";

const Employees = () => {
    const context = useContext(employeesContext)
    const { employees } = context
    let size = employees.length;
    let pages = [], i = 1;
    while (size > 0) {
        pages[i - 1] = i;
        size--;
        i++;
    }
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
            <div className="row mb-3" style={{ marginBottom: '0rem',  marginTop: '3.4rem' }}>
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
                                <Button variant="secondary"><BiSearchAlt style={{ marginBottom: '0.3rem', scale: '1.4' }} /></Button>
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
            <div style={{ marginTop: '0rem' }}>
                {employees.length === 0 && <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "30vh",
                }}><h5 style={{ fontWeight: '500' }}>No employees to display</h5></div>}
            </div>
            {employees.map((employee) => {
                return <EmployeeItem employee={employee} />
            })}
            <ButtonToolbar aria-label="Pages Toolbar" style={{
                marginTop: "1rem",
                marginBottom: "1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                {pages.map((page) => {
                    return <ButtonGroup>
                        <Button style={{ marginRight: "1rem", paddingLeft: '0.9rem', paddingRight: '0.9rem' }}>{page}</Button>
                    </ButtonGroup>
                })}
            </ButtonToolbar>
        </div>
    )
}

export default Employees

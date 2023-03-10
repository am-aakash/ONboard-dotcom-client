import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navigate, Outlet } from "react-router-dom";
import { Navbar } from "./components/navbar"
import { Home } from "./components/employee_components/home"
import { About } from "./components/about"
import { Company } from "./components/company"
import Alert from "./components/helper/alert"
import Login from "./components/auth_components/login"
import EmployeeState from "./context/employees/employeesState"
import EmployeeDetails from "./components/employee_components/employee_details/employeeDetails"
import AddEmployee from "./components/employee_components/addEmployee"
import Footer from "./components/helper/footer"

function App() {
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }
  return (
    <>
      <EmployeeState>
        <Router>
          {localStorage.getItem('token') && <Navbar showAlert={showAlert} />}
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route exact path="/" element={(localStorage.getItem('user-type') === '3') ?
                <EmployeeDetails showAlert={showAlert} /> :
                <Home showAlert={showAlert} />
              } />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/company" element={<Company />} />
              <Route exact path="/add-employee" element={<AddEmployee />} />
              <Route exact path="/employee" element={<EmployeeDetails />} />

              <Route element={<ProtectedRoutes auth={localStorage.getItem('token') === null} />}>
                <Route exact path="/login"
                  element={localStorage.getItem('token') === null ? <Login showAlert={showAlert} /> : <Home showAlert={showAlert} />}
                />
              </Route>
            </Routes>
          </div>
          {localStorage.getItem('token') && <Footer />}
        </Router>
      </EmployeeState>
    </>
  )
}

const ProtectedRoutes = ({ auth }) => {
  return (auth === true ? <Outlet /> : <Navigate to="/" replace />)
}

export default App

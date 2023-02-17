import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { Navbar } from "./components/navbar"
import { Home } from "./components/home"
import { About } from "./components/about"
import { Company } from "./components/company"
import Alert from "./components/alert"
import Login from "./components/login"
import EmployeeState from "./context/employees/employeesState"

function App() {
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 2500)
  }
  return (
    <>
      <EmployeeState>
        <Router>
          <Navbar />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />

              <Route exact path="/About" element={<About />} />
              <Route exact path="/Company" element={<Company />} />
              <Route exact path="/Login" element={<Login showAlert={showAlert}/>} />
            </Routes>
          </div>
        </Router>
      </EmployeeState>
    </>
  )
}

export default App

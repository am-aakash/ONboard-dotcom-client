import "./App.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { Navbar } from "./components/navbar"
import { Home } from "./components/home"
import { About } from "./components/about"
import { Company } from "./components/company"
import Login from "./components/login"
import EmployeeState from "./context/employees/employeesState"

function App() {
  return (
    <>
      <EmployeeState>
        <Router>
          <Navbar />
          {/* <Alert message="This is amazing React course" /> */}
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />

              <Route exact path="/About" element={<About />} />
              <Route exact path="/Company" element={<Company />} />
              <Route exact path="/Login" element={<Login />} />
            </Routes>
          </div>
        </Router>
      </EmployeeState>
    </>
  )
}

export default App

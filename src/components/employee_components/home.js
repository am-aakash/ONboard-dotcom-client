import React from "react"
import Login from "../auth_components/login"
import Employees from "./employees"

export const Home = (props) => {
  return (
    <div>
      {localStorage.getItem('token')? <Employees showAlert={props.showAlert}/>: <Login showAlert={props.showAlert}/>}
    </div>
  )
}

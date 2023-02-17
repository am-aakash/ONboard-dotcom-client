import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Dropdown from 'react-bootstrap/Dropdown';
import image from "../../assets/login-bg.jpg"

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  const [value, setValue] = useState("0"); // for dropdown
  const dropdownList = ["User Type", "Company Manager/HR", "ONboard Admin", "Employee"]

  let navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    if(value === '0'){
      props.showAlert("Select User Type", "Danger")
    }
    const response = await fetch("http://localhost:4444/auth/login-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
        type: value,
      }),
    })
    const responseJson = await response.json()
    let token, userData
    console.log(responseJson)
    if (responseJson.status === "success") {
      token = responseJson.data.token.accessToken
      userData = responseJson.data.user
      localStorage.setItem("token", token)
      localStorage.setItem("user-type", userData.type)
      localStorage.setItem("company-id", userData.company_id)
      props.showAlert(responseJson.message, responseJson.status)
      navigate("/")
    } else {
      props.showAlert(responseJson.message, "danger")
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSelect = (e) => {
    console.log(e);
    setValue(e)
  }

  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <div className="Auth-form-container">
          <form className="Auth-form" onSubmit={handleSubmit}>
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Log In</h3>
              <div className="text-center">
                New to ONboard? <a style={{ marginLeft: '.1rem' }} href="\">Request Callback</a>
              </div>
              <div className="form-group mt-3">
                <label>Email</label>
                <input
                  type="email"
                  value={credentials.email}
                  onChange={onChange}
                  name="email"
                  id="email"
                  aria-describedby="emailHelp"
                  className="form-control mt-1"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  value={credentials.password}
                  onChange={onChange}
                  name="password"
                  id="password"
                  minLength={8}
                  required
                />
              </div>
              <div className="form-group mt-3" style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                <label>Login to ONboard as</label>
                <Dropdown style={{ marginLeft: '.6rem', boxShadow: 'rgba(102, 74, 74, 0.16) 1px 0px 10px', borderRadius: '8px' }}  onSelect={handleSelect} >
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic" >
                    {dropdownList[value]}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="1">Company Manager/HR</Dropdown.Item>
                    <Dropdown.Item eventKey="2">ONboard Admin</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Employee</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
              <p className="text-center mt-2">
                <a href="\">Forgot password?</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login

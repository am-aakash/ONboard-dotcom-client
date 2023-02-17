import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:4444/auth/login-user", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password, type: 1 })
        });
        const responseJson = await response.json()
        let token, userData 
        console.log(responseJson)
        if (responseJson.status == 'success') {
            token = responseJson.data.token.accessToken
            userData = responseJson.data.user
            localStorage.setItem('token', token);
            localStorage.setItem('user-type', userData.type);
            localStorage.setItem('company-id', userData.company_id);
            props.showAlert(responseJson.message, responseJson.status)
            navigate("/");
        }
        else {
            props.showAlert(responseJson.message, "danger")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div style={{ padding: 40, margin: 120 }}>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} name="email" id="email" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" minLength={8} required />
                </div>
                <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Login
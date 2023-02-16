import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom'

const Login = () => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    // let history = useHistory();
    const handleSubmit = async (e) => {
        e.preventDefault();
        // const response = await fetch("http://localhost:4444/auth/login-user", {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ email: credentials.email, password: credentials.password, type: 1 })
        // });
        const response = await fetch("http://localhost:4444/auth/user-list", {
            mode: 'no-cors',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const json = await response.json()
        console.log(json);
        // if (json.success) {
        //     // localStorage.setItem('token', json.authtoken);
        //     history.push("/");
        // }
        // else {
        //     alert("Invalid credentials");
        // }
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
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                </div>
                <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Login
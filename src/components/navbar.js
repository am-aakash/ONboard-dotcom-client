import React from "react"
import { Link, useLocation } from "react-router-dom"
import { useNavigate } from 'react-router-dom'

export const Navbar = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    const handleLogout = async (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        localStorage.removeItem('user-type');
        localStorage.removeItem('company-id');
        props.showAlert("Logged out", "success")
        navigate("./Login")
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="./">
                    Onboard.com
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {localStorage.getItem('token')? <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/Company" ? "active" : ""}`} aria-current="page" to="./Company">
                                Company
                            </Link>
                        </li> :""}
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/About" ? "active" : ""}`} to="./About">
                                About
                            </Link>
                        </li>
                    </ul>
                    {localStorage.getItem('token')? <button onClick={handleLogout} className="btn btn-primary"> Logout </button> : ""}
                </div>
            </div>
        </nav>
    )
}

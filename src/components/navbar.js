import React from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { FaBox } from "react-icons/fa";

export const Navbar = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    const handleLogout = async (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        localStorage.removeItem('user-type');
        localStorage.removeItem('company-id');
        props.showAlert("Logged out", "success")
        navigate("./login")
    }
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark ">
            <div className="container-fluid">
                <Link className="navbar-brand" to="./">
                    <FaBox style={{ marginBottom: '0.3rem', marginLeft: '2rem', marginRight: '0.2rem' }} /> Onboard.com
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
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/company" ? "active" : ""}`} aria-current="page" to="./Company">
                                Company
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="./About">
                                About
                            </Link>
                        </li>
                    </ul>
                    <button onClick={handleLogout} className="btn btn-primary" style={{ marginRight: '2rem' }}> Logout </button>
                </div>
            </div>
        </nav>
    )
}

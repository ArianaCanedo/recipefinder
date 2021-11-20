import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import image from "../MagicLamp.png"

export default function NavBar() {
  const auth = useAuth();
  const navigate = useNavigate();
  const logout = () => {
    auth.signout(() => navigate("/login"));
  };

  return (
    <div className="navbar navbar-expand-sm navbar-dark bg-dark mb-5 p-3 sticky">
        <div className="container-fluid"></div>
            <a className="navbar-brand" href="#">
                <img className="logo-img" src={image}/> Recipe Finder
            </a>
            <div className="collapse" id="navbarToggleExternalContent">
            <div className="bg-dark p-4">
              <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    {!auth.isLoggedIn && (
                    <Link to="/register" className="nav-link">
                    Register
                    </Link>
                    )}

                    {!auth.isLoggedIn && (
                    <Link to="/login" className="nav-link">
                    Login
                    </Link>
                    )}

                    {auth.isLoggedIn && (
                    <Link to="/profile" className="nav-link">
                    Profile
                    </Link>
                    )}

                    {auth.isLoggedIn && (
                    <button onClick={logout} className="nav-link btn btn-primary">
                    Logout
                    </button>
                    )}
                </li>
                </ul>
            </div>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    {!auth.isLoggedIn && (
                    <Link to="/register" className="nav-link">
                    Register
                    </Link>
                    )}
                </li>
                 <li className="nav-item">
                    {!auth.isLoggedIn && (
                    <Link to="/login" className="nav-link">
                    Login
                    </Link>
                    )}
                </li>

                <li className="nav-item">
                    {auth.isLoggedIn && (
                    <Link to="/profile" className="nav-link">
                    Profile
                    </Link>
                    )}
                </li>
                <li className="nav-item">
                    {auth.isLoggedIn && (
                    <button onClick={logout} className="nav-link btn btn-primary">
                    Logout
                    </button>
                    )}
                </li>
            </ul>
        </div>
    
    </div>
  );
}
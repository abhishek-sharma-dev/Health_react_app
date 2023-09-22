import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { removeJwtTokenFromCookie } from "../utils";


export const Navbar = ({ isAuthenticated }) => {
  const logoutHandler = () => {
    removeJwtTokenFromCookie()
  };
  
  return (
    <>
      <nav className="navbar-container navbar navbar-expand-lg navbar-dark bg-primary bg-body-tertiary">
        <div className="container-fluid">
          {
            <NavLink to="/">
              <img src="./image/logo.png" alt="logo" className="logo" />
            </NavLink>
          }
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
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/Service">
                  Service
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/contact">
                  Contact us
                </NavLink>
              </li>
              <li className="nav-item">
                {isAuthenticated ? (
                  <NavLink
                    className="nav-link"
                    id="logout-btn"
                    to="/login"
                    onClick={logoutHandler}
                  >
                    Logout
                  </NavLink>
                ) : (
                  <NavLink className="nav-link" id="logout-btn" to="/login">
                    Login
                  </NavLink>
                )}
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  id="logout-btn"
                  to="/RegistrationForm"
                >
                  Register
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink
                  className="nav-link"
                  id="logout-btn"
                  to="/DoctorRegistration"
                >
                  DoctorRegistration
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

import React from 'react'
import './BottomNavbar.css'
// import { NavLink } from 'react-router-dom';

export const BottomNavbar = () => {

  return (
    <>
      <nav className="bottomNavbar navbar-expand-lg bg-body-tertiary">
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mx-2">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                style={{ textTransform: "uppercase" }}
                href="/Disease"
                aria-expanded="false"
              >
                Disease
              </a>
            </li>
          </ul>

        
          <ul className="navbar-nav mx-2">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                style={{ textTransform: "uppercase" }}
                href="/MedicalStores"
                aria-expanded="false"
            
              >
                medical stores
              </a>
            </li>
          </ul>

          <ul className="navbar-nav mx-2">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                style={{ textTransform: "uppercase" }}
                href="/GenericMedical"
                aria-expanded="false"
              >
                Generic Medical
              </a>
            </li>
          </ul>


          <ul className="navbar-nav mx-2">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                style={{ textTransform: "uppercase" }}
                href="/GovernmentHospital"
                aria-expanded="false"
              >
                Government Hospital
              </a>
            </li>
          </ul>
          
        </div>
      </nav>
    </>
  );
}

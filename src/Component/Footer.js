import React from 'react'
import "./Footer.css"


export const Footer = () => {
  let newDate = new Date()
  let year = newDate.getFullYear();
  return (
    <>
      <footer>
        <div className="footer-logo">
          {/* <!-- Facebook --> */}
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#3b5998" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          {/* <!-- Twitter --> */}
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#55acee" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-twitter"></i>
          </a>

          {/* <!-- Google --> */}
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#dd4b39" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-google"></i>
          </a>

          {/* <!-- Instagram --> */}
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#ac2bac" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        {/* Copyright  */}
        <div className="footer-text">
          <span>© {year} Copyright: </span>
          <a className="text-white active px-2" href="/">
            <span>HealthMate.com</span>
          </a>
        </div>
        {/* Copyright  */}
      </footer>
    </>
  );
}

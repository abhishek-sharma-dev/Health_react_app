import React, { useState } from "react";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    if (res.status === 400 || !data) {
      alert("Invalid User");
    } else {
      alert("Login successfull");
      navigate("/");
    }
  };

  return (
    <>
      <div id="login-container">
        <div id="login">
          <section className="row-container">
            <div id="loginRow-1">
              <img
                src="../image/loginForm.svg"
                className="img-fluid"
                alt="Phoneimage"
              />
              <div className="goToRegistrationForm mt-4">
                Don't have an account?{" "}
                <NavLink to="/RegistrationForm" className="createAcconut">
                  Register
                </NavLink>
              </div>
            </div>

            <div id="loginRow-2">
              <div className="loginHeader">
                <p className="h1 fw-bold">Login</p>
              </div>
              <form method="POST" className="loginForm mt-4 mb-4">
                {/* <!-- Email input --> */}
                <div className="inputField form-outline mb-4">
                  <i className="icon fas fa-envelope fa-lg me-3 fa-fw"></i>
                  <input
                    type="email"
                    id="email"
                    className="form-control form-control-lg"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required=""
                  />
                </div>

                {/* <!-- Password input --> */}
                <div className="inputField form-outline mb-4">
                  <i className="icon fas fa-lock fa-lg me-3 fa-fw"></i>
                  <input
                    type="password"
                    id="password"
                    className="form-control form-control-lg"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required=""
                  />
                </div>

                {/* <!-- Submit button --> */}
                <div className="loginBtnDiv">
                  <input
                    type="submit"
                    name="login"
                    id="loginBtn"
                    className="btn btn-primary btn-lg"
                    value="Login"
                    onClick={loginUser}
                  />
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Login;

import React, { useState } from "react";
import "../Component/RegistrationForm.css";
import { NavLink, useNavigate } from "react-router-dom";


export const RegistrationForm = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const registerData = async (e) => {
    e.preventDefault();

    const { name, email, password, cpassword } = user;

    
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        cpassword,
      }),
    });
    const data = await res.json();
    if (password !== cpassword || res.status === 422 || !data) {
      window.alert("Invalid registration");
    } else {
      window.alert("Registration successful");

      navigate("/login");
    }
  };

  return (
    <>
      <div className="registrationContainer">
        <div className="container mt-4 mb-4">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black">
                <div
                  className="card-body p-md-5 d-flex"
                  style={{ borderRadius: "10px" }}
                >
                  {/* {row-1 for data entry} */}
                  <div className="row-1 w-55 px-4" style={{ width: "50%" }}>
                    <div className="signup">
                      <p className="header h1 fw-bold">Sign up</p>
                      <form method="POST" className="userForm">
                        {/* {your name area} */}
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="icon fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              name="name"
                              id="form3Example1c"
                              className="form-control"
                              placeholder="Your Name"
                              autoComplete="off"
                              value={user.name}
                              required
                              onChange={handleInputs}
                            />
                          </div>
                        </div>

                        {/* {your email area} */}
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="icon fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              name="email"
                              id="form3Example3c"
                              className="form-control"
                              placeholder="Your Email"
                              autoComplete="off"
                              value={user.email}
                              onChange={handleInputs}
                              required
                            />
                          </div>
                        </div>

                        {/* {your password area} */}
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="icon fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              name="password"
                              id="form3Example4c"
                              className="form-control"
                              placeholder="Password"
                              autoComplete="off"
                              value={user.password}
                              onChange={handleInputs}
                              required
                            />
                          </div>
                        </div>

                        {/* {your confirm password area} */}
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="icon fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              name="cpassword"
                              id="form3Example4cd"
                              className="form-control"
                              placeholder="Confirm password"
                              autoComplete="off"
                              value={user.cpassword}
                              onChange={handleInputs}
                              required
                            />
                          </div>
                        </div>
                        <div className="btnDiv mx-4 mb-3 mb-lg-4">
                          <input
                            type="submit"
                            name="singup"
                            id="singup"
                            className="btn btn-primary btn-lg"
                            value="Register"
                            onClick={registerData}
                          />
                        </div>
                      </form>
                    </div>
                  </div>

                  {/* {row-1 for image} */}
                  <div className="row-2" style={{ width: "50%" }}>
                    <img
                      src="../image/registrationForm.jpg"
                      className="img-fluid mb-4"
                      alt="SampleImage"
                    />
                    <div className="goToLoginForm mt-4">
                      Have already an account?{" "}
                      <NavLink
                        to="/login"
                        className="alreadyRegister"
                        style={{ color: "#0d6efd" }}
                      >
                        Login here
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

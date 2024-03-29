import React from "react";
// import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./ForDoctorRegistration.css";

export const ForDoctorRegistration = () => {
  const [doctorData, setDoctorData] = useState({
    fname: "",
    lname: "",
    address: "",
    email: "",
  });

  let name, value;
  
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setDoctorData({ ...doctorData, [name]: value });
  };

  const addDoctorData = async (e) => {
    e.preventDefault();

    const { fname, lname, address, email } = doctorData;

    console.log(doctorData.fname);


    const res = await fetch("/Doctordata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fname, lname, address, email }),
    });
    const data = await res.json();

    console.log(data);
    if (res.status === 422 || !data) {
      window.alert("Invalid registration");
    } else {
      window.alert("Registration successful");
    }
  };

  // let name, value;
  // const handleInputs = (e) => {
  //   name = e.target.name;
  //   value = e.target.value;

  //   setUser({ ...user, [name]: value });
  // };
  return (
    <>
      <section className="h-100">
        <form className="container py-3 h-100" method="POST">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                      alt="Samplephoto"
                      className="img-fluid"
                      style={{
                        borderTopLeftRadius: ".25rem",
                        borderBottomLeftRadius: ".25rem",
                      }}
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5 text-uppercase">
                        Doctor Registration Form
                      </h3>

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <label
                              className="form-label"
                              htmlFor="form3Example1m"
                            >
                              First name
                            </label>
                            <input
                              type="text"
                              id="form3Example1m"
                              placeholder="First name"
                              className="form-control form-control-lg"
                              style={{ width: "95%" }}
                              value={doctorData.fname}
                              required
                              onChange={handleInputs}
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <label
                              className="form-label"
                              htmlFor="form3Example1n"
                            >
                              Last name
                            </label>
                            <input
                              type="text"
                              id="form3Example1n"
                              placeholder="Last name"
                              className="form-control form-control-lg"
                              style={{ width: "95%" }}
                              value={doctorData.lname}
                              required
                              // onChange={handleInputs}
                              onChange={handleInputs}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example8">
                          Address
                        </label>
                        <input
                          type="text"
                          id="form3Example8"
                          className="form-control form-control-lg"
                          value={doctorData.address}
                          // onChange={handleInputs}
                          onChange={handleInputs}
                        />
                      </div>

                      <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                        <h6 className="mb-0">Gender: </h6>

                        <div className="form-check form-check-inline mb-0 me-4">
                          <label
                            className="form-check-label"
                            htmlFor="femaleGender"
                          >
                            Female
                          </label>
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="femaleGender"
                            value="option1"
                          />
                        </div>

                        <div className="form-check form-check-inline mb-0 me-4">
                          <label
                            className="form-check-label"
                            htmlFor="maleGender"
                          >
                            Male
                          </label>
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="maleGender"
                            value="option2"
                          />
                        </div>

                        <div className="form-check form-check-inline mb-0">
                          <label
                            className="form-check-label"
                            htmlFor="otherGender"
                          >
                            Other
                          </label>
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="otherGender"
                            value="option3"
                          />
                        </div>
                      </div>

                      {/* <div className="row">
                  <div className="col-md-6 mb-4">

                    <select className="select">
                      <option value="1">State</option>
                      <option value="2">Option 1</option>
                      <option value="3">Option 2</option>
                      <option value="4">Option 3</option>
                    </select>

                  </div>
                  <div className="col-md-6 mb-4">

                    <select className="select">
                      <option value="1">City</option>
                      <option value="2">Option 1</option>
                      <option value="3">Option 2</option>
                      <option value="4">Option 3</option>
                    </select>

                  </div>
                </div> */}

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example9">
                          DOB
                        </label>
                        <input
                          type="date"
                          id="form3Example9"
                          className="form-control form-control-lg"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example90">
                          Pincode
                        </label>
                        <input
                          type="text"
                          id="form3Example90"
                          className="form-control form-control-lg"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example99">
                          Specialty
                        </label>
                        <input
                          type="text"
                          id="form3Example99"
                          className="form-control form-control-lg"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example97">
                          Email ID
                        </label>
                        <input
                          type="text"
                          id="form3Example97"
                          className="form-control form-control-lg"
                          value={doctorData.email}
                          onChange={handleInputs}
                        />
                      </div>

                      <div className="d-flex justify-content-end pt-3">
                        <input
                          type="button"
                          className="btn btn-warning btn-lg ms-2"
                          // onClick={registerData}
                          value={"Submit Form"}
                          onClick={addDoctorData}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

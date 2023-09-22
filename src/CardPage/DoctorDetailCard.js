import React from 'react'
import './DoctorDetailCard.css'

export const DoctorDetailCard = (props) => {

  return (
    <>
      <section>
        <div className="container">
          <div className="row justify-content-center mb-3">
            <div className="col-md-12 col-xl-10">
              <div className="card shadow-0 border rounded-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                      <div className="bg-image hover-zoom ripple rounded ripple-surface">
                        <img
                          src={props.doctorimage}
                          className="w-100"
                          alt="img"
                        />
                        <a href="/">
                          <div className="hover-overlay">
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(253, 253, 253, 0.15)",
                              }}
                            ></div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6 px-2">
                      <h5>
                        {props.doctorname === ""
                          ? "Not Available"
                          : props.doctorname}
                      </h5>
                      <div className="d-flex flex-row my-2">
                        <span>4.5</span>
                        <div className="text-danger">
                          <i className="fa fa-star"></i>
                        </div>
                      </div>

                      {/* Hospital Name Area*/}
                      <div className="Hospital-Detail-Text">
                        <h6 className="text-truncate">
                          Hospital Name:{" "}
                          {props.hospitalname === ""
                            ? "Not Available"
                            : props.hospitalname}
                        </h6>
                      </div>

                      {/* Hospital Address Area*/}
                      <div className="Hospital-Detail-Text">
                        <h6>Hospital Address: </h6>
                        <p className="text-truncate">
                          {props.address === ""
                            ? "Not Available"
                            : props.address}
                        </p>
                      </div>

                      {/* Hospital Location Area*/}
                      <div
                        className="Hospital-Detail-Text"
                        id="hospitalLocation"
                      >
                        <h6 id="location">
                          Hospital Location:{" "}
                          <p>
                            {props.hospitallocation === ""
                              ? "Not Available"
                              : props.hospitallocation}
                          </p>
                        </h6>
                      </div>

                      {/* Hospital Contact Area*/}
                      <div
                        className="Hospital-Detail-Text"
                        id="hospitalContact"
                      >
                        <h6 id="contact">
                          Hospital Contact:{" "}
                          <p className="text-truncate">
                            {props.doctorcontact === ""
                              ? "Not Available"
                              : props.doctorcontact}
                          </p>
                        </h6>
                      </div>
                    </div>

                    <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                      <div className="d-flex flex-column">
                      <iframe id='navigation' title='myframe' src={props.navigation} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

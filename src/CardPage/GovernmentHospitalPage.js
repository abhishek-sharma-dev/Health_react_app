import React from 'react'

export const GovernmentHospitalPage = (props) => {
    const {hospitalname, hospitaladdress, hospitalcontact} = props;
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
                          src='./image/hospitalLogo.png'
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
                    {/* Hospital Name */}
                    <div className="col-md-6 col-lg-6 col-xl-6 px-2">
                      <h5>
                      HospitalName :
                        {hospitalname === ""
                          ? "Not Available"
                          : hospitalname}
                      </h5>

                      {/* Hospital Address Area*/}
                      <div className="Hospital-Detail-Text">
                        <h6>Hospital Address: </h6>
                        <p className="text-truncate">
                          {hospitaladdress === ""
                            ? "Not Available"
                            : hospitaladdress}
                        </p>
                      </div>

                      {/* Hospital Location Area*/}
                      <div
                        className="Hospital-Detail-Text"
                        id="hospitalLocation"
                      >
                        {/* <h6 id="location">
                          Hospital Location:{" "}
                          <p>
                            {hospitallocation === ""
                              ? "Not Available"
                              : hospitallocation}
                          </p>
                        </h6> */}
                      </div>

                      {/* Hospital Contact Area*/}
                      <div
                        className="Hospital-Detail-Text"
                        id="hospitalContact"
                      >
                        <h6 id="contact">
                          Hospital Contact:{" "}
                          <p className="text-truncate">
                            {hospitalcontact === ""
                              ? "Not Available"
                              : hospitalcontact}
                          </p>
                        </h6>
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
  )
}

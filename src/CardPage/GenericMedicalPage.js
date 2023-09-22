import React from 'react'

export const GenericMedicalPage = (props) => {
  const { 
    medicalname, 
    medicaladdress, 
    medicalcontact,  } = props;
  return (
    <>
    <section style={{width: "90%" }}>
        <div className="container">
          <div className="row justify-content-center mb-3">
            <div className="col-md-12 col-xl-10">
              <div className="card shadow-0 border rounded-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                      <div className="bg-image hover-zoom ripple rounded ripple-surface">
                        <img
                          src="./image/medicalLogo.jpg"
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
                      
                      {/* --MedicalStores Name-- */}
                      <h5>
                      MedicalStores :{" "}
                        {medicalname === ""
                          ? "Not Available"
                          : medicalname}
                      </h5>

                      {/* --MedicalStores Address Area-- */}
                      <div className="Hospital-Detail-Text">
                        <h6>MedicalStores Address: </h6>
                        <p className="text-truncate">
                          {medicaladdress === ""
                            ? "Not Available"
                            : medicaladdress}
                        </p>
                      </div>

                      {/* --MedicalStores Location Area-- */}
                      <div
                        className="Hospital-Detail-Text"
                        id="hospitalLocation"
                      >
                        {/* <h6 id="location">
                          MedicalStores Location:{" "}
                          <p>
                            {hospitallocation === ""
                              ? "Not Available"
                              : hospitallocation}
                          </p>
                        </h6> */}
                      </div>

                      {/* --MedicalStores Contact Area-- */}
                      <div
                        className="Hospital-Detail-Text"
                        id="hospitalContact"
                      >
                        <h6 id="contact">
                        MedicalStores Contact:{" "}
                          <p className="text-truncate">
                            {medicalcontact === ""
                              ? "Not Available"
                              : medicalcontact}
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

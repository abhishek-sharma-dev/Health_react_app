import React from 'react'
import './About.css'



export const About = () => {
  return (
    <>
      <div className="w-100 py-5">
        <div className="container py-5">
          <div className="row mb-4">
            <div className="col-lg-5 ">
              <h2 className="display-4 font-weight-light">Our team</h2>
            </div>
          </div>

          <div className="row text-center" style={{gap:"20px"}}>
            {/* <!-- Team item--> */}
            <div className="w-20 col-xl-3 col-sm-6 ">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/avatar-4.png"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Utkarsha Kharat</h5>
                <span className="small text-uppercase text-muted">
                  CEO - Founder
                </span>
                <br />
                <span className="small text-muted">
                  2019.utkarsha.kharat@ves.ac.in
                </span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a href="/" className="social-link">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- End--> */}

            {/* <!-- Team item--> */}
            <div className="w-20 col-xl-3 col-sm-6 ">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/avatar-4.png"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Komal Bhongle</h5>
                <span className="small text-uppercase text-muted">
                  CEO - Founder
                </span>
                <br />
                <span className="small text-muted">
                  2019.komalbhongle@ves.ac.in
                </span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a href="/" className="social-link">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- End--> */}

            {/* <!-- Team item--> */}
            <div className="w-20 col-xl-3 col-sm-6 ">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Abhishek Sharma</h5>
                <span className="small text-uppercase text-muted">
                  CEO - Founder
                </span>
                <br />
                <span className="small text-muted">
                  2019.abhishek.sharma@ves.ac.in
                </span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a href="/" className="social-link">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- End--> */}

            {/* <!-- Team item--> */}
            <div className="w-20 col-xl-3 col-sm-6 ">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Ameya Vikharankar</h5>
                <span className="small text-uppercase text-muted">
                  CEO - Founder
                </span>
                <br />
                <span className="small text-muted">
                  2019ameya.vikharankar@ves.ac.in
                </span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a href="/" className="social-link">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- End--> */}
          </div>
        </div>
      </div>
    </>
  );
}

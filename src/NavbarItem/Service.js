import React from 'react'
import './Service.css'
export const Service = () => {
  return (
    <>
      <div
        className="container-fluid" id='service-container'
        style={{ textAlign: "center" }}
      >
        <div className="hd">Why People Believe in Us</div>
        <p>
          <small className="text-muted">
            Always render more and better service than <br />
            is expected of you, no matter what your ask may be.
          </small>
        </p>
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="card col-md-3 col-12">
            <div className="card-content">
              <div className="card-body">
                
                <img
                  className="img"
                  src="https://i.imgur.com/S7FJza5.png"
                  alt="img"
                />
                <div className="shadow"></div>
                <div className="card-title"> We're Free </div>
                <div className="card-subtitle">
                  <p>
                    {" "}
                    <small className="text-muted">
                      We spent thousands of hours creating on algorithm that
                      does this for you in seconds.
                    </small>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card col-md-3 col-12 ml-2">
            <div className="card-content">
              <div className="card-body">
                {" "}
                <img
                  className="img"
                  src="https://i.imgur.com/xUWJuHB.png"
                  alt="img"
                />
                <div className="card-title"> We're Unbiased </div>
                <div className="card-subtitle">
                  <p>
                    {" "}
                    <small className="text-muted">
                      {" "}
                      We don't accept ads from anyone. We use actual data to
                      match you who the best person for each job{" "}
                    </small>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card col-md-3 col-12 ml-2">
            <div className="card-content">
              <div className="card-body">
                {" "}
                <img
                  className="img rck"
                  src="https://i.imgur.com/rG3CGn3.png"
                  alt="img"
                />
                <div className="card-title"> We Guide you </div>
                <div className="card-subtitle">
                  <p>
                    {" "}
                    <small className="text-muted">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Ut suscipit quas labore molestiae in placeat ipsa,
                      accusantium animi inventore quo!
                    </small>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

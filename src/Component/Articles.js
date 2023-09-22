import React from 'react'
import "../Component/Articles.css"

export const Articles = () => {
  return (
    <>
      <div className="articleCard">
        {/* ---------------------- row 1 -------------------- */}
        <div className="cardRow row1">
          <div className="articleCard-body">
            <div id="imgContainer">
              <img
                src="../image/articleImg1.jpg"
                className="articleCard-img"
                alt="img"
              />
            </div>

            <div className="articleCard-content">
              <h5 className="articleCard-title mb-3">Read top articles</h5>

              <hr />

              <p className="articleCard-text mb-3">
                Health articles that keep you informed about good health
                practices and achieve your goals.
              </p>
              <a
                href="https://www.happiesthealth.com/"
                target="_blank"
                rel="noreferrer"
                className="articleBtn btn btn-primary mb-3"
              >
                See all article
              </a>
            </div>
          </div>
        </div>

        {/* ---------------------- row 2 -------------------- */}
        <div className="cardRow row2">
          <div className="articleCard-body">
            <div id="imgContainer">
              <img
                src="../image/articleImg2.jpg"
                className="articleCard-img"
                alt="img"
              />
            </div>

            <div className="articleCard-content">
              <h5 className="articleCard-title mb-3">DIABETES</h5>

              <hr />

              <p className="articleCard-text mb-3">
                Diabetes is a chronic health condition that affects how your
                body turns food into energy.
              </p>
              <a
                href="https://www.happiesthealth.com/category/diabetes"
                target="_blank"
                rel="noreferrer"
                className="articleBtn btn btn-primary mb-3"
              >
                Find out more
              </a>
            </div>
          </div>
        </div>

        {/* ---------------------- row 3 -------------------- */}
        <div className="cardRow row3">
          <div className="articleCard-body">
            <div id="imgContainer">
              <img
                src="../image/articleImg3.jpg"
                className="articleCard-img"
                alt="img"
              />
            </div>

            <div className="articleCard-content">
              <h5 className="articleCard-title mb-3">CANCER</h5>

              <hr />

              <p className="articleCard-text mb-3">
                Cancer is a disease in which some of the body's cells grow
                uncontrollably and spread to other parts of the body.
              </p>
              <a
                href="https://www.happiesthealth.com/category/cancer"
                target="_blank"
                rel="noreferrer"
                className="articleBtn btn btn-primary mb-3"
              >
                Find out more
              </a>
            </div>
          </div>
        </div>

        {/* ---------------------- row 4 -------------------- */}
        <div className="cardRow row4">
          <div className="articleCard-body">
            <div id="imgContainer">
              <img
                src="../image/articleImg4.jpg"
                className="articleCard-img"
                alt="img"
              />
            </div>

            <div className="articleCard-content">
              <h5 className="articleCard-title mb-3">AYURVEDA</h5>

              <hr />

              <p className="articleCard-text mb-3">
                Ayurvedic medicine is one of the world’s oldest medical systems
                and remains one of India’s traditional health care systems.
              </p>
              <a
                href="https://www.happiesthealth.com/category/ayurveda"
                target="_blank"
                rel="noreferrer"
                className="articleBtn btn btn-primary mb-3"
              >
                Find out more
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}




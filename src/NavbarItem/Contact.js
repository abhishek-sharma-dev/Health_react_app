import React from 'react'
import './Contact.css'

export const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="text-center mb-3">
          <h3>Contact us</h3>
        </div>
        <div className="row">
          <div className="col-md-4" >
            <div className="card contact-card">
              <img src="https://i.imgur.com/xuGJbnU.png" width="40" alt="img" />
              <h5>Address</h5>
              <p>Maharashtra, Mumbai, Chembur</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card contact-card">
              <img src="https://i.imgur.com/TNKflal.png" width="40" alt="img" />
              <h5>Email</h5>
              <p>2019ameya.vikharankar@ves.ac.in</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card contact-card">
              <img src="https://i.imgur.com/pZLFSO3.png" width="40" alt="img" />
              <h5>Phone</h5>
              <p>+91 9324312342</p>
            </div>
          </div>
        </div>
        <div id="contactus-container">
          <h3 id='feedback'>feedback form</h3>
          <form
            id="contactus"
            action="https://formspree.io/f/mgeqnryo"
            method="post"
          >
            <input
              type="text"
              placeholder="Username"
              name="username"
              required
              autoComplete="off"
            />
            <input
              type="email"
              placeholder="Email"
              name="Email"
              required
              autoComplete="off"
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter your message"
            ></textarea>
            <input id='submitBtn' type="submit" value='Submit'/>
          </form>
        </div>
      </div>
    </>
  );
}

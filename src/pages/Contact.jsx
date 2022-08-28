import React from "react";
import "../styles/contact.scss";

const Contact = () => {
  return (
    <div className="content">
      <div className="centered-content">
        <div className="left-content">
          <h1 className="contact-title">Contact Us</h1>
          <h3 className="contact-heading">
            Get in touch with our friendly team
          </h3>
          <p className="contact-description">
            Our support goes all the way. We love hearing from customers and
            visitors and are always happy to help.
          </p>
          <div className="social-icons">
            <a href="">
              <img src="social-icons/linkedin.png" alt="" />
            </a>
            <a href="">
              <img src="social-icons/twitter.png" alt="" />
            </a>
            <a href="">
              <img src="social-icons/instagram.png" alt="" />
            </a>
            <a href="">
              <img src="social-icons/facebook.png" alt="" />
            </a>
          </div>
          <div className="contact-info">
            <p>
              <a href="mailto:contactaxire@gmail.com">
                <img src="social-icons/gmail.png" alt="" />
                <span>contactaxire@gmail.com</span>
              </a>
            </p>
            <p>
              <a href="tel:+919999999999">
                <img src="social-icons/call.png" alt="" />
                <span> +91-9999-999-999</span>
              </a>
            </p>
          </div>
        </div>
        <div className="right-content">
          <div className="contact-form">
            <div className="input-half">
              <input type="text" placeholder="First Name" />
            </div>
            <div className="input-half">
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="input-full">
              <div className="input-icon">
                <img src="icons/contact-mail.png" alt="" />
              </div>
              <input type="text" placeholder="Enter your e-mail" />
            </div>
            <div className="input-full">
              <div className="input-icon">
                <img src="icons/contact-subject.png" alt="" />
              </div>
              <input type="text" placeholder="Subject" />
            </div>
            <div className="input-full">
              <div className="input-icon">
                <img src="icons/contact-message.png" alt="" />
              </div>
              <input type="text" placeholder="How we can help you?" />
            </div>
            <div
              className="input-full"
              style={{ backgroundColor: "transparent" }}
            >
              <div className="form-description">
                This site is protected by reCAPTCHA and the Google Privacy
                Policy and Terms of Service apply.
              </div>
            </div>
            <div className="input-full">
              <button className="submit-button">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

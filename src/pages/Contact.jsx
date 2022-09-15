import React, { useState } from "react";
import "../styles/contact.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postData } from "../utils/apiCall";

const Contact = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    mail: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [isSending, setisSending] = useState(false);

  const sendMail = async () => {
    if (!formValues.firstName) {
      setError("First Name is requeired");
    } else if (!formValues.lastName) {
      setError("Last Name is required");
    } else if (!formValues.mail) {
      setError("Mail id is required");
    } else if (
      !formValues.mail
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      setError("Enter Valid Mail Id");
    } else if (!formValues.subject) {
      setError("Subject is required");
    } else if (!formValues.message) {
      setError("Message is required");
    } else {
      setError("");
      setisSending(true);
      let body = {
        text: `First Name: ${formValues.firstName}
      Last Name: ${formValues.lastName}
      mail: ${formValues.mail}
      subject: ${formValues.subject}
      message: ${formValues.message}`,
        html: ` First Name: <b> ${formValues.firstName} </b> <br/>
       Last Name: <b>${formValues.lastName} </b> <br/>
       mail:<b> ${formValues.mail} </b> <br/>
       subject:<b> ${formValues.subject} </b> <br/>
       message:<b> ${formValues.message} </b> <br/>`,
      };

      const params = new URLSearchParams();

      body.text && params.append("text", body.text);
      body.html && params.append("html", body.html);

      const res = await postData("/send-mail", params);

      if (res.success) {
        setisSending(false);
        toast.success("Email sent successfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setFormValues({
          firstName: "",
          lastName: "",
          mail: "",
          subject: "",
          message: "",
        });
      } else {
        setisSending(false);
        toast.error("Something went wrong. try again!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };

  return (
    <div className="content">
      <div className="contact-centered-content">
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
              <input
                onChange={(e) =>
                  setFormValues({ ...formValues, firstName: e.target.value })
                }
                autoComplete="off"
                type="text"
                placeholder="First Name"
                value={formValues.firstName}
              />
            </div>
            <div className="input-half">
              <input
                onChange={(e) =>
                  setFormValues({ ...formValues, lastName: e.target.value })
                }
                value={formValues.lastName}
                autoComplete="off"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div className="input-full">
              <div className="input-icon">
                <img src="icons/contact-mail.png" alt="" />
              </div>
              <input
                onChange={(e) =>
                  setFormValues({ ...formValues, mail: e.target.value })
                }
                autoComplete="off"
                type="text"
                placeholder="Enter your e-mail"
                value={formValues.mail}
              />
            </div>
            <div className="input-full">
              <div className="input-icon">
                <img src="icons/contact-subject.png" alt="" />
              </div>
              <input
                onChange={(e) =>
                  setFormValues({ ...formValues, subject: e.target.value })
                }
                autoComplete="off"
                type="text"
                placeholder="Subject"
                value={formValues.subject}
              />
            </div>
            <div className="input-full">
              <div className="input-icon">
                <img src="icons/contact-message.png" alt="" />
              </div>
              <input
                onChange={(e) =>
                  setFormValues({ ...formValues, message: e.target.value })
                }
                autoComplete="off"
                type="text"
                placeholder="How we can help you?"
                value={formValues.message}
              />
            </div>
            <div
              className="input-full"
              style={{ backgroundColor: "transparent" }}
            >
              <div className="form-description">{error}</div>
            </div>
            <div className="input-full">
              <button
                // type="button"
                onClick={sendMail}
                className="submit-button"
                disabled={isSending}
              >
                {isSending ? "Sending mail..." : "Submit"}
              </button>
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-contact-content">
        <div>
          <h1 className="mobile-contact-title">Contact Us</h1>
          <h3 className="mobile-contact-heading">
            Get in touch with our friendly team
          </h3>
          <p className="mobile-contact-description">
            Our support goes all the way. We love hearing from customers and
            visitors and are always happy to help.
          </p>
          <div className="contact-form">
            <div className="input-half">
              <input
                onChange={(e) =>
                  setFormValues({ ...formValues, firstName: e.target.value })
                }
                autoComplete="off"
                type="text"
                placeholder="First Name"
                value={formValues.firstName}
              />
            </div>
            <div className="input-half">
              <input
                onChange={(e) =>
                  setFormValues({ ...formValues, lastName: e.target.value })
                }
                value={formValues.lastName}
                autoComplete="off"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div className="input-full">
              <div className="input-icon">
                <img src="icons/contact-mail.png" alt="" />
              </div>
              <input
                onChange={(e) =>
                  setFormValues({ ...formValues, mail: e.target.value })
                }
                autoComplete="off"
                type="text"
                placeholder="Enter your e-mail"
                value={formValues.mail}
              />
            </div>
            <div className="input-full">
              <div className="input-icon">
                <img src="icons/contact-subject.png" alt="" />
              </div>
              <input
                onChange={(e) =>
                  setFormValues({ ...formValues, subject: e.target.value })
                }
                autoComplete="off"
                type="text"
                placeholder="Subject"
                value={formValues.subject}
              />
            </div>
            <div className="input-full">
              <div className="input-icon">
                <img src="icons/contact-message.png" alt="" />
              </div>
              <input
                onChange={(e) =>
                  setFormValues({ ...formValues, message: e.target.value })
                }
                autoComplete="off"
                type="text"
                placeholder="How we can help you?"
                value={formValues.message}
              />
            </div>
            <div
              className="input-full"
              style={{ backgroundColor: "transparent" }}
            >
              <div className="form-description">{error}</div>
            </div>
            <div className="input-full">
              <button
                // type="button"
                onClick={sendMail}
                className="submit-button"
                disabled={isSending}
              >
                {isSending ? "Sending mail..." : "Submit"}
              </button>
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </div>
          </div>
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
          <div className="mobile-contact-info">
            <p>
              <a href="mailto:contactaxire@gmail.com">
                <img src="social-icons/gmail.png" alt="" />
                <span> contactaxire@gmail.com</span>
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
      </div>
    </div>
  );
};

export default Contact;

import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import "./index.css";
function Contact() {
  //hook for error messages
  const [errorMessage, setErrorMessage] = useState("");

  //hook for initializing input fields
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  //deconstruct our formState
  const { name, email, message } = formState;

  //handleChange function for when use has moved off the form input area
  function handleChange(e) {
    if (e.target.name === "email") {
      //check if the target value is a valid email
      //create a variable to store the true/false return from function
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      }
      //If there is no issue, make the errormessage null
      else {
        setErrorMessage("");
      }
    }
    //if target value is not email (message, name)
    else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required!`);
      }
      //If there is no issue, make the errormessage null
      else {
        setErrorMessage("");
      }
    }

    //If there was no error message, we can now setFormState
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }
  //handle submit function for form
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }
  return (
    <>
      <section id="contacts">
        <h2 className="title">Contact</h2>

        <section id="information">
          <form id="contact-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                onBlur={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email">Email address:</label>
              <input
                type="email"
                name="email"
                defaultValue={email}
                onBlur={handleChange}
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                defaultValue={message}
                onBlur={handleChange}
                rows="5"
              />
              {errorMessage && (
                <div>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}
            </div>
            <button id="submit-btn" type="submit">
              Submit
            </button>
          </form>

          <section id="contact-info">
            <h3 id="contact-subtitle">Please contact me on these platforms:</h3>
            <div className="contact aside">
              <div className="info">
                <ul>
                  <li>
                    Twitter:{" "}
                    <a
                      href="https://twitter.com/claire_cashmore"
                      target="_blank"
                    >
                      @claire_cashmore
                    </a>
                  </li>
                  <li>
                    Instagram:{" "}
                    <a
                      href="https://www.instagram.com/claire_cashmore17/"
                      target="_blank"
                    >
                      @claire_cashmore17
                    </a>
                  </li>
                  <li>
                    GitHub:{" "}
                    <a
                      href="https://github.com/clairecashmore17"
                      target="_blank"
                    >
                      clairecashmore17
                    </a>
                  </li>
                  <li>
                    LinkedIn:{" "}
                    <a
                      href="https://www.linkedin.com/in/claire-cashmore/"
                      target="_blank"
                    >
                      Claire Cashmore
                    </a>
                  </li>
                  <li>
                    Email:{" "}
                    <a
                      href="mailto:clairecashmore2017@gmail.com"
                      target="_blank"
                    >
                      clairecashmore2017@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
              <aside className="icons">
                <img
                  src="../../images/contact-add.webp"
                  alt="contact adding icon commonly seen when adding a colleague or friend"
                />
                <img
                  src="../../images/social-media-icons.png"
                  alt="icons of multiple media sites representing contact"
                />
              </aside>
            </div>
          </section>
        </section>
      </section>
    </>
  );
}

export default Contact;

import React from "react";
import "./index.css";
function Contact() {
  return (
    <>
      <section id="contacts">
        <h2 className="title">Contact</h2>

        <section id="contact-info">
          <h3 id="contact-subtitle">Please contact me on these platforms:</h3>
          <div className="contact aside">
            <div className="info">
              <ul>
                <li>
                  Twitter:{" "}
                  <a href="https://twitter.com/claire_cashmore" target="_blank">
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
                  <a href="https://github.com/clairecashmore17" target="_blank">
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
                  <a href="mailto:clairecashmore2017@gmail.com" target="_blank">
                    clairecashmore2017@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <aside className="icons">
              <img
                src={require("../../images/contact-add.webp")}
                alt="contact adding icon commonly seen when adding a colleague or friend"
              />
              <img
                src={require("../../images/social-media-icons.png")}
                alt="icons of multiple media sites representing contact"
              />
            </aside>
          </div>
        </section>
      </section>
    </>
  );
}

export default Contact;

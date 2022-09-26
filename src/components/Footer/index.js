import React from "react";
import "./index.css";
function Footer() {
  return (
    <>
      <section id="footer">
        <h2>Made by Claire Cashmore</h2>
        <div id="links">
          <a href="https://github.com/clairecashmore17" target={"_blank"}>
            <img src={require("../../images/github.png")} />
          </a>
          <a
            href="https://www.linkedin.com/in/claire-cashmore/"
            target={"_blank"}
          >
            <img src={require("../../images/linkedin.png")} />
          </a>
          <a href="https://twitter.com/claire_cashmore" target={"_blank"}>
            <img src={require("../../images/twitter.png")} />
          </a>
        </div>
      </section>
    </>
  );
}

export default Footer;

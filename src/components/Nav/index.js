import React from "react";

import "./index.css";
function Navbar(props) {
  const { setPageSelected, pageSelected } = props;
  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          Claire Cashmore's Portfolio
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className={`mx-2 ${pageSelected === "about" && "navActive"}`}>
            <span onClick={() => setPageSelected("about")}>About Me</span>
          </li>
          <li className={`mx-2 ${pageSelected === "projects" && "navActive"}`}>
            <span onClick={() => setPageSelected("projects")}>Projects</span>
          </li>
          <li className={`mx-2 ${pageSelected === "contact" && "navActive"}`}>
            <span onClick={() => setPageSelected("contact")}>Contact</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

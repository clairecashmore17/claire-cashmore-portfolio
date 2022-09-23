import React from "react";

import "./index.css";
function Navbar() {
  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          Claire Cashmore's Portfolio
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className={`mx-2 `}>
            <span>About Me</span>
          </li>
          <li className={`mx-2 `}>
            <span>Projects</span>
          </li>
          <li className={`mx-2 `}>
            <span>Contact</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

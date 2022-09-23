import React from "react";
import About from "../About";
import Contact from "../Contact";
import Projects from "../Projects";

function Page(props) {
  const { pageSelected } = props;
  if (pageSelected === "about") {
    return <About></About>;
  } else if (pageSelected === "projects") {
    return <Projects></Projects>;
  } else if (pageSelected === "contact") {
    return <Contact></Contact>;
  }
}

export default Page;

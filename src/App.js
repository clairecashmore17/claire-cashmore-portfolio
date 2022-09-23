import "./App.css";
import Navbar from "./components/Nav";
import Page from "./components/renderedPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
function App() {
  // hook to change current page
  const [pageSelected, setPageSelected] = useState("about");

  return (
    <div>
      <Navbar
        className="navbar"
        pageSelected={pageSelected}
        setPageSelected={setPageSelected}
      ></Navbar>

      <main className="mainBody">
        <Page pageSelected={pageSelected}></Page>
      </main>
    </div>
  );
}

export default App;
